/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { contacts } from '../../data/contacts';
import { vehicles } from '../../data/vehicles';

const { companyName } = contacts;

describe('AWP 13m - Small mobiles', () => {
  beforeEach(() => {
    cy.visit('/avtovyshka-13m');
  });

  it('has correct title tag, meta tag "description", and favicon.ico', () => {
    cy.title().should('eq', `Аренда автовышки 13м - ${companyName}`);
    cy.document()
      .get('head meta[name="description"]')
      .should(
        'have.attr',
        'content',
        'Аренда автовышки 13м - технические характеристики, подробное описание, фото и видео'
      );
    cy.document()
      .get('head link[rel="icon"]')
      .should('have.attr', 'href', '/favicon.ico');
  });

  context('Breadcrumbs', () => {
    it('renders the link to the home page and the title of the current page', () => {
      cy.findByTestId('breadcrumbs').within(() => {
        cy.findByRole('link', { name: 'Главная' })
          .should('be.visible')
          .and('have.attr', 'href', '/');
        cy.findByText(vehicles[0].name).should('be.visible');
      });
    });
  });
});
