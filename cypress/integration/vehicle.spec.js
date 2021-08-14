/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { contacts } from '../../data/contacts';
import { vehicles } from '../../data/vehicles';

const { companyName } = contacts;
const vehicle = vehicles[Object.keys(vehicles)[0]];

describe('Vehicle - Small mobiles', () => {
  beforeEach(() => {
    cy.visit(vehicle.path);
  });

  it('has correct title tag, meta tag "description", and favicon.ico', () => {
    cy.title().should('eq', `${vehicle.title} - ${companyName}`);
    cy.document()
      .get('head meta[name="description"]')
      .should(
        'have.attr',
        'content',
        `${vehicle.title} - технические характеристики, подробное описание, фото и видео`
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
        cy.findByRole('link', { name: 'Главная' })
          .should('be.visible')
          .and('have.attr', 'href', '/');
        cy.findByText(vehicle.name).should('be.visible');
      });
    });
  });

  context('VehiclePhoto', () => {
    it('shows the heading, some photos and thumbnails', () => {
      cy.findByTestId('vehicle-photo').within(() => {
        vehicle.vehiclePhoto.forEach((item, index) => {
          if (
            index === 0 ||
            index === 1 ||
            index === vehicle.vehiclePhoto.length - 1
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

  context('VehicleShortDescription', () => {
    it('renders short description', () => {
      cy.findByTestId('vehicle-short-description').within(() => {
        cy.findByRole('heading', { name: 'Технические характеристики' }).should(
          'be.visible'
        );
        vehicle.vehicleShortDescription.forEach((items) => {
          cy.findByText(items[0]).should('be.visible');
          cy.findByText(items[1]).should('be.visible');
        });
        cy.findByRole('heading', { name: 'Стоимость аренды' }).should(
          'be.visible'
        );
        cy.findByText('Смена (7+1) / Полсмены (3+1)').should('be.visible');
        cy.findByText(
          `${vehicle.priceFullShift} ₽ / ${vehicle.priceHalfShift} ₽`
        ).should('be.visible');
        cy.findByText('Подача за КАД').should('be.visible');
        cy.findByText(`${vehicle.priceDelivery} ₽/км`).should('be.visible');
      });
    });
  });
});
