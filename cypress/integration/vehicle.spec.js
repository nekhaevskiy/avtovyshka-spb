/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { contacts } from '../../data/contacts';
import { vehicles } from '../../data/vehicles';

const { companyName } = contacts;
const vehicle = vehicles[Object.keys(vehicles)[0]];

describe('Vehicle - Small mobiles', () => {
  beforeEach(() => {
    cy.visit(vehicle.pagePath);
  });

  it('has correct title tag, meta tag "description", and favicon.ico', () => {
    cy.title().should('eq', `${vehicle.pageTitle} - ${companyName}`);
    cy.document()
      .get('head meta[name="description"]')
      .should(
        'have.attr',
        'content',
        `${vehicle.pageTitle} - технические характеристики, подробное описание, фото и видео`
      );
    cy.document()
      .get('head link[rel="icon"]')
      .should('have.attr', 'href', '/favicon.ico');
  });

  it('has correct heading', () => {
    cy.findByRole('heading', { name: vehicle.fullName.join(' ') });
  });

  context('Breadcrumbs', () => {
    it('renders the link to the home page and the title of the current page', () => {
      cy.findByTestId('breadcrumbs').within(() => {
        cy.findByRole('link', { name: 'Автопарк' })
          .should('be.visible')
          .and('have.attr', 'href', '/#vehicle-section');
        cy.findByText(vehicle.shortName).should('be.visible');
      });
    });
  });

  context('GeneralPhotos', () => {
    it('shows the heading, some photos and thumbnails', () => {
      cy.findByTestId('general-photos').within(() => {
        vehicle.generalPhotos.forEach((item, index) => {
          if (
            index === 0 ||
            index === 1 ||
            index === vehicle.generalPhotos.length - 1
          ) {
            cy.findByRole('img', { name: item.originalAlt })
              .should('be.visible')
              .and('have.attr', 'src', item.original);
          } else {
            cy.findByRole('img', { name: item.originalAlt }).should(
              'not.exist'
            );
          }
          if (index < 4) {
            cy.findByRole('img', { name: item.thumbnailAlt })
              .should('be.visible')
              .and('have.attr', 'src', item.thumbnail);
          } else {
            cy.findByRole('img', { name: item.thumbnailAlt })
              .should('not.be.visible')
              .and('have.attr', 'src', item.thumbnail);
          }
        });
      });
    });
  });

  context('ShortSpecs', () => {
    it('renders short description', () => {
      cy.findByTestId('short-specs').within(() => {
        vehicle.shortSpecs.forEach((items) => {
          cy.findByText(items[0]).should('be.visible');
          cy.findByText(items[1]).should('be.visible');
        });
        cy.findByRole('heading', { name: 'Стоимость аренды' }).should(
          'be.visible'
        );
        cy.findByText('Смена (7+1) / Полсмены (3+1)').should('be.visible');
        cy.findByText(
          `${vehicle.price.fullShift} ₽ / ${vehicle.price.halfShift} ₽`
        ).should('be.visible');
        cy.findByText('Подача за КАД').should('be.visible');
        cy.findByText(`${vehicle.price.delivery} ₽/км`).should('be.visible');
      });
    });
  });
});
