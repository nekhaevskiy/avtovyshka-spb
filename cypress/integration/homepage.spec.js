/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { vehicles } from '../../data';

describe('Homepage - Small mobiles', () => {
  beforeEach(() => {
    cy.viewport(320, 480);
    cy.visit('/');
  });

  it('has correct title tag, meta tag "description", and favicon.ico', () => {
    cy.title().should(
      'eq',
      'Аренда автовышки и автокрана в Санкт-Петербурге и Ленинградской области'
    );
    cy.document()
      .get('head meta[name="description"]')
      .should(
        'have.attr',
        'content',
        'Наша компания оказывает услуги по аренде автовышек и автокранов в Санкт-Петербурге и Ленинградской области'
      );
    cy.document().get('head link[rel="icon"]').should('have.attr', 'href', '/favicon.ico');
  });

  context('ContactBar', () => {
    it('shows the main phone', () => {
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('link', { name: '+7 (991) 000-91-11' })
          .should('be.visible')
          .and('have.attr', 'href', 'tel:+79910009111');
        cy.findByRole('link', { name: '+7 (812) 351-51-51' }).should('not.exist');
        cy.findByRole('link', { name: 'suedima@rambler.ru' }).should('not.exist');
        cy.findByText('Работаем круглосуточно').should('not.be.visible');
      });
    });
  });

  context('NavBar', () => {
    it('shows the logo, the heading and the menu button', () => {
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('link', { name: 'На главную' })
          .should('be.visible')
          .and('have.attr', 'href', '/');
        cy.findByRole('img', { name: 'На главную' }).should('be.visible');
        cy.findByRole('heading', { name: 'Аренда автовышки и автокрана' }).should('be.visible');
      });
    });

    it('opens and closes the menu and the sub-menu', () => {
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('navigation').should('not.exist');
        cy.findByRole('button', { name: 'Открыть меню' }).click();
        cy.findByRole('button', { name: 'Закрыть меню' }).should('be.visible');
        cy.findByRole('link', { name: 'Главная' })
          .should('be.visible')
          .and('have.attr', 'href', '/');
        cy.findByRole('link', { name: 'Автопарк' })
          .should('be.visible')
          .and('have.attr', 'href', '/#car-fleet');
        vehicles.forEach((vehicle) => {
          cy.findByRole('link', { name: vehicle.name })
            .should('be.visible')
            .and('have.attr', 'href', vehicle.path);
        });
        cy.findByRole('link', { name: 'Услуги' })
          .should('be.visible')
          .and('have.attr', 'href', '/#service');
        cy.findByRole('link', { name: 'Фото' })
          .should('be.visible')
          .and('have.attr', 'href', '/#photo');
        cy.findByRole('link', { name: 'Отзывы' })
          .should('be.visible')
          .and('have.attr', 'href', '/#reviews');
        cy.findByRole('link', { name: 'Контакты' })
          .should('be.visible')
          .and('have.attr', 'href', '/#contacts');
        cy.findByRole('button', { name: 'Закрыть меню' }).click();
        cy.findByRole('navigation').should('not.exist');
      });
    });
  });
});

describe('Homepage - Big mobiles', () => {
  beforeEach(() => {
    cy.viewport(640, 480);
    cy.visit('/');
  });

  context('ContactBar', () => {
    it('shows the main phone and the email', () => {
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('link', { name: '+7 (991) 000-91-11' }).should('be.visible');
        cy.findByRole('link', { name: '+7 (812) 351-51-51' }).should('not.exist');
        cy.findByRole('link', { name: 'suedima@rambler.ru' })
          .should('be.visible')
          .and('have.attr', 'href', 'mailto:suedima@rambler.ru');
        cy.findByText('Работаем круглосуточно').should('not.be.visible');
      });
    });
  });

  context('NavBar', () => {
    it('shows the logo and the full heading', () => {
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('link', { name: 'На главную' }).should('be.visible');
        cy.findByRole('img', { name: 'На главную' }).should('be.visible');
        cy.findByRole('heading', {
          name: 'Аренда автовышки и автокрана в Санкт-Петербурге и Ленинградской области',
        }).should('be.visible');
      });
    });
  });
});

describe('Homepage - Tablets', () => {
  beforeEach(() => {
    cy.viewport(768, 1024);
    cy.visit('/');
  });

  context('ContactBar', () => {
    it('shows only the contact items', () => {
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('link', { name: '+7 (991) 000-91-11' }).should('be.visible');
        cy.findByRole('link', { name: '+7 (812) 351-51-51' }).should('be.visible');
        cy.findByRole('link', { name: 'suedima@rambler.ru' }).should('be.visible');
        cy.findByText('Работаем круглосуточно').should('not.be.visible');
      });
    });
  });

  context('NavBar', () => {
    it('shows the logo, the full heading and the menu', () => {
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('link', { name: 'На главную' }).should('be.visible');
        cy.findByRole('img', { name: 'На главную' }).should('be.visible');
        cy.findByRole('button', { name: /(открыть|закрыть) меню/i }).should('not.exist');
        cy.findByRole('link', { name: 'Главная' }).should('be.visible');
        cy.findByRole('button', { name: 'Автопарк' }).should('be.visible');
        cy.findByRole('link', { name: 'Услуги' }).should('be.visible');
        cy.findByRole('link', { name: 'Фото' }).should('be.visible');
        cy.findByRole('link', { name: 'Отзывы' }).should('be.visible');
        cy.findByRole('link', { name: 'Контакты' }).should('be.visible');
      });
    });

    it('opens and closes the sub-menu', () => {
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('button', { name: 'Автопарк' }).as('subMenuBtn').should('be.visible');
        cy.findByTestId('sub-menu').should('not.be.visible');
        cy.get('@subMenuBtn').click();
        vehicles.forEach((vehicle) => {
          cy.findByRole('link', { name: vehicle.name }).should('be.visible');
        });
        cy.get('@subMenuBtn').click();
        cy.findByTestId('sub-menu').should('not.be.visible');
      });
    });
  });
});

describe('Homepage - Laptops', () => {
  beforeEach(() => {
    cy.viewport(1024, 1200);
    cy.visit('/');
  });

  context('ContactBar', () => {
    it('shows the contact items and the note', () => {
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('link', { name: '+7 (991) 000-91-11' }).should('be.visible');
        cy.findByRole('link', { name: '+7 (812) 351-51-51' }).should('be.visible');
        cy.findByRole('link', { name: 'suedima@rambler.ru' }).should('be.visible');
        cy.findByText('Работаем круглосуточно').should('be.visible');
      });
    });
  });

  context('NavBar', () => {
    it('shows the logo, the full heading and the menu', () => {
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('link', { name: 'На главную' }).should('be.visible');
        cy.findByRole('img', { name: 'На главную' }).should('be.visible');
        cy.findByRole('button', { name: /(открыть|закрыть) меню/i }).should('not.exist');
        cy.findByRole('link', { name: 'Главная' }).should('be.visible');
        cy.findByRole('button', { name: 'Автопарк' }).should('be.visible');
        cy.findByRole('link', { name: 'Услуги' }).should('be.visible');
        cy.findByRole('link', { name: 'Фото' }).should('be.visible');
        cy.findByRole('link', { name: 'Отзывы' }).should('be.visible');
        cy.findByRole('link', { name: 'Контакты' }).should('be.visible');
      });
    });
  });
});
