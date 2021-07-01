/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('Homepage', () => {
  beforeEach(() => {
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
    it('shows the logo and the main phone on small mobiles', () => {
      cy.viewport(320, 480);
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('img', { name: 'На главную' }).should('be.visible');
        cy.findByTestId('main-phone')
          .should('be.visible')
          .and('have.text', '+7 (991) 000-91-11')
          .and('have.attr', 'href', 'tel:+79910009111');
        cy.findByText('+7 (812) 351-51-51').should('not.be.visible');
        cy.findByText('suedima@rambler.ru').should('not.be.visible');
        cy.findByText('Работаем круглосуточно').should('not.be.visible');
      });
    });

    it('shows the logo, the main phone and the email on big mobiles', () => {
      cy.viewport(640, 480);
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('img', { name: 'На главную' }).should('be.visible');
        cy.findByTestId('main-phone').should('be.visible');
        cy.findByText('+7 (812) 351-51-51').should('not.be.visible');
        cy.findByText('suedima@rambler.ru')
          .should('be.visible')
          .and('have.attr', 'href', 'mailto:suedima@rambler.ru');
        cy.findByText('Работаем круглосуточно').should('not.be.visible');
      });
    });

    it('shows only the contact items on tablets', () => {
      cy.viewport(768, 1024);
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('img', { name: 'На главную' }).should('not.exist');
        cy.findByTestId('main-phone').should('be.visible');
        cy.findByText('+7 (812) 351-51-51')
          .should('be.visible')
          .and('have.attr', 'href', 'tel:+78123515151');
        cy.findByText('suedima@rambler.ru').should('be.visible');
        cy.findByText('Работаем круглосуточно').should('not.be.visible');
      });
    });

    it('shows the contact items and the note on laptops', () => {
      cy.viewport(1024, 1200);
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('img', { name: 'На главную' }).should('not.exist');
        cy.findByTestId('main-phone').should('be.visible');
        cy.findByText('+7 (812) 351-51-51').should('be.visible');
        cy.findByText('suedima@rambler.ru').should('be.visible');
        cy.findByText('Работаем круглосуточно').should('be.visible');
      });
    });
  });
});
