/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { contacts } from '../../data/contacts';

const { phones, email, companyName, address } = contacts;

describe.only('AWP 13m - Small mobiles', () => {
  beforeEach(() => {
    cy.visit('/avtovyshka-13m');
  });

  it('has correct title tag, meta tag "description", and favicon.ico', () => {
    cy.title().should('eq', `Аренда автовышки-платформы 13м - ${companyName}`);
    cy.document()
      .get('head meta[name="description"]')
      .should(
        'have.attr',
        'content',
        'Аренда автовышки-платформы 13м - технические характеристики, подробное описание, фото и видео'
      );
    cy.document()
      .get('head link[rel="icon"]')
      .should('have.attr', 'href', '/favicon.ico');
  });
});
