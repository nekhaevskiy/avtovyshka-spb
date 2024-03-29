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
    it('renders the heading, some photos and thumbnails', () => {
      cy.findByTestId('general-photos').within(() => {
        vehicle.generalPhotos.forEach((item, index) => {
          if (
            index === 0 ||
            index === 1 ||
            index === vehicle.generalPhotos.length - 1
          ) {
            cy.findByRole('img', { name: item.originalAlt })
              .should('be.visible')
              .and('have.attr', 'src')
              .and('contain', item.original);
          } else {
            cy.findByRole('img', { name: item.originalAlt }).should(
              'not.exist'
            );
          }
          if (index < 4) {
            cy.findByRole('img', { name: item.thumbnailAlt })
              .should('be.visible')
              .and('have.attr', 'src')
              .and('contain', item.thumbnail);
          } else {
            cy.findByRole('img', { name: item.thumbnailAlt })
              .should('not.be.visible')
              .and('have.attr', 'src')
              .and('contain', item.thumbnail);
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

  context('Tabs', () => {
    it('renders tab titles and contents', () => {
      cy.findByTestId('vehicle-tabs').within(() => {
        cy.findByRole('tab', { name: 'Технические характеристики' }).should(
          'be.visible'
        );
        cy.findByAltText('Технические характеристики').should('be.visible');
        cy.findByText('Технические характеристики').should('not.be.visible');
        cy.findByRole('tab', { name: 'Подробное описание' })
          .as('secondTab')
          .should('be.visible');
        cy.findByAltText('Подробное описание').should('be.visible');
        cy.findByText('Подробное описание').should('not.be.visible');
        cy.findByRole('heading', {
          name: 'Подробные технические характеристики',
        }).should('be.visible');
        vehicle.fullSpecs.forEach((items) => {
          cy.findByText(items[0]).should('be.visible');
          cy.findAllByText(items[1]).should('be.visible');
        });
        cy.findByText(vehicle.detailedDescription[0]).should('not.exist');

        cy.get('@secondTab').click();

        cy.findByRole('heading', {
          name: 'Подробные технические характеристики',
        }).should('not.exist');
        vehicle.detailedDescription.forEach((paragraph) => {
          cy.findByText(paragraph).should('be.visible');
        });
      });
    });

    it('renders the heading, some technical photos and thumbnails', () => {
      cy.findByTestId('vehicle-tabs').within(() => {
        vehicle.technicalPhotos.forEach((item, index) => {
          if (
            index === 0 ||
            index === 1 ||
            index === vehicle.technicalPhotos.length - 1
          ) {
            cy.findByRole('img', { name: item.originalAlt })
              .should('be.visible')
              .and('have.attr', 'src')
              .and('contain', item.original);
          } else {
            cy.findByRole('img', { name: item.originalAlt }).should(
              'not.exist'
            );
          }
          if (index < 4) {
            cy.findByRole('img', { name: item.thumbnailAlt })
              .should('be.visible')
              .and('have.attr', 'src')
              .and('contain', item.thumbnail);
          } else {
            cy.findByRole('img', { name: item.thumbnailAlt })
              .should('not.be.visible')
              .and('have.attr', 'src')
              .and('contain', item.thumbnail);
          }
        });
      });
    });
  });

  context('OtherVehicles', () => {
    it('renders last card initially and second card after click', () => {
      cy.findByTestId('other-vehicles').within(() => {
        const vehicleKeys = Object.keys(vehicles);
        const lastVehicle = vehicles[vehicleKeys[vehicleKeys.length - 1]];
        const secondVehicle = vehicles[vehicleKeys[1]];
        cy.findByRole('heading', {
          name: lastVehicle.fullName.join(' '),
        }).should('be.visible');
        cy.findByRole('heading', {
          name: secondVehicle.fullName.join(' '),
        }).should('not.exist');

        cy.findByRole('button', { name: 'Next' }).click();

        cy.findByRole('heading', {
          name: lastVehicle.fullName.join(' '),
        }).should('not.exist');
        cy.findByRole('heading', {
          name: secondVehicle.fullName.join(' '),
        }).should('be.visible');
      });
    });
  });
});

describe('Vehicle - Big mobiles', () => {
  beforeEach(() => {
    cy.viewport('iphone-6+', 'landscape');
    cy.visit(vehicle.pagePath);
  });

  context('OtherVehicles', () => {
    it('renders last and second cards initially', () => {
      cy.findByTestId('other-vehicles').within(() => {
        const vehicleKeys = Object.keys(vehicles);
        const lastVehicle = vehicles[vehicleKeys[vehicleKeys.length - 1]];
        const secondVehicle = vehicles[vehicleKeys[1]];
        cy.findByRole('heading', {
          name: lastVehicle.fullName.join(' '),
        }).should('be.visible');
        cy.findByRole('heading', {
          name: secondVehicle.fullName.join(' '),
        }).should('be.visible');
      });
    });
  });
});

describe('Vehicle - Tablets', () => {
  beforeEach(() => {
    cy.viewport('ipad-2');
    cy.visit(vehicle.pagePath);
  });

  context('Tabs', () => {
    it('renders full tab titles', () => {
      cy.findByTestId('vehicle-tabs').within(() => {
        cy.findByText('Технические характеристики').should('be.visible');
        cy.findByText('Подробное описание').should('be.visible');
      });
    });
  });
});

describe('Vehicle - Laptops', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit(vehicle.pagePath);
  });

  context('OtherVehicles', () => {
    it('renders last, second and third cards initially', () => {
      cy.findByTestId('other-vehicles').within(() => {
        const vehicleKeys = Object.keys(vehicles);
        const lastVehicle = vehicles[vehicleKeys[vehicleKeys.length - 1]];
        const secondVehicle = vehicles[vehicleKeys[1]];
        const thirdVehicle = vehicles[vehicleKeys[2]];
        cy.findByRole('heading', {
          name: lastVehicle.fullName.join(' '),
        }).should('be.visible');
        cy.findByRole('heading', {
          name: secondVehicle.fullName.join(' '),
        }).should('be.visible');
        cy.findByRole('heading', {
          name: thirdVehicle.fullName.join(' '),
        }).should('be.visible');
      });
    });
  });
});
