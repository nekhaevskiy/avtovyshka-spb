export interface Price {
  fullShift: number;
  halfShift?: number;
  delivery: number;
}
export interface Photo {
  original: string;
  thumbnail: string;
  originalAlt: string;
  thumbnailAlt: string;
}

export interface Vehicle {
  shortName: string;
  fullName: string[];
  pagePath: string;
  pageTitle: string;
  image: string;
  price: Price;
  card: [string, string][];
  generalPhotos: Photo[];
  // technicalPhotos: Photo[];
  shortSpecs: [string, string][];
  // fullSpecs: [string, string][];
  // detailedDescription: string[];
}

// We use object structure of vehicles instead of array structure of them
// because it's more suitable for dynamic routes feature of Next.js
export const vehicles: Record<string, Vehicle> = {
  'avtovyshka-13m': {
    shortName: 'Автовышка-платформа 13м',
    fullName: ['Автовышка-платформа', '13 метров'],
    pagePath: '/avtopark/avtovyshka-13m',
    pageTitle: 'Аренда автовышки-платформы 13м',
    price: {
      halfShift: 7000,
      fullShift: 9000,
      delivery: 50,
    },
    image: '/images/vehicle-photo/awp-13m/01.jpg',
    card: [
      ['Грузоподъемность корзины', '400 кг'],
      ['Размеры корзины (платформы)', '2х4 м'],
      ['Высота подъема', '13 м'],
      ['Вылет максимальный', '8 м'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/awp-13m/01.jpg',
        thumbnail: '/images/vehicle-photo/awp-13m/01-thumb.jpg',
        originalAlt: 'Автовышка-платформа 13м - 1',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-13m/02.jpg',
        thumbnail: '/images/vehicle-photo/awp-13m/02-thumb.jpg',
        originalAlt: 'Автовышка-платформа 13м - 2',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-13m/03.jpg',
        thumbnail: '/images/vehicle-photo/awp-13m/03-thumb.jpg',
        originalAlt: 'Автовышка-платформа 13м - 3',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-13m/04.jpg',
        thumbnail: '/images/vehicle-photo/awp-13m/04-thumb.jpg',
        originalAlt: 'Автовышка-платформа 13м - 4',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-13m/05.jpg',
        thumbnail: '/images/vehicle-photo/awp-13m/05-thumb.jpg',
        originalAlt: 'Автовышка-платформа 13м - 5',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-13m/06.jpg',
        thumbnail: '/images/vehicle-photo/awp-13m/06-thumb.jpg',
        originalAlt: 'Автовышка-платформа 13м - 6',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 6',
      },
      {
        original: '/images/vehicle-photo/awp-13m/07.jpg',
        thumbnail: '/images/vehicle-photo/awp-13m/07-thumb.jpg',
        originalAlt: 'Автовышка-платформа 13м - 7',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 7',
      },
      {
        original: '/images/vehicle-photo/awp-13m/08.jpg',
        thumbnail: '/images/vehicle-photo/awp-13m/08-thumb.jpg',
        originalAlt: 'Автовышка-платформа 13м - 8',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 8',
      },
      {
        original: '/images/vehicle-photo/awp-13m/09.jpg',
        thumbnail: '/images/vehicle-photo/awp-13m/09-thumb.jpg',
        originalAlt: 'Автовышка-платформа 13м - 9',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 9',
      },
    ],
    // technicalPhotos: [],
    shortSpecs: [
      ['Большая корзина СУПЕРДЕК', '2х4м'],
      ['Высота подъема', '13 м'],
      ['Вылет максимальный', '8 м'],
      ['Грузоподъемность платформы', '400 кг'],
      ['Поворот корзины (платформы)', '360°'],
      ['Размеры платформы (Д/Ш/В), мм', '4000/2000/900'],
    ],
    // fullSpecs: [],
    // detailedDescription: [],
  },
  'avtovyshka-15m': {
    shortName: 'Автовышка 15м',
    fullName: ['Автовышка', '15 метров'],
    pagePath: '/avtopark/avtovyshka-15m',
    pageTitle: 'Аренда автовышки 15м',
    price: {
      halfShift: 7000,
      fullShift: 9000,
      delivery: 50,
    },
    image: '/images/vehicle-photo/awp-15m/04.jpg',
    card: [
      ['Высота подъема', '15 м'],
      ['Вылет максимальный', '11 м'],
      ['Грузоподъемность люльки', '200 кг'],
      ['Грузоподъемность лебедки', '450 кг'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/awp-15m/01.jpg',
        thumbnail: '/images/vehicle-photo/awp-15m/01-thumb.jpg',
        originalAlt: 'Автовышка 15м - 1',
        thumbnailAlt: 'Миниатюра автовышки 15м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-15m/02.jpg',
        thumbnail: '/images/vehicle-photo/awp-15m/02-thumb.jpg',
        originalAlt: 'Автовышка 15м - 2',
        thumbnailAlt: 'Миниатюра автовышки 15м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-15m/03.jpg',
        thumbnail: '/images/vehicle-photo/awp-15m/03-thumb.jpg',
        originalAlt: 'Автовышка 15м - 3',
        thumbnailAlt: 'Миниатюра автовышки 15м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-15m/04.jpg',
        thumbnail: '/images/vehicle-photo/awp-15m/04-thumb.jpg',
        originalAlt: 'Автовышка 15м - 4',
        thumbnailAlt: 'Миниатюра автовышки 15м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-15m/05.jpg',
        thumbnail: '/images/vehicle-photo/awp-15m/05-thumb.jpg',
        originalAlt: 'Автовышка 15м - 5',
        thumbnailAlt: 'Миниатюра автовышки 15м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-15m/06.jpg',
        thumbnail: '/images/vehicle-photo/awp-15m/06-thumb.jpg',
        originalAlt: 'Автовышка 15м - 6',
        thumbnailAlt: 'Миниатюра автовышки 15м - 6',
      },
      {
        original: '/images/vehicle-photo/awp-15m/07.jpg',
        thumbnail: '/images/vehicle-photo/awp-15m/07-thumb.jpg',
        originalAlt: 'Автовышка 15м - 7',
        thumbnailAlt: 'Миниатюра автовышки 15м - 7',
      },
    ],
    shortSpecs: [
      ['Высота подъема', '15 м'],
      ['Вылет максимальный', '11 м'],
      ['Грузоподъемность люльки', '200 кг'],
      ['Грузоподъемность лебедки', '450 кг'],
      ['Поворот корзины', '360°'],
      ['Размеры корзины (Д/Ш/В), мм', '1100/750/900'],
    ],
  },
  'avtovyshka-16m': {
    shortName: 'Автовышка-платформа 16м',
    fullName: ['Автовышка-платформа', '16 метров'],
    pagePath: '/avtopark/avtovyshka-16m',
    pageTitle: 'Аренда автовышки-платформы 16м',
    price: {
      halfShift: 8000,
      fullShift: 10000,
      delivery: 50,
    },
    image: '/images/vehicle-photo/awp-16m/01.jpg',
    card: [
      ['Грузоподъемность корзины', '1000 кг'],
      ['Размер корзины (платформы)', '2х4 м'],
      ['Высота подъема', '16 м'],
      ['Вылет максимальный', '11 м'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/awp-16m/01.jpg',
        thumbnail: '/images/vehicle-photo/awp-16m/01-thumb.jpg',
        originalAlt: 'Автовышка-платформа 16м - 1',
        thumbnailAlt: 'Миниатюра автовышки-платформы 16м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-16m/02.jpg',
        thumbnail: '/images/vehicle-photo/awp-16m/02-thumb.jpg',
        originalAlt: 'Автовышка-платформа 16м - 2',
        thumbnailAlt: 'Миниатюра автовышки-платформы 16м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-16m/03.jpg',
        thumbnail: '/images/vehicle-photo/awp-16m/03-thumb.jpg',
        originalAlt: 'Автовышка-платформа 16м - 3',
        thumbnailAlt: 'Миниатюра автовышки-платформы 16м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-16m/04.jpg',
        thumbnail: '/images/vehicle-photo/awp-16m/04-thumb.jpg',
        originalAlt: 'Автовышка-платформа 16м - 4',
        thumbnailAlt: 'Миниатюра автовышки-платформы 16м - 4',
      },
    ],
    shortSpecs: [
      ['Большая корзина СУПЕРДЕК', '2х4м'],
      ['Высота подъема', '16 м'],
      ['Вылет максимальный', '11 м'],
      ['Грузоподъемность корзины', '1000 кг'],
      ['Поворот корзины', '360°'],
    ],
  },
  'avtovyshka-17m': {
    shortName: 'Автовышка 17м',
    fullName: ['Автовышка', '17 метров'],
    pagePath: '/avtopark/avtovyshka-17m',
    pageTitle: 'Аренда автовышки 17м',
    price: {
      halfShift: 7000,
      fullShift: 9000,
      delivery: 50,
    },
    image: '/images/vehicle-photo/awp-17m/05.jpg',
    card: [
      ['Высота подъема', '17 м'],
      ['Вылет максимальный', '10 м'],
      ['Грузоподъемность люльки', '200 кг'],
      ['Проезд в арку', '3200 мм'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/awp-17m/01.jpg',
        thumbnail: '/images/vehicle-photo/awp-17m/01-thumb.jpg',
        originalAlt: 'Автовышка 17м - 1',
        thumbnailAlt: 'Миниатюра автовышки 17м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-17m/02.jpg',
        thumbnail: '/images/vehicle-photo/awp-17m/02-thumb.jpg',
        originalAlt: 'Автовышка 17м - 2',
        thumbnailAlt: 'Миниатюра автовышки 17м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-17m/03.jpg',
        thumbnail: '/images/vehicle-photo/awp-17m/03-thumb.jpg',
        originalAlt: 'Автовышка 17м - 3',
        thumbnailAlt: 'Миниатюра автовышки 17м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-17m/04.jpg',
        thumbnail: '/images/vehicle-photo/awp-17m/04-thumb.jpg',
        originalAlt: 'Автовышка 17м - 4',
        thumbnailAlt: 'Миниатюра автовышки 17м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-17m/05.jpg',
        thumbnail: '/images/vehicle-photo/awp-17m/05-thumb.jpg',
        originalAlt: 'Автовышка 17м - 5',
        thumbnailAlt: 'Миниатюра автовышки 17м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-17m/06.jpg',
        thumbnail: '/images/vehicle-photo/awp-17m/06-thumb.jpg',
        originalAlt: 'Автовышка 17м - 6',
        thumbnailAlt: 'Миниатюра автовышки 17м - 6',
      },
      {
        original: '/images/vehicle-photo/awp-17m/07.jpg',
        thumbnail: '/images/vehicle-photo/awp-17m/07-thumb.jpg',
        originalAlt: 'Автовышка 17м - 7',
        thumbnailAlt: 'Миниатюра автовышки 17м - 7',
      },
      {
        original: '/images/vehicle-photo/awp-17m/08.jpg',
        thumbnail: '/images/vehicle-photo/awp-17m/08-thumb.jpg',
        originalAlt: 'Автовышка 17м - 8',
        thumbnailAlt: 'Миниатюра автовышки 17м - 8',
      },
      {
        original: '/images/vehicle-photo/awp-17m/09.jpg',
        thumbnail: '/images/vehicle-photo/awp-17m/09-thumb.jpg',
        originalAlt: 'Автовышка 17м - 9',
        thumbnailAlt: 'Миниатюра автовышки 17м - 9',
      },
      {
        original: '/images/vehicle-photo/awp-17m/10.jpg',
        thumbnail: '/images/vehicle-photo/awp-17m/10-thumb.jpg',
        originalAlt: 'Автовышка 17м - 10',
        thumbnailAlt: 'Миниатюра автовышки 17м - 10',
      },
    ],
    shortSpecs: [
      ['Высота подъема', '17 м'],
      ['Вылет максимальный', '10 м'],
      ['Грузоподъемность люльки', '200 кг'],
      ['Поворот стрелы', '360°'],
      ['Поворот люльки', '360°'],
      ['Размеры люльки (Д/Ш/В), м', '1,6/0,9/1,0'],
      ['Проезд в арку, мм', '3200'],
    ],
  },
  'avtovyshka-21m': {
    shortName: 'Автовышка-платформа 21м',
    fullName: ['Автовышка-платформа', '21 метр'],
    pagePath: '/avtopark/avtovyshka-21m',
    pageTitle: 'Аренда автовышки-платформы 21м',
    price: {
      halfShift: 11000,
      fullShift: 13000,
      delivery: 50,
    },
    image: '/images/vehicle-photo/awp-21m/01.jpg',
    card: [
      ['Грузоподъемность', '1000 кг'],
      ['Размеры корзины (платформы)', '2х4 м'],
      ['Высота подъема', '21 м'],
      ['Вылет максимальный', '11 м'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/awp-21m/01.jpg',
        thumbnail: '/images/vehicle-photo/awp-21m/01-thumb.jpg',
        originalAlt: 'Автовышка-платформа 21м - 1',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-21m/02.jpg',
        thumbnail: '/images/vehicle-photo/awp-21m/02-thumb.jpg',
        originalAlt: 'Автовышка-платформа 21м - 2',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-21m/03.jpg',
        thumbnail: '/images/vehicle-photo/awp-21m/03-thumb.jpg',
        originalAlt: 'Автовышка-платформа 21м - 3',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-21m/04.jpg',
        thumbnail: '/images/vehicle-photo/awp-21m/04-thumb.jpg',
        originalAlt: 'Автовышка-платформа 21м - 4',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-21m/05.jpg',
        thumbnail: '/images/vehicle-photo/awp-21m/05-thumb.jpg',
        originalAlt: 'Автовышка-платформа 21м - 5',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-21m/06.jpg',
        thumbnail: '/images/vehicle-photo/awp-21m/06-thumb.jpg',
        originalAlt: 'Автовышка-платформа 21м - 6',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 6',
      },
      {
        original: '/images/vehicle-photo/awp-21m/07.jpg',
        thumbnail: '/images/vehicle-photo/awp-21m/07-thumb.jpg',
        originalAlt: 'Автовышка-платформа 21м - 7',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 7',
      },
    ],
    shortSpecs: [
      ['Большая корзина СУПЕРДЕК', '2х4м'],
      ['Высота подъема', '21 м'],
      ['Вылет максимальный', '11 м'],
      ['Грузоподъемность', '1000 кг'],
      ['Поворот корзины', '360°'],
    ],
  },
  'avtovyshka-24m': {
    shortName: 'Автовышка 24м',
    fullName: ['Автовышка', '24 метра'],
    pagePath: '/avtopark/avtovyshka-24m',
    pageTitle: 'Аренда автовышки 24м',
    price: {
      halfShift: 10000,
      fullShift: 12000,
      delivery: 50,
    },
    image: '/images/vehicle-photo/awp-24m/01.jpg',
    card: [
      ['Высота подъема', '24 м'],
      ['Вылет максимальный', '15 м'],
      ['Грузоподъемность люльки', '200 кг'],
      ['Проезд в арку', '2800 мм'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/awp-24m/01.jpg',
        thumbnail: '/images/vehicle-photo/awp-24m/01-thumb.jpg',
        originalAlt: 'Автовышка 24м - 1',
        thumbnailAlt: 'Миниатюра автовышки 24м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-24m/02.jpg',
        thumbnail: '/images/vehicle-photo/awp-24m/02-thumb.jpg',
        originalAlt: 'Автовышка 24м - 2',
        thumbnailAlt: 'Миниатюра автовышки 24м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-24m/03.jpg',
        thumbnail: '/images/vehicle-photo/awp-24m/03-thumb.jpg',
        originalAlt: 'Автовышка 24м - 3',
        thumbnailAlt: 'Миниатюра автовышки 24м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-24m/04.jpg',
        thumbnail: '/images/vehicle-photo/awp-24m/04-thumb.jpg',
        originalAlt: 'Автовышка 24м - 4',
        thumbnailAlt: 'Миниатюра автовышки 24м - 4',
      },
    ],
    shortSpecs: [
      ['Высота подъема', '24 м'],
      ['Вылет максимальный', '15 м'],
      ['Грузоподъемность люльки', '200 кг'],
      ['Поворот стрелы', '360°'],
      ['Поворот люльки', '360°'],
      ['Размеры люльки (Д/Ш/В), м', '1,2/0,7/0,9'],
      ['Проезд в арку, мм', '2800'],
    ],
  },
  'avtovyshka-29m': {
    shortName: 'Автовышка 29м',
    fullName: ['Автовышка', '29 метров'],
    pagePath: '/avtopark/avtovyshka-29m',
    pageTitle: 'Аренда автовышки 29м',
    price: {
      halfShift: 9000,
      fullShift: 13000,
      delivery: 45,
    },
    image: '/images/vehicle-photo/awp-29m/01.jpg',
    card: [
      ['Высота подъема', '29 м'],
      ['Вылет максимальный', '14 м'],
      ['Грузоподъемность люльки', '200 кг'],
      ['Проезд в арку', '3300 мм'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/awp-29m/01.jpg',
        thumbnail: '/images/vehicle-photo/awp-29m/01-thumb.jpg',
        originalAlt: 'Автовышка 29м - 1',
        thumbnailAlt: 'Миниатюра автовышки 29м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-29m/02.jpg',
        thumbnail: '/images/vehicle-photo/awp-29m/02-thumb.jpg',
        originalAlt: 'Автовышка 29м - 2',
        thumbnailAlt: 'Миниатюра автовышки 29м - 2',
      },
    ],
    shortSpecs: [
      ['Высота подъема', '29 м'],
      ['Вылет максимальный', '14 м'],
      ['Грузоподъемность люльки', '200 кг'],
      ['Поворот стрелы', '360°'],
      ['Поворот люльки', '360°'],
      ['Размеры люльки (Д/Ш/В), м', '1,2/0,7/0,9'],
      ['Проезд в арку, мм', '3300'],
    ],
  },
  'avtovyshka-40m': {
    shortName: 'Автовышка 40м',
    fullName: ['Автовышка', '40 метров'],
    pagePath: '/avtopark/avtovyshka-40m',
    pageTitle: 'Аренда автовышки 40м',
    price: {
      fullShift: 22000,
      delivery: 45,
    },
    image: '/images/vehicle-photo/awp-40m/01.jpg',
    card: [
      ['Высота подъема', '40 м'],
      ['Вылет максимальный', '20 м'],
      ['Грузоподъемность люльки', '300 кг'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/awp-40m/01.jpg',
        thumbnail: '/images/vehicle-photo/awp-40m/01-thumb.jpg',
        originalAlt: 'Автовышка 40м - 1',
        thumbnailAlt: 'Миниатюра автовышки 40м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-40m/02.jpg',
        thumbnail: '/images/vehicle-photo/awp-40m/02-thumb.jpg',
        originalAlt: 'Автовышка 40м - 2',
        thumbnailAlt: 'Миниатюра автовышки 40м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-40m/03.jpg',
        thumbnail: '/images/vehicle-photo/awp-40m/03-thumb.jpg',
        originalAlt: 'Автовышка 40м - 3',
        thumbnailAlt: 'Миниатюра автовышки 40м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-40m/04.jpg',
        thumbnail: '/images/vehicle-photo/awp-40m/04-thumb.jpg',
        originalAlt: 'Автовышка 40м - 4',
        thumbnailAlt: 'Миниатюра автовышки 40м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-40m/05.jpg',
        thumbnail: '/images/vehicle-photo/awp-40m/05-thumb.jpg',
        originalAlt: 'Автовышка 40м - 5',
        thumbnailAlt: 'Миниатюра автовышки 40м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-40m/06.jpg',
        thumbnail: '/images/vehicle-photo/awp-40m/06-thumb.jpg',
        originalAlt: 'Автовышка 40м - 6',
        thumbnailAlt: 'Миниатюра автовышки 40м - 6',
      },
    ],
    shortSpecs: [
      ['Шасси', 'Daewoo Ultra Novus'],
      ['Высота подъема', '40 м'],
      ['Вылет максимальный', '20 м'],
      ['Грузоподъемность люльки', '300 кг'],
      ['Габариты (Д/Ш/В), мм', '11800/2450/3900'],
      ['Снаряженная масса, кг', '11890'],
      ['Расстояние между опорами (Д/Ш), мм', '8100/8100'],
    ],
  },
  'avtovyshka-45m': {
    shortName: 'Автовышка 45м',
    fullName: ['Автовышка', '45 метров'],
    pagePath: '/avtopark/avtovyshka-45m',
    pageTitle: 'Аренда автовышки 45м',
    price: {
      fullShift: 25000,
      delivery: 45,
    },
    image: '/images/vehicle-photo/awp-45m/01.jpg',
    card: [
      ['Высота подъема', '45 м'],
      ['Вылет максимальный', '25 м'],
      ['Грузоподъемность люльки', '300 кг'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/awp-45m/01.jpg',
        thumbnail: '/images/vehicle-photo/awp-45m/01-thumb.jpg',
        originalAlt: 'Автовышка 45м - 1',
        thumbnailAlt: 'Миниатюра автовышки 45м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-45m/02.jpg',
        thumbnail: '/images/vehicle-photo/awp-45m/02-thumb.jpg',
        originalAlt: 'Автовышка 45м - 2',
        thumbnailAlt: 'Миниатюра автовышки 45м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-45m/03.jpg',
        thumbnail: '/images/vehicle-photo/awp-45m/03-thumb.jpg',
        originalAlt: 'Автовышка 45м - 3',
        thumbnailAlt: 'Миниатюра автовышки 45м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-45m/04.jpg',
        thumbnail: '/images/vehicle-photo/awp-45m/04-thumb.jpg',
        originalAlt: 'Автовышка 45м - 4',
        thumbnailAlt: 'Миниатюра автовышки 45м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-45m/05.jpg',
        thumbnail: '/images/vehicle-photo/awp-45m/05-thumb.jpg',
        originalAlt: 'Автовышка 45м - 5',
        thumbnailAlt: 'Миниатюра автовышки 45м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-45m/06.jpg',
        thumbnail: '/images/vehicle-photo/awp-45m/06-thumb.jpg',
        originalAlt: 'Автовышка 45м - 6',
        thumbnailAlt: 'Миниатюра автовышки 45м - 6',
      },
    ],
    shortSpecs: [
      ['Шасси', 'Daewoo Ultra Novus'],
      ['Высота подъема', '45 м'],
      ['Вылет максимальный', '25 м'],
      ['Грузоподъемность люльки', '300 кг'],
      ['Габариты (Д/Ш/В), мм', '11800/2450/3900'],
      ['Снаряженная масса, кг', '11890'],
      ['Расстояние между опорами (Д/Ш), мм', '8100/8100'],
    ],
  },
  'avtovyshka-50m': {
    shortName: 'Автовышка 50м',
    fullName: ['Автовышка', '50 метров'],
    pagePath: '/avtopark/avtovyshka-50m',
    pageTitle: 'Аренда автовышки 50м',
    price: {
      fullShift: 28000,
      delivery: 45,
    },
    image: '/images/vehicle-photo/awp-50m/01.jpg',
    card: [
      ['Высота подъема', '50 м'],
      ['Вылет максимальный', '30 м'],
      ['Грузоподъемность люльки', '300 кг'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/awp-50m/01.jpg',
        thumbnail: '/images/vehicle-photo/awp-50m/01-thumb.jpg',
        originalAlt: 'Автовышка 50м - 1',
        thumbnailAlt: 'Миниатюра автовышки 50м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-50m/02.jpg',
        thumbnail: '/images/vehicle-photo/awp-50m/02-thumb.jpg',
        originalAlt: 'Автовышка 50м - 2',
        thumbnailAlt: 'Миниатюра автовышки 50м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-50m/03.jpg',
        thumbnail: '/images/vehicle-photo/awp-50m/03-thumb.jpg',
        originalAlt: 'Автовышка 50м - 3',
        thumbnailAlt: 'Миниатюра автовышки 50м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-50m/04.jpg',
        thumbnail: '/images/vehicle-photo/awp-50m/04-thumb.jpg',
        originalAlt: 'Автовышка 50м - 4',
        thumbnailAlt: 'Миниатюра автовышки 50м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-50m/05.jpg',
        thumbnail: '/images/vehicle-photo/awp-50m/05-thumb.jpg',
        originalAlt: 'Автовышка 50м - 5',
        thumbnailAlt: 'Миниатюра автовышки 50м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-50m/06.jpg',
        thumbnail: '/images/vehicle-photo/awp-50m/06-thumb.jpg',
        originalAlt: 'Автовышка 50м - 6',
        thumbnailAlt: 'Миниатюра автовышки 50м - 6',
      },
      {
        original: '/images/vehicle-photo/awp-50m/07.jpg',
        thumbnail: '/images/vehicle-photo/awp-50m/07-thumb.jpg',
        originalAlt: 'Автовышка 50м - 7',
        thumbnailAlt: 'Миниатюра автовышки 50м - 7',
      },
      {
        original: '/images/vehicle-photo/awp-50m/08.jpg',
        thumbnail: '/images/vehicle-photo/awp-50m/08-thumb.jpg',
        originalAlt: 'Автовышка 50м - 8',
        thumbnailAlt: 'Миниатюра автовышки 50м - 8',
      },
    ],
    shortSpecs: [
      ['Шасси', 'Daewoo Ultra Novus'],
      ['Высота подъема', '50 м'],
      ['Вылет максимальный', '30 м'],
      ['Грузоподъемность люльки', '300 кг'],
      ['Габариты (Д/Ш/В), мм', '11800/2450/3900'],
      ['Снаряженная масса, кг', '11890'],
      ['Расстояние между опорами (Д/Ш), мм', '8100/8100'],
    ],
  },
  'avtokran-25t-ivanovets': {
    shortName: 'Автокран 25т Ивановец',
    fullName: ['Автокран Ивановец', '25 тонн'],
    pagePath: '/avtopark/avtokran-25t-ivanovets',
    pageTitle: 'Аренда автокрана Ивановец 25т',
    price: {
      halfShift: 8000,
      fullShift: 14000,
      delivery: 45,
    },
    image: '/images/vehicle-photo/truck-crane-ivanovets/01.jpg',
    card: [
      ['Грузоподъемность', '25 т'],
      ['Высота подъема', '31 м'],
      ['Вылет максимальный', '28 м'],
      ['Шасси', 'КАМАЗ'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/truck-crane-ivanovets/01.jpg',
        thumbnail: '/images/vehicle-photo/truck-crane-ivanovets/01-thumb.jpg',
        originalAlt: 'Автокран 25т Ивановец - 1',
        thumbnailAlt: 'Миниатюра автокрана 25т Ивановец - 1',
      },
      {
        original: '/images/vehicle-photo/truck-crane-ivanovets/02.jpg',
        thumbnail: '/images/vehicle-photo/truck-crane-ivanovets/02-thumb.jpg',
        originalAlt: 'Автокран 25т Ивановец - 2',
        thumbnailAlt: 'Миниатюра автокрана 25т Ивановец - 2',
      },
      {
        original: '/images/vehicle-photo/truck-crane-ivanovets/03.jpg',
        thumbnail: '/images/vehicle-photo/truck-crane-ivanovets/03-thumb.jpg',
        originalAlt: 'Автокран 25т Ивановец - 3',
        thumbnailAlt: 'Миниатюра автокрана 25т Ивановец - 3',
      },
      {
        original: '/images/vehicle-photo/truck-crane-ivanovets/04.jpg',
        thumbnail: '/images/vehicle-photo/truck-crane-ivanovets/04-thumb.jpg',
        originalAlt: 'Автокран 25т Ивановец - 4',
        thumbnailAlt: 'Миниатюра автокрана 25т Ивановец - 4',
      },
    ],
    shortSpecs: [
      ['Грузоподъемность', '25 т'],
      ['Высота подъема', '31 м'],
      ['Вылет максимальный', '28 м'],
      ['Шасси', 'КАМАЗ'],
    ],
  },
  'avtokran-25t-kobelco': {
    shortName: 'Автокран 25т Kobelco',
    fullName: ['Автокран Kobelco', '25 тонн'],
    pagePath: '/avtopark/avtokran-25t-kobelco',
    pageTitle: 'Аренда автокрана Kobelco 25т',
    price: {
      fullShift: 16000,
      delivery: 45,
    },
    image: '/images/vehicle-photo/truck-crane-kobelco/01.jpg',
    card: [
      ['Грузоподъемность', '25 т'],
      ['Высота подъема', '42 м'],
      ['Вылет максимальный', '30 м'],
    ],
    generalPhotos: [
      {
        original: '/images/vehicle-photo/truck-crane-kobelco/01.jpg',
        thumbnail: '/images/vehicle-photo/truck-crane-kobelco/01-thumb.jpg',
        originalAlt: 'Автокран 25т Kobelco - 1',
        thumbnailAlt: 'Миниатюра автокрана 25т Kobelco - 1',
      },
      {
        original: '/images/vehicle-photo/truck-crane-kobelco/02.jpg',
        thumbnail: '/images/vehicle-photo/truck-crane-kobelco/02-thumb.jpg',
        originalAlt: 'Автокран 25т Kobelco - 2',
        thumbnailAlt: 'Миниатюра автокрана 25т Kobelco - 2',
      },
      {
        original: '/images/vehicle-photo/truck-crane-kobelco/03.jpg',
        thumbnail: '/images/vehicle-photo/truck-crane-kobelco/03-thumb.jpg',
        originalAlt: 'Автокран 25т Kobelco - 3',
        thumbnailAlt: 'Миниатюра автокрана 25т Kobelco - 3',
      },
    ],
    shortSpecs: [
      ['Высота подъема', '42 м'],
      ['Вылет максимальный', '30 м'],
      ['Грузоподъемность', '25 т'],
    ],
  },
};
