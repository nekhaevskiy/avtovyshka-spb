/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { contacts } from '../../data/contacts';
import { vehicles } from '../../data/vehicles';

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
    cy.document()
      .get('head link[rel="icon"]')
      .should('have.attr', 'href', '/favicon.ico');
  });

  context('ContactBar', () => {
    it('shows the main phone', () => {
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('link', { name: contacts[0].text.join(' ') })
          .should('be.visible')
          .and('have.attr', 'href', contacts[0].link);
        cy.findByRole('link', { name: contacts[1].text }).should('not.exist');
        cy.findByRole('link', { name: contacts[2].text }).should('not.exist');
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
        cy.findByRole('heading', {
          name: 'Аренда автовышки и автокрана',
        }).should('be.visible');
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
          .and('have.attr', 'href', '/#vehicle-fleet');
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

    it('closes the menu on click outside', () => {
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('button', { name: 'Открыть меню' }).click();
        cy.findByRole('navigation').should('be.visible');
      });
      cy.findByTestId('nav-bar').click();
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('navigation').should('not.exist');
      });
    });
  });

  context('IntroCarousel', () => {
    it("doesn't exist", () => {
      cy.findByTestId('intro-carousel').should('not.exist');
    });
  });

  context('VehicleFleet', () => {
    it('shows the heading and the cards', () => {
      cy.findByTestId('vehicle-fleet').within(() => {
        cy.findByRole('heading', {
          name: 'Наш автопарк автовышки и автокраны',
        });
        vehicles.forEach((vehicle) => {
          cy.findByRole('img', { name: vehicle.name }).should('be.visible');
          cy.findByRole('heading', { name: vehicle.fullName.join(' ') }).should(
            'be.visible'
          );
          cy.findByRole('heading', { name: vehicle.fullName.join(' ') })
            .parents('[data-testid="vehicle-card"]')
            .within(() => {
              vehicle.vehicleCard.specs.forEach((spec) => {
                cy.findByText(spec[0]).should('be.visible');
                cy.findByText(spec[1]).should('be.visible');
              });
              cy.findByText(`${vehicle.priceFullShift} ₽`).should('be.visible');
              cy.findByRole('link', { name: 'Подробнее' })
                .should('be.visible')
                .and('have.attr', 'href', vehicle.path);
            });
        });
      });
    });
  });

  context('About', () => {
    it('shows the description of the company', () => {
      cy.findByTestId('about').should('be.visible');
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
        cy.findByRole('link', { name: contacts[0].text.join(' ') }).should(
          'be.visible'
        );
        cy.findByRole('link', { name: contacts[1].text }).should('not.exist');
        cy.findByRole('link', { name: contacts[2].text })
          .should('be.visible')
          .and('have.attr', 'href', contacts[2].link);
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
        cy.findByRole('link', { name: contacts[0].text.join(' ') }).should(
          'be.visible'
        );
        cy.findByRole('link', { name: contacts[1].text })
          .should('be.visible')
          .and('have.attr', 'href', contacts[1].link);
        cy.findByRole('link', { name: contacts[2].text }).should('be.visible');
        cy.findByText('Работаем круглосуточно').should('not.be.visible');
      });
    });
  });

  context('NavBar', () => {
    it('shows the logo, the full heading and the menu', () => {
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('link', { name: 'На главную' }).should('be.visible');
        cy.findByRole('img', { name: 'На главную' }).should('be.visible');
        cy.findByRole('button', { name: /(открыть|закрыть) меню/i }).should(
          'not.exist'
        );
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
        cy.findByRole('button', { name: 'Автопарк' })
          .as('subMenuBtn')
          .should('be.visible');
        cy.findByTestId('sub-menu').should('not.be.visible');
        cy.get('@subMenuBtn').click();
        vehicles.forEach((vehicle) => {
          cy.findByRole('link', { name: vehicle.name }).should('be.visible');
        });
        cy.get('@subMenuBtn').click();
        cy.findByTestId('sub-menu').should('not.be.visible');
      });
    });

    it('closes the sub-menu on click outside', () => {
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('button', { name: 'Автопарк' }).click();
        cy.findByTestId('sub-menu').should('be.visible');
      });
      cy.findByTestId('nav-bar').click();
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('sub-menu').should('not.exist');
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
        cy.findByRole('link', { name: contacts[0].text.join(' ') }).should(
          'be.visible'
        );
        cy.findByRole('link', { name: contacts[1].text }).should('be.visible');
        cy.findByRole('link', { name: contacts[2].text }).should('be.visible');
        cy.findByText('Работаем круглосуточно').should('be.visible');
      });
    });
  });

  context('NavBar', () => {
    it('shows the logo, the full heading and the menu', () => {
      cy.findByTestId('nav-bar').within(() => {
        cy.findByRole('link', { name: 'На главную' }).should('be.visible');
        cy.findByRole('img', { name: 'На главную' }).should('be.visible');
        cy.findByRole('button', { name: /(открыть|закрыть) меню/i }).should(
          'not.exist'
        );
        cy.findByRole('link', { name: 'Главная' }).should('be.visible');
        cy.findByRole('button', { name: 'Автопарк' }).should('be.visible');
        cy.findByRole('link', { name: 'Услуги' }).should('be.visible');
        cy.findByRole('link', { name: 'Фото' }).should('be.visible');
        cy.findByRole('link', { name: 'Отзывы' }).should('be.visible');
        cy.findByRole('link', { name: 'Контакты' }).should('be.visible');
      });
    });
  });

  context('IntroCarousel', () => {
    it('renders all vehicles', () => {
      vehicles.forEach((vehicle, i) => {
        cy.findByTestId('intro-carousel').within(() => {
          cy.findByRole('button', { name: i + 1 }).click();
          cy.findByRole('heading', { name: vehicle.fullName.join(' ') })
            .as('heading')
            .should('be.visible');
          cy.get('@heading')
            .parents('[data-testid="slide"]')
            .within(() => {
              const priceText = vehicle.priceHalfShift
                ? `от ${vehicle.priceHalfShift} ₽/полсмены`
                : `от ${vehicle.priceFullShift} ₽/смена`;
              cy.findByText(priceText).should('be.visible');
              cy.findByRole('link', { name: 'Подробнее' })
                .should('be.visible')
                .and('have.attr', 'href', vehicle.path);
              cy.findByRole('link', { name: contacts[0].text.join(' ') })
                .should('be.visible')
                .and('have.attr', 'href', contacts[0].link);
              cy.findByRole('link', { name: contacts[1].text })
                .should('be.visible')
                .and('have.attr', 'href', contacts[1].link);
              cy.findByRole('link', { name: contacts[2].text })
                .should('be.visible')
                .and('have.attr', 'href', contacts[2].link);
            });
        });
      });
    });
  });
});
