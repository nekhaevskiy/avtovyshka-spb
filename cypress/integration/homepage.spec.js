/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { contacts } from '../../data/contacts';
import { images } from '../../data/photo-section';
import { reviews } from '../../data/review-section';
import { services } from '../../data/service-section';
import { vehicles } from '../../data/vehicles';

const { phones, email, companyName, address } = contacts;

describe('Homepage - Small mobiles', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has correct title tag, meta tag "description", and favicon.ico', () => {
    cy.title().should(
      'eq',
      `Аренда автовышки и автокрана в Санкт-Петербурге и Ленинградской области - ${companyName}`
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

  context('HeaderContacts', () => {
    it('shows the main phone', () => {
      cy.findByTestId('header-contacts').within(() => {
        cy.findByRole('link', { name: phones[0].text.join(' ') })
          .should('be.visible')
          .and('have.attr', 'href', phones[0].link);
        cy.findByRole('link', { name: phones[1].text }).should('not.exist');
        cy.findByRole('link', { name: email.text }).should('not.exist');
        cy.findByText('Работаем круглосуточно').should('not.be.visible');
      });
    });
  });

  context('HeaderNavBar', () => {
    it('shows the logo, the heading and the menu button', () => {
      cy.findByTestId('header-nav-bar').within(() => {
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
      cy.findByTestId('header-nav-bar').within(() => {
        cy.findByRole('navigation').should('not.exist');
        cy.findByRole('button', { name: 'Открыть меню' }).click();
        cy.findByRole('button', { name: 'Закрыть меню' }).should('be.visible');
        cy.findByRole('link', { name: 'Главная' })
          .should('be.visible')
          .and('have.attr', 'href', '/');
        cy.findByRole('link', { name: 'Автопарк' })
          .should('be.visible')
          .and('have.attr', 'href', '/#vehicle-section');
        Object.keys(vehicles).forEach((key) => {
          cy.findByRole('link', { name: vehicles[key].shortName })
            .should('be.visible')
            .and('have.attr', 'href', vehicles[key].pagePath);
        });
        cy.findByRole('link', { name: 'Услуги' })
          .should('be.visible')
          .and('have.attr', 'href', '/#service-section');
        cy.findByRole('link', { name: 'Фото' })
          .should('be.visible')
          .and('have.attr', 'href', '/#photo-section');
        cy.findByRole('link', { name: 'Отзывы' })
          .should('be.visible')
          .and('have.attr', 'href', '/#review-section');
        cy.findByRole('link', { name: 'Контакты' })
          .should('be.visible')
          .and('have.attr', 'href', '/#contact-section');
        cy.findByRole('button', { name: 'Закрыть меню' }).click();
        cy.findByRole('navigation').should('not.exist');
      });
    });

    it('closes the menu on click outside', () => {
      cy.findByTestId('header-nav-bar').within(() => {
        cy.findByRole('button', { name: 'Открыть меню' }).click();
        cy.findByRole('navigation').should('be.visible');
      });
      cy.findByTestId('header-nav-bar').click();
      cy.findByTestId('header-nav-bar').within(() => {
        cy.findByRole('navigation').should('not.exist');
      });
    });
  });

  context('IntroSection', () => {
    it("doesn't exist", () => {
      cy.findByTestId('intro-section').should('not.exist');
    });
  });

  context('VehicleSection', () => {
    it('shows the heading and the cards', () => {
      cy.findByTestId('vehicle-section').within(() => {
        cy.findByRole('heading', {
          name: 'Наш автопарк автовышки и автокраны',
        });
        Object.keys(vehicles).forEach((key) => {
          const vehicle = vehicles[key];
          cy.findByRole('img', { name: vehicle.shortName }).should(
            'be.visible'
          );
          cy.findByRole('heading', { name: vehicle.fullName.join(' ') }).should(
            'be.visible'
          );
          cy.findByRole('heading', { name: vehicle.fullName.join(' ') })
            .parents('[data-testid="vehicle-card"]')
            .within(() => {
              vehicle.card.forEach((spec) => {
                cy.findByText(spec[0]).should('be.visible');
                cy.findByText(spec[1]).should('be.visible');
              });
              cy.findByText(`${vehicle.price.fullShift} ₽`).should(
                'be.visible'
              );
              cy.findByText('Подробнее').should('be.visible');
            });
        });
      });
    });
  });

  context('AboutSection', () => {
    it('shows the description of the company', () => {
      cy.findByTestId('about-section').should('be.visible');
    });
  });

  context('ServiceSection', () => {
    it('shows the heading and all service items', () => {
      cy.findByTestId('service-section').should(
        'have.attr',
        'id',
        'service-section'
      );
      cy.findByTestId('service-section').within(() => {
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

  context('PhotoSection', () => {
    it('shows the heading, some photos and thumbnails', () => {
      cy.findByTestId('photo-section').should(
        'have.attr',
        'id',
        'photo-section'
      );
      cy.findByTestId('photo-section').within(() => {
        cy.findByRole('heading', {
          name: 'Наша техника за работой',
        }).scrollIntoView();
        images.forEach((image, index) => {
          if (index === 0 || index === 1 || index === images.length - 1) {
            cy.findByRole('img', { name: image.originalAlt })
              .should('be.visible')
              .and('have.attr', 'src')
              .and('contain', image.original);
          } else {
            cy.findByRole('img', { name: image.originalAlt }).should(
              'not.exist'
            );
          }
          if (index < 4) {
            cy.findByRole('img', { name: image.thumbnailAlt })
              .should('be.visible')
              .and('have.attr', 'src')
              .and('contain', image.thumbnail);
          } else {
            cy.findByRole('img', { name: image.thumbnailAlt })
              .should('not.be.visible')
              .and('have.attr', 'src')
              .and('contain', image.thumbnail);
          }
        });
      });
    });
  });

  context('ReviewSection', () => {
    it('shows the heading and first review', () => {
      cy.findByTestId('review-section').should(
        'have.attr',
        'id',
        'review-section'
      );
      cy.findByTestId('review-section').within(() => {
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

  context('ContactSection', () => {
    it('renders the heading, the map placeholder and the contact data', () => {
      cy.findByTestId('contact-section').should(
        'have.attr',
        'id',
        'contact-section'
      );
      cy.findByTestId('contact-section').within(() => {
        cy.findByRole('heading', { name: 'Контакты' }).scrollIntoView();
        cy.findByText('Google Maps placeholder', { timeout: 10000 }).should(
          'be.visible'
        );
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
        delay: 500,
      });
      cy.findByTestId('contact-section').within(() => {
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
        delay: 500,
      });
      cy.findByTestId('contact-section').within(() => {
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

  context('FooterNavBar', () => {
    it('renders the menu', () => {
      cy.findByTestId('footer-nav-bar').within(() => {
        cy.findByRole('link', { name: 'Главная' })
          .should('be.visible')
          .and('have.attr', 'href', '/');
        cy.findByRole('link', { name: 'Автопарк' })
          .should('be.visible')
          .and('have.attr', 'href', '/#vehicle-section');
        cy.findByRole('link', { name: 'Услуги' })
          .should('be.visible')
          .and('have.attr', 'href', '/#service-section');
        cy.findByRole('link', { name: 'Фото' })
          .should('be.visible')
          .and('have.attr', 'href', '/#photo-section');
        cy.findByRole('link', { name: 'Отзывы' })
          .should('be.visible')
          .and('have.attr', 'href', '/#review-section');
        cy.findByRole('link', { name: 'Контакты' })
          .should('be.visible')
          .and('have.attr', 'href', '/#contact-section');
      });
    });
  });

  context('FooterCopyright', () => {
    it('renders the copyright', () => {
      cy.findByTestId('footer-copyright').should(
        'have.text',
        `2016-${new Date().getFullYear()} © ${companyName}`
      );
    });
  });
});

describe('Homepage - Big mobiles', () => {
  beforeEach(() => {
    cy.viewport('iphone-6+', 'landscape');
    cy.visit('/');
  });

  context('HeaderContacts', () => {
    it('shows the main phone and the email', () => {
      cy.findByTestId('header-contacts').within(() => {
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

  context('HeaderNavBar', () => {
    it('shows the logo and the full heading', () => {
      cy.findByTestId('header-nav-bar').within(() => {
        cy.findByRole('link', { name: 'На главную' }).should('be.visible');
        cy.findByRole('img', { name: 'На главную' }).should('be.visible');
        cy.findByRole('heading', {
          name: 'Аренда автовышки и автокрана в Санкт-Петербурге и Ленинградской области',
        }).should('be.visible');
      });
    });
  });

  context('ReviewSection', () => {
    it('shows first two reviews', () => {
      cy.findByTestId('review-section').within(() => {
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

  context('HeaderContacts', () => {
    it('shows only the contact items', () => {
      cy.findByTestId('header-contacts').within(() => {
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

  context('HeaderNavBar', () => {
    it('shows the logo, the full heading and the menu', () => {
      cy.findByTestId('header-nav-bar').within(() => {
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
      cy.findByTestId('header-nav-bar').within(() => {
        cy.findByRole('button', { name: 'Автопарк' })
          .as('subMenuBtn')
          .should('be.visible');
        cy.findByTestId('sub-menu').should('not.be.visible');
        cy.get('@subMenuBtn').click();
        Object.keys(vehicles).forEach((key) => {
          cy.findByRole('link', { name: vehicles[key].shortName }).should(
            'be.visible'
          );
        });
        cy.get('@subMenuBtn').click();
        cy.findByTestId('sub-menu').should('not.be.visible');
      });
    });

    it('closes the sub-menu on click outside', () => {
      cy.findByTestId('header-nav-bar').within(() => {
        cy.findByRole('button', { name: 'Автопарк' }).click();
        cy.findByTestId('sub-menu').should('be.visible');
      });
      cy.findByTestId('header-nav-bar').click();
      cy.findByTestId('header-nav-bar').within(() => {
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

  context('HeaderContacts', () => {
    it('shows the contact items and the note', () => {
      cy.findByTestId('header-contacts').within(() => {
        cy.findByRole('link', { name: phones[0].text.join(' ') }).should(
          'be.visible'
        );
        cy.findByRole('link', { name: phones[1].text }).should('be.visible');
        cy.findByRole('link', { name: email.text }).should('be.visible');
        cy.findByText('Работаем круглосуточно').should('be.visible');
      });
    });
  });

  context('HeaderNavBar', () => {
    it('shows the logo, the full heading and the menu', () => {
      cy.findByTestId('header-nav-bar').within(() => {
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

  context('IntroSection', () => {
    it('renders first and second slides', () => {
      cy.findByTestId('intro-section').within(() => {
        const vehicleKeys = Object.keys(vehicles);
        const firstVehicle = vehicles[vehicleKeys[0]];
        const secondVehicle = vehicles[vehicleKeys[1]];
        cy.findByRole('heading', { name: firstVehicle.fullName.join(' ') })
          .as('heading')
          .should('be.visible');
        cy.get('@heading')
          .parents('[data-testid="slide"]')
          .within(() => {
            cy.findByRole('img', { name: firstVehicle.shortName }).should(
              'be.visible'
            );
            const priceText = firstVehicle.price.halfShift
              ? `от ${firstVehicle.price.halfShift} ₽/полсмены`
              : `от ${firstVehicle.price.fullShift} ₽/смена`;
            cy.findByText(priceText).should('be.visible');
            cy.findByRole('link', { name: 'Подробнее' })
              .should('be.visible')
              .and('have.attr', 'href', firstVehicle.pagePath);
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
        cy.findByRole('heading', {
          name: secondVehicle.fullName.join(' '),
          timeout: 10000,
        })
          .as('heading')
          .should('be.visible');
        cy.get('@heading')
          .parents('[data-testid="slide"]')
          .within(() => {
            cy.findByRole('img', { name: secondVehicle.shortName }).should(
              'be.visible'
            );
            const priceText = secondVehicle.price.halfShift
              ? `от ${secondVehicle.price.halfShift} ₽/полсмены`
              : `от ${secondVehicle.price.fullShift} ₽/смена`;
            cy.findByText(priceText).should('be.visible');
            cy.findByRole('link', { name: 'Подробнее' })
              .should('be.visible')
              .and('have.attr', 'href', secondVehicle.pagePath);
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

  context('ReviewSection', () => {
    it('shows first three reviews', () => {
      cy.findByTestId('review-section').within(() => {
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
