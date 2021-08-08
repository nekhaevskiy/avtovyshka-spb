/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { contacts } from '../../data/contacts';
import { images } from '../../data/photo-gallery';
import { reviews } from '../../data/reviews';
import { services } from '../../data/services';
import { vehicles } from '../../data/vehicles';

const { phones, email, companyName, address } = contacts;

describe('Homepage - Small mobiles', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has correct title tag, meta tag "description", and favicon.ico', () => {
    cy.title().should(
      'eq',
      'Аренда автовышки и автокрана в Санкт-Петербурге и Ленинградской области - ООО «Аренда Неба»'
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
        cy.findByRole('link', { name: phones[0].text.join(' ') })
          .should('be.visible')
          .and('have.attr', 'href', phones[0].link);
        cy.findByRole('link', { name: phones[1].text }).should('not.exist');
        cy.findByRole('link', { name: email.text }).should('not.exist');
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

  context('Service', () => {
    it('shows the heading and all service items', () => {
      cy.findByTestId('service').should('have.attr', 'id', 'service');
      cy.findByTestId('service').within(() => {
        cy.findByRole('heading', { name: 'Что мы предлагаем' }).should(
          'be.visible'
        );
        services.forEach((service) => {
          cy.findByRole('img', { name: service.heading }).should('be.visible');
          cy.findByRole('heading', { name: service.heading }).should(
            'be.visible'
          );
          cy.findByText(service.text).should('be.visible');
        });
      });
    });
  });

  context('PhotoGallery', () => {
    it('shows the heading and all thumbnails', () => {
      cy.findByTestId('photo').should('have.attr', 'id', 'photo');
      cy.findByTestId('photo').within(() => {
        cy.findByRole('heading', { name: 'Наша техника за работой' }).should(
          'be.visible'
        );
        images.forEach((image, index) => {
          if (index === 0 || index === 1 || index === images.length - 1) {
            cy.findByRole('img', { name: image.originalAlt })
              .should('be.visible')
              .and('have.attr', 'src', image.original);
          } else {
            cy.findByRole('img', { name: image.originalAlt }).should(
              'not.exist'
            );
          }
          if (index < 4) {
            cy.findByRole('img', { name: image.thumbnailAlt })
              .should('be.visible')
              .and('have.attr', 'src', image.thumbnail);
          } else {
            cy.findByRole('img', { name: image.thumbnailAlt })
              .should('not.be.visible')
              .and('have.attr', 'src', image.thumbnail);
          }
        });
      });
    });
  });

  context('Reviews', () => {
    it('shows the heading and first review', () => {
      cy.findByTestId('reviews').should('have.attr', 'id', 'reviews');
      cy.findByTestId('reviews').within(() => {
        cy.findByRole('heading', { name: 'Отзывы наших клиентов' }).should(
          'be.visible'
        );
        cy.findByRole('heading', { name: reviews[0].author }).should(
          'be.visible'
        );
        // there are two rendered texts and I don't know why it is so
        cy.findAllByText(reviews[0].text).should('be.visible');

        cy.findByRole('button', { name: '2' }).click();

        cy.findByRole('heading', { name: reviews[1].author }).should(
          'be.visible'
        );
        // there are two rendered texts and I don't know why it is so
        cy.findAllByText(reviews[1].text).should('be.visible');
      });
    });
  });

  context('Contacts', () => {
    it('renders the heading, the map placeholder and the contact data', () => {
      cy.findByTestId('contacts').should('have.attr', 'id', 'contacts');
      cy.findByTestId('contacts').within(() => {
        cy.findByRole('heading', { name: 'Контакты' }).should('be.visible');
        cy.findByText('Google Maps placeholder').should('be.visible');
        cy.findByRole('heading', { name: 'Телефоны' }).should('be.visible');
        cy.findByRole('link', { name: phones[0].text.join(' ') })
          .should('be.visible')
          .and('have.attr', 'href', phones[0].link);
        cy.findByRole('link', { name: phones[1].text })
          .should('be.visible')
          .and('have.attr', 'href', phones[1].link);
        cy.findByRole('heading', { name: 'Email' }).should('be.visible');
        cy.findByRole('link', { name: email.text })
          .should('be.visible')
          .and('have.attr', 'href', email.link);
        cy.findByRole('heading', { name: 'Адрес' }).should('be.visible');
        cy.findByText(companyName).should('be.visible');
        address.forEach((item) => {
          cy.findByText(item).should('be.visible');
        });
      });
    });

    it('shows notification to user if sending of message is succeeded', () => {
      cy.intercept('https://api.emailjs.com/api/v1.0/email/send-form', {
        statusCode: 200,
        body: 'OK',
        delay: 100,
      });
      cy.findByTestId('contacts').within(() => {
        cy.findByRole('textbox', { name: 'Сообщение*' })
          .as('messageInput')
          .should('be.visible')
          .and('have.attr', 'placeholder', 'Текст сообщения');
        cy.findByRole('textbox', { name: 'Фамилия Имя Отчество*' })
          .as('nameInput')
          .should('be.visible')
          .and('have.attr', 'placeholder', 'Ваше имя');
        cy.findByRole('textbox', { name: 'Контактный телефон*' })
          .as('phoneInput')
          .should('be.visible')
          .and('have.attr', 'placeholder', 'Ваш телефон');
        cy.findByRole('textbox', { name: 'Email' })
          .as('emailInput')
          .should('be.visible')
          .and('have.attr', 'placeholder', 'Ваш email');
        cy.findByRole('button', { name: 'Отправить' })
          .as('submitBtn')
          .should('be.visible');
        cy.findByText(
          'Поля, отмеченные звездочкой (*), обязательны для заполнения'
        ).should('be.visible');

        cy.get('@submitBtn').click();

        cy.get('@messageInput')
          .then(($el) => $el[0].checkValidity())
          .should('be.false');

        cy.get('@messageInput')
          .type('Тестовое сообщение')
          .then(($el) => $el[0].checkValidity())
          .should('be.true');
        cy.get('@submitBtn').click();

        cy.get('@nameInput')
          .then(($el) => $el[0].checkValidity())
          .should('be.false');

        cy.get('@nameInput')
          .type('Тестов Тест')
          .then(($el) => $el[0].checkValidity())
          .should('be.true');
        cy.get('@submitBtn').click();

        cy.get('@phoneInput')
          .then(($el) => $el[0].checkValidity())
          .should('be.false');

        cy.get('@phoneInput')
          .type('+7 (999) 999-99-99')
          .then(($el) => $el[0].checkValidity())
          .should('be.true');
        cy.get('@emailInput').type('test');
        cy.get('@submitBtn').click();

        cy.get('@emailInput')
          .then(($el) => $el[0].checkValidity())
          .should('be.false');

        cy.get('@emailInput')
          .type('@test.ru')
          .then(($el) => $el[0].checkValidity())
          .should('be.true');
        cy.get('@submitBtn').click();

        cy.get('@submitBtn').should('be.disabled');

        cy.findByRole('status').should(
          'have.text',
          'Ваше сообщение отправлено'
        );
        cy.get('@messageInput').should('have.value', '');
        cy.get('@nameInput').should('have.value', '');
        cy.get('@phoneInput').should('have.value', '');
        cy.get('@emailInput').should('have.value', '');
        cy.get('@submitBtn').should('not.be.disabled');
      });
    });

    it('shows notification to user if sending of message is failed', () => {
      cy.intercept('https://api.emailjs.com/api/v1.0/email/send-form', {
        statusCode: 400,
        body: 'The user_id parameter is required',
        delay: 100,
      });
      cy.findByTestId('contacts').within(() => {
        cy.findByRole('textbox', { name: 'Сообщение*' })
          .as('messageInput')
          .type('Тестовое сообщение');
        cy.findByRole('textbox', { name: 'Фамилия Имя Отчество*' })
          .as('nameInput')
          .type('Тестов Тест');
        cy.findByRole('textbox', { name: 'Контактный телефон*' })
          .as('phoneInput')
          .type('+7 (999) 999-99-99');
        cy.findByRole('button', { name: 'Отправить' }).as('submitBtn').click();

        cy.get('@submitBtn').should('be.disabled');
        cy.findByRole('status').should(
          'have.text',
          'Сообщение не удалось отправить. Пожалуйста, попробуйте еще раз.'
        );
        cy.get('@messageInput').should('have.value', 'Тестовое сообщение');
        cy.get('@nameInput').should('have.value', 'Тестов Тест');
        cy.get('@phoneInput').should('have.value', '+7 (999) 999-99-99');
        cy.get('@submitBtn').should('not.be.disabled');
      });
    });
  });
});

describe('Homepage - Big mobiles', () => {
  beforeEach(() => {
    cy.viewport('iphone-6+', 'landscape');
    cy.visit('/');
  });

  context('ContactBar', () => {
    it('shows the main phone and the email', () => {
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('link', { name: phones[0].text.join(' ') }).should(
          'be.visible'
        );
        cy.findByRole('link', { name: phones[1].text }).should('not.exist');
        cy.findByRole('link', { name: email.text })
          .should('be.visible')
          .and('have.attr', 'href', email.link);
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

  context('Reviews', () => {
    it('shows first two reviews', () => {
      cy.findByTestId('reviews').within(() => {
        cy.findByRole('heading', { name: reviews[0].author }).should(
          'be.visible'
        );
        // there are two rendered texts and I don't know why it is so
        cy.findAllByText(reviews[0].text).should('be.visible');
        cy.findByRole('heading', { name: reviews[1].author }).should(
          'be.visible'
        );
        // there are two rendered texts and I don't know why it is so
        cy.findAllByText(reviews[1].text).should('be.visible');
      });
    });
  });
});

describe('Homepage - Tablets', () => {
  beforeEach(() => {
    cy.viewport('ipad-2');
    cy.visit('/');
  });

  context('ContactBar', () => {
    it('shows only the contact items', () => {
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('link', { name: phones[0].text.join(' ') }).should(
          'be.visible'
        );
        cy.findByRole('link', { name: phones[1].text })
          .should('be.visible')
          .and('have.attr', 'href', phones[1].link);
        cy.findByRole('link', { name: email.text }).should('be.visible');
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
    cy.viewport('macbook-15');
    cy.visit('/');
  });

  context('ContactBar', () => {
    it('shows the contact items and the note', () => {
      cy.findByTestId('contact-bar').within(() => {
        cy.findByRole('link', { name: phones[0].text.join(' ') }).should(
          'be.visible'
        );
        cy.findByRole('link', { name: phones[1].text }).should('be.visible');
        cy.findByRole('link', { name: email.text }).should('be.visible');
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
    it('renders first and second slides', () => {
      cy.findByTestId('intro-carousel').within(() => {
        cy.findByRole('heading', { name: vehicles[0].fullName.join(' ') })
          .as('heading')
          .should('be.visible');
        cy.get('@heading')
          .parents('[data-testid="slide"]')
          .within(() => {
            cy.findByRole('img', { name: vehicles[0].name }).should(
              'be.visible'
            );
            const priceText = vehicles[0].priceHalfShift
              ? `от ${vehicles[0].priceHalfShift} ₽/полсмены`
              : `от ${vehicles[0].priceFullShift} ₽/смена`;
            cy.findByText(priceText).should('be.visible');
            cy.findByRole('link', { name: 'Подробнее' })
              .should('be.visible')
              .and('have.attr', 'href', vehicles[0].path);
            cy.findByRole('link', { name: phones[0].text.join(' ') })
              .should('be.visible')
              .and('have.attr', 'href', phones[0].link);
            cy.findByRole('link', { name: phones[1].text })
              .should('be.visible')
              .and('have.attr', 'href', phones[1].link);
            cy.findByRole('link', { name: email.text })
              .should('be.visible')
              .and('have.attr', 'href', email.link);
          });
        cy.findByRole('heading', { name: vehicles[1].fullName.join(' ') })
          .as('heading')
          .should('be.visible');
        cy.get('@heading')
          .parents('[data-testid="slide"]')
          .within(() => {
            cy.findByRole('img', { name: vehicles[1].name }).should(
              'be.visible'
            );
            const priceText = vehicles[1].priceHalfShift
              ? `от ${vehicles[1].priceHalfShift} ₽/полсмены`
              : `от ${vehicles[1].priceFullShift} ₽/смена`;
            cy.findByText(priceText).should('be.visible');
            cy.findByRole('link', { name: 'Подробнее' })
              .should('be.visible')
              .and('have.attr', 'href', vehicles[1].path);
            cy.findByRole('link', { name: phones[0].text.join(' ') })
              .should('be.visible')
              .and('have.attr', 'href', phones[0].link);
            cy.findByRole('link', { name: phones[1].text })
              .should('be.visible')
              .and('have.attr', 'href', phones[1].link);
            cy.findByRole('link', { name: email.text })
              .should('be.visible')
              .and('have.attr', 'href', email.link);
          });
      });
    });
  });

  context('Reviews', () => {
    it('shows first three reviews', () => {
      cy.findByTestId('reviews').within(() => {
        cy.findByRole('heading', { name: reviews[0].author }).should(
          'be.visible'
        );
        // there are two rendered texts and I don't know why it is so
        cy.findAllByText(reviews[0].text).should('be.visible');
        cy.findByRole('heading', { name: reviews[1].author }).should(
          'be.visible'
        );
        // there are two rendered texts and I don't know why it is so
        cy.findAllByText(reviews[1].text).should('be.visible');
        cy.findByRole('heading', { name: reviews[2].author }).should(
          'be.visible'
        );
        // there are two rendered texts and I don't know why it is so
        cy.findAllByText(reviews[2].text).should('be.visible');
      });
    });
  });
});
