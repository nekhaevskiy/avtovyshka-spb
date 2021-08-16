import { ReactImageGalleryItem } from 'react-image-gallery';

export interface Price {
  fullShift: number;
  halfShift?: number;
  delivery: number;
}

export interface Vehicle {
  shortName: string;
  fullName: string[];
  pagePath: string;
  pageTitle: string;
  image: string;
  price: Price;
  card: [string, string][];
  generalPhotos: ReadonlyArray<ReactImageGalleryItem>;
  technicalPhotos: ReadonlyArray<ReactImageGalleryItem>;
  shortSpecs: [string, string][];
  fullSpecs: [string, string][];
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
        originalAlt: 'Автовышка-платформа 13м - 1',
        thumbnail: '/images/vehicle-photo/awp-13m/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-13m/02.jpg',
        originalAlt: 'Автовышка-платформа 13м - 2',
        thumbnail: '/images/vehicle-photo/awp-13m/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-13m/03.jpg',
        originalAlt: 'Автовышка-платформа 13м - 3',
        thumbnail: '/images/vehicle-photo/awp-13m/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-13m/04.jpg',
        originalAlt: 'Автовышка-платформа 13м - 4',
        thumbnail: '/images/vehicle-photo/awp-13m/04-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-13m/05.jpg',
        originalAlt: 'Автовышка-платформа 13м - 5',
        thumbnail: '/images/vehicle-photo/awp-13m/05-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-13m/06.jpg',
        originalAlt: 'Автовышка-платформа 13м - 6',
        thumbnail: '/images/vehicle-photo/awp-13m/06-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 6',
      },
      {
        original: '/images/vehicle-photo/awp-13m/07.jpg',
        originalAlt: 'Автовышка-платформа 13м - 7',
        thumbnail: '/images/vehicle-photo/awp-13m/07-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 7',
      },
      {
        original: '/images/vehicle-photo/awp-13m/08.jpg',
        originalAlt: 'Автовышка-платформа 13м - 8',
        thumbnail: '/images/vehicle-photo/awp-13m/08-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 8',
      },
      {
        original: '/images/vehicle-photo/awp-13m/09.jpg',
        originalAlt: 'Автовышка-платформа 13м - 9',
        thumbnail: '/images/vehicle-photo/awp-13m/09-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 13м - 9',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/awp-13m/technical-1.jpg',
        originalAlt: 'Технические характеристики автовышки-платформы 13м - 1',
        thumbnail: '/images/vehicle-photo/awp-13m/technical-1-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автовышки-платформы 13м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-13m/technical-2.jpg',
        originalAlt: 'Технические характеристики автовышки-платформы 13м - 2',
        thumbnail: '/images/vehicle-photo/awp-13m/technical-2-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автовышки-платформы 13м - 2',
      },
    ],
    shortSpecs: [
      ['Большая корзина СУПЕРДЕК', '2х4м'],
      ['Высота подъема', '13 м'],
      ['Вылет максимальный', '8 м'],
      ['Грузоподъемность платформы', '400 кг'],
      ['Поворот корзины (платформы)', '360°'],
      ['Размеры платформы (Д/Ш/В), мм', '4000/2000/900'],
    ],
    fullSpecs: [
      ['Большая корзина СУПЕРДЕК', '2х4м'],
      ['Размеры корзины (платформы)', '4000/2000/900 мм'],
      ['Макс. грузоподъемность корзины', '400 кг'],
      ['Высота подъема корзины', '13 м'],
      ['Вылет максимальный', '8 м'],
      ['Тип подъёмника', 'телескоп'],
      ['Угол поворота стрелы', '360°'],
      ['Угол поворота корзины', '360°'],
      ['Пульты управления', '2 (на шасси + в корзине)'],
      ['Система оповещения перегрузки', 'есть'],
      ['Система запуска и остановки мотора', 'есть'],
      ['Длина в транспортном положении', '5м'],
      ['Высота в транспортном положении', '3м'],
      ['Ширина', '2м'],
    ],
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
        originalAlt: 'Автовышка 15м - 1',
        thumbnail: '/images/vehicle-photo/awp-15m/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 15м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-15m/02.jpg',
        originalAlt: 'Автовышка 15м - 2',
        thumbnail: '/images/vehicle-photo/awp-15m/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 15м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-15m/03.jpg',
        originalAlt: 'Автовышка 15м - 3',
        thumbnail: '/images/vehicle-photo/awp-15m/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 15м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-15m/04.jpg',
        originalAlt: 'Автовышка 15м - 4',
        thumbnail: '/images/vehicle-photo/awp-15m/04-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 15м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-15m/05.jpg',
        originalAlt: 'Автовышка 15м - 5',
        thumbnail: '/images/vehicle-photo/awp-15m/05-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 15м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-15m/06.jpg',
        originalAlt: 'Автовышка 15м - 6',
        thumbnail: '/images/vehicle-photo/awp-15m/06-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 15м - 6',
      },
      {
        original: '/images/vehicle-photo/awp-15m/07.jpg',
        originalAlt: 'Автовышка 15м - 7',
        thumbnail: '/images/vehicle-photo/awp-15m/07-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 15м - 7',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/awp-15m/technical-1.jpg',
        originalAlt: 'Технические характеристики автовышки 15м - 1',
        thumbnail: '/images/vehicle-photo/awp-15m/technical-1-thumb.jpg',
        thumbnailAlt: 'Миниатюра технических характеристик автовышки 15м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-15m/technical-2.jpg',
        originalAlt: 'Технические характеристики автовышки 15м - 2',
        thumbnail: '/images/vehicle-photo/awp-15m/technical-2-thumb.jpg',
        thumbnailAlt: 'Миниатюра технических характеристик автовышки 15м - 2',
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
    fullSpecs: [
      ['Высота подъема люльки', '15 м'],
      ['Вылет максимальный', '11 м'],
      ['Макс. грузоподъемность люльки', '200 кг'],
      ['Макс. грузоподъемность лебедки', '450 кг'],
      ['Тип подъёмника', 'телескоп'],
      ['Угол поворота стрелы', '360°'],
      ['Угол поворота корзины', '360°'],
      ['Пульты управления', '2 (на шасси + в корзине)'],
      ['Система оповещения перегрузки', 'есть'],
      ['Система запуска и остановки мотора', 'есть'],
      ['Длина в транспортном положении', '5м'],
      ['Высота в транспортном положении', '3м'],
      ['Ширина', '1,8м'],
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
        originalAlt: 'Автовышка-платформа 16м - 1',
        thumbnail: '/images/vehicle-photo/awp-16m/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 16м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-16m/02.jpg',
        originalAlt: 'Автовышка-платформа 16м - 2',
        thumbnail: '/images/vehicle-photo/awp-16m/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 16м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-16m/03.jpg',
        originalAlt: 'Автовышка-платформа 16м - 3',
        thumbnail: '/images/vehicle-photo/awp-16m/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 16м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-16m/04.jpg',
        originalAlt: 'Автовышка-платформа 16м - 4',
        thumbnail: '/images/vehicle-photo/awp-16m/04-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 16м - 4',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/awp-16m/technical-1.jpg',
        originalAlt: 'Технические характеристики автовышки-платформы 16м - 1',
        thumbnail: '/images/vehicle-photo/awp-16m/technical-1-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автовышки-платформы 16м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-16m/technical-2.jpg',
        originalAlt: 'Технические характеристики автовышки-платформы 16м - 2',
        thumbnail: '/images/vehicle-photo/awp-16m/technical-2-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автовышки-платформы 16м - 2',
      },
    ],
    shortSpecs: [
      ['Большая корзина СУПЕРДЕК', '2х4м'],
      ['Высота подъема', '16 м'],
      ['Вылет максимальный', '11 м'],
      ['Грузоподъемность корзины', '1000 кг'],
      ['Поворот корзины', '360°'],
    ],
    fullSpecs: [
      ['Большая корзина СУПЕРДЕК', '2x4м'],
      ['Высота подъема корзины', '16 м'],
      ['Вылет максимальный', '11 м'],
      ['Макс. грузоподъемность', '1000 кг'],
      ['Угол поворота стрелы', '360°'],
      ['Угол поворота корзины', '360°'],
      ['Пульты управления', '2 (на шасси + в корзине)'],
      ['Длина в транспортном положении', '6,5 м'],
      ['Высота в транспортном положении', '3,5 м'],
      ['Ширина', '2,0 м'],
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
        originalAlt: 'Автовышка 17м - 1',
        thumbnail: '/images/vehicle-photo/awp-17m/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 17м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-17m/02.jpg',
        originalAlt: 'Автовышка 17м - 2',
        thumbnail: '/images/vehicle-photo/awp-17m/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 17м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-17m/03.jpg',
        originalAlt: 'Автовышка 17м - 3',
        thumbnail: '/images/vehicle-photo/awp-17m/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 17м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-17m/04.jpg',
        originalAlt: 'Автовышка 17м - 4',
        thumbnail: '/images/vehicle-photo/awp-17m/04-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 17м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-17m/05.jpg',
        originalAlt: 'Автовышка 17м - 5',
        thumbnail: '/images/vehicle-photo/awp-17m/05-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 17м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-17m/06.jpg',
        originalAlt: 'Автовышка 17м - 6',
        thumbnail: '/images/vehicle-photo/awp-17m/06-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 17м - 6',
      },
      {
        original: '/images/vehicle-photo/awp-17m/07.jpg',
        originalAlt: 'Автовышка 17м - 7',
        thumbnail: '/images/vehicle-photo/awp-17m/07-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 17м - 7',
      },
      {
        original: '/images/vehicle-photo/awp-17m/08.jpg',
        originalAlt: 'Автовышка 17м - 8',
        thumbnail: '/images/vehicle-photo/awp-17m/08-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 17м - 8',
      },
      {
        original: '/images/vehicle-photo/awp-17m/09.jpg',
        originalAlt: 'Автовышка 17м - 9',
        thumbnail: '/images/vehicle-photo/awp-17m/09-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 17м - 9',
      },
      {
        original: '/images/vehicle-photo/awp-17m/10.jpg',
        originalAlt: 'Автовышка 17м - 10',
        thumbnail: '/images/vehicle-photo/awp-17m/10-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 17м - 10',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/awp-17m/technical-1.jpg',
        originalAlt: 'Технические характеристики автовышки 17м - 1',
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
    fullSpecs: [
      ['Высота подъема люльки', '17 м'],
      ['Вылет максимальный', '10 м'],
      ['Макс. грузоподъемность люльки', '200 кг'],
      ['Тип подъёмника', 'телескоп-колено'],
      ['Угол поворота стрелы', '360°'],
      ['Угол поворота корзины', '360°'],
      ['Пульты управления', '2 (на шасси + в корзине)'],
      ['Система оповещения перегрузки', 'есть'],
      ['Система запуска и остановки мотора', 'есть'],
      ['Длина в транспортном положении', '5м'],
      ['Высота в транспортном положении', '3,1м'],
      ['Ширина', '1,8м'],
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
        originalAlt: 'Автовышка-платформа 21м - 1',
        thumbnail: '/images/vehicle-photo/awp-21m/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-21m/02.jpg',
        originalAlt: 'Автовышка-платформа 21м - 2',
        thumbnail: '/images/vehicle-photo/awp-21m/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-21m/03.jpg',
        originalAlt: 'Автовышка-платформа 21м - 3',
        thumbnail: '/images/vehicle-photo/awp-21m/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-21m/04.jpg',
        originalAlt: 'Автовышка-платформа 21м - 4',
        thumbnail: '/images/vehicle-photo/awp-21m/04-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-21m/05.jpg',
        originalAlt: 'Автовышка-платформа 21м - 5',
        thumbnail: '/images/vehicle-photo/awp-21m/05-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-21m/06.jpg',
        originalAlt: 'Автовышка-платформа 21м - 6',
        thumbnail: '/images/vehicle-photo/awp-21m/06-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 6',
      },
      {
        original: '/images/vehicle-photo/awp-21m/07.jpg',
        originalAlt: 'Автовышка-платформа 21м - 7',
        thumbnail: '/images/vehicle-photo/awp-21m/07-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки-платформы 21м - 7',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/awp-21m/technical-1.jpg',
        originalAlt: 'Технические характеристики автовышки-платформы 21м - 1',
        thumbnail: '/images/vehicle-photo/awp-21m/technical-1-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автовышки-платформы 21м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-21m/technical-2.jpg',
        originalAlt: 'Технические характеристики автовышки-платформы 21м - 2',
        thumbnail: '/images/vehicle-photo/awp-21m/technical-2-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автовышки-платформы 21м - 2',
      },
    ],
    shortSpecs: [
      ['Большая корзина СУПЕРДЕК', '2х4м'],
      ['Высота подъема', '21 м'],
      ['Вылет максимальный', '11 м'],
      ['Грузоподъемность', '1000 кг'],
      ['Поворот корзины', '360°'],
    ],
    fullSpecs: [
      ['Большая корзина СУПЕРДЕК', '2x4м'],
      ['Высота подъема корзины', '21 м'],
      ['Вылет максимальный', '11 м'],
      ['Макс. грузоподъемность', '1000 кг'],
      ['Угол поворота стрелы', '360°'],
      ['Угол поворота корзины', '360°'],
      ['Пульты управления', '2 (на шасси + в корзине)'],
      ['Длина в транспортном положении', '7.4 м'],
      ['Высота в транспортном положении', '3.5 м'],
      ['Ширина', '2.2 м'],
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
        originalAlt: 'Автовышка 24м - 1',
        thumbnail: '/images/vehicle-photo/awp-24m/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 24м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-24m/02.jpg',
        originalAlt: 'Автовышка 24м - 2',
        thumbnail: '/images/vehicle-photo/awp-24m/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 24м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-24m/03.jpg',
        originalAlt: 'Автовышка 24м - 3',
        thumbnail: '/images/vehicle-photo/awp-24m/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 24м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-24m/04.jpg',
        originalAlt: 'Автовышка 24м - 4',
        thumbnail: '/images/vehicle-photo/awp-24m/04-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 24м - 4',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/awp-24m/technical-1.jpg',
        originalAlt: 'Технические характеристики автовышки 24м - 1',
        thumbnail: '/images/vehicle-photo/awp-24m/technical-1-thumb.jpg',
        thumbnailAlt: 'Миниатюра технических характеристик автовышки 24м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-24m/technical-2.jpg',
        originalAlt: 'Технические характеристики автовышки 24м - 2',
        thumbnail: '/images/vehicle-photo/awp-24m/technical-2-thumb.jpg',
        thumbnailAlt: 'Миниатюра технических характеристик автовышки 24м - 2',
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
    fullSpecs: [
      ['Высота подъема люльки', '24 м'],
      ['Вылет максимальный', '15 м'],
      ['Макс. грузоподъемность люльки', '200 кг'],
      ['Тип подъёмника', 'телескоп'],
      ['Угол поворота стрелы', '360°'],
      ['Угол поворота корзины', '360°'],
      ['Пульты управления', '2 (на шасси + в корзине)'],
      ['Система оповещения перегрузки', 'есть'],
      ['Система запуска и остановки мотора', 'есть'],
      ['Длина в транспортном положении', '6,3м'],
      ['Высота в транспортном положении', '2,8м'],
      ['Ширина', '2,1м'],
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
        originalAlt: 'Автовышка 29м - 1',
        thumbnail: '/images/vehicle-photo/awp-29m/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 29м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-29m/02.jpg',
        originalAlt: 'Автовышка 29м - 2',
        thumbnail: '/images/vehicle-photo/awp-29m/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 29м - 2',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/awp-29m/technical-1.jpg',
        originalAlt: 'Технические характеристики автовышки 29м - 1',
        thumbnail: '/images/vehicle-photo/awp-29m/technical-1-thumb.jpg',
        thumbnailAlt: 'Миниатюра технических характеристик автовышки 29м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-29m/technical-2.jpg',
        originalAlt: 'Технические характеристики автовышки 29м - 2',
        thumbnail: '/images/vehicle-photo/awp-29m/technical-2-thumb.jpg',
        thumbnailAlt: 'Миниатюра технических характеристик автовышки 29м - 2',
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
    fullSpecs: [
      ['Высота подъема люльки', '29 м'],
      ['Вылет максимальный', '14 м'],
      ['Макс. грузоподъемность люльки', '200 кг'],
      ['Тип подъёмника', 'телескоп'],
      ['Угол поворота стрелы', '360°'],
      ['Угол поворота корзины', '360°'],
      ['Пульты управления', '2 (на шасси + в корзине)'],
      ['Система оповещения перегрузки', 'есть'],
      ['Система запуска и остановки мотора', 'есть'],
      ['Длина в транспортном положении', '8,5м'],
      ['Высота в транспортном положении', '3,3м'],
      ['Ширина', '2,1м'],
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
        originalAlt: 'Автовышка 40м - 1',
        thumbnail: '/images/vehicle-photo/awp-40m/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 40м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-40m/02.jpg',
        originalAlt: 'Автовышка 40м - 2',
        thumbnail: '/images/vehicle-photo/awp-40m/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 40м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-40m/03.jpg',
        originalAlt: 'Автовышка 40м - 3',
        thumbnail: '/images/vehicle-photo/awp-40m/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 40м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-40m/04.jpg',
        originalAlt: 'Автовышка 40м - 4',
        thumbnail: '/images/vehicle-photo/awp-40m/04-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 40м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-40m/05.jpg',
        originalAlt: 'Автовышка 40м - 5',
        thumbnail: '/images/vehicle-photo/awp-40m/05-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 40м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-40m/06.jpg',
        originalAlt: 'Автовышка 40м - 6',
        thumbnail: '/images/vehicle-photo/awp-40m/06-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 40м - 6',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/awp-40m/technical-1.jpg',
        originalAlt: 'Технические характеристики автовышки 40м - 1',
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
    fullSpecs: [
      ['Высота подъема люльки', '40 м'],
      ['Вылет максимальный', '20 м'],
      ['Макс. грузоподъемность', '300 кг'],
      ['Тип подъемника', 'телескоп'],
      ['Угол поворота люльки', '360°'],
      ['Расстояние между опорами (Д/Ш)', '8,1м/8,1м'],
      ['Электрическая лебедка в корзине', 'есть'],
      ['Эл. розетка 220В в корзине', 'есть'],
      ['Управление стрелой из корзины', 'есть'],
      ['Габариты в транспортном положении (Д/Ш/В)', '11,8м/3,9м/2,45м'],
      ['Полная снаряженная масса', '11890 кг'],
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
        originalAlt: 'Автовышка 45м - 1',
        thumbnail: '/images/vehicle-photo/awp-45m/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 45м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-45m/02.jpg',
        originalAlt: 'Автовышка 45м - 2',
        thumbnail: '/images/vehicle-photo/awp-45m/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 45м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-45m/03.jpg',
        originalAlt: 'Автовышка 45м - 3',
        thumbnail: '/images/vehicle-photo/awp-45m/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 45м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-45m/04.jpg',
        originalAlt: 'Автовышка 45м - 4',
        thumbnail: '/images/vehicle-photo/awp-45m/04-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 45м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-45m/05.jpg',
        originalAlt: 'Автовышка 45м - 5',
        thumbnail: '/images/vehicle-photo/awp-45m/05-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 45м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-45m/06.jpg',
        originalAlt: 'Автовышка 45м - 6',
        thumbnail: '/images/vehicle-photo/awp-45m/06-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 45м - 6',
      },
    ],
    technicalPhotos: [],
    shortSpecs: [
      ['Шасси', 'Daewoo Ultra Novus'],
      ['Высота подъема', '45 м'],
      ['Вылет максимальный', '25 м'],
      ['Грузоподъемность люльки', '300 кг'],
      ['Габариты (Д/Ш/В), мм', '11800/2450/3900'],
      ['Снаряженная масса, кг', '11890'],
      ['Расстояние между опорами (Д/Ш), мм', '8100/8100'],
    ],
    fullSpecs: [
      ['Высота подъема люльки', '45 м'],
      ['Вылет максимальный', '25 м'],
      ['Макс. грузоподъемность', '300 кг'],
      ['Тип подъемника', 'телескоп'],
      ['Угол поворота люльки', '360°'],
      ['Расстояние между опорами (Д/Ш)', '8,1м/8,1м'],
      ['Электрическая лебедка в корзине', 'есть'],
      ['Эл. розетка 220В в корзине', 'есть'],
      ['Управление стрелой из корзины', 'есть'],
      ['Габариты в транспортном положении (Д/Ш/В)', '11,8м/3,9м/2,45м'],
      ['Полная снаряженная масса', '11890 кг'],
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
        originalAlt: 'Автовышка 50м - 1',
        thumbnail: '/images/vehicle-photo/awp-50m/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 50м - 1',
      },
      {
        original: '/images/vehicle-photo/awp-50m/02.jpg',
        originalAlt: 'Автовышка 50м - 2',
        thumbnail: '/images/vehicle-photo/awp-50m/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 50м - 2',
      },
      {
        original: '/images/vehicle-photo/awp-50m/03.jpg',
        originalAlt: 'Автовышка 50м - 3',
        thumbnail: '/images/vehicle-photo/awp-50m/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 50м - 3',
      },
      {
        original: '/images/vehicle-photo/awp-50m/04.jpg',
        originalAlt: 'Автовышка 50м - 4',
        thumbnail: '/images/vehicle-photo/awp-50m/04-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 50м - 4',
      },
      {
        original: '/images/vehicle-photo/awp-50m/05.jpg',
        originalAlt: 'Автовышка 50м - 5',
        thumbnail: '/images/vehicle-photo/awp-50m/05-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 50м - 5',
      },
      {
        original: '/images/vehicle-photo/awp-50m/06.jpg',
        originalAlt: 'Автовышка 50м - 6',
        thumbnail: '/images/vehicle-photo/awp-50m/06-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 50м - 6',
      },
      {
        original: '/images/vehicle-photo/awp-50m/07.jpg',
        originalAlt: 'Автовышка 50м - 7',
        thumbnail: '/images/vehicle-photo/awp-50m/07-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 50м - 7',
      },
      {
        original: '/images/vehicle-photo/awp-50m/08.jpg',
        originalAlt: 'Автовышка 50м - 8',
        thumbnail: '/images/vehicle-photo/awp-50m/08-thumb.jpg',
        thumbnailAlt: 'Миниатюра автовышки 50м - 8',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/awp-50m/technical-1.jpg',
        originalAlt: 'Технические характеристики автовышки 50м - 1',
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
    fullSpecs: [
      ['Высота подъема люльки', '50 м'],
      ['Вылет максимальный', '30 м'],
      ['Макс. грузоподъемность', '300 кг'],
      ['Тип подъемника', 'телескоп'],
      ['Угол поворота люльки', '360°'],
      ['Расстояние между опорами (Д/Ш)', '8,1м/8,1м'],
      ['Электрическая лебедка в корзине', 'есть'],
      ['Эл. розетка 220В в корзине', 'есть'],
      ['Управление стрелой из корзины', 'есть'],
      ['Габариты в транспортном положении (Д/Ш/В)', '11,8м/3,9м/2,45м'],
      ['Полная снаряженная масса', '11890 кг'],
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
        originalAlt: 'Автокран 25т Ивановец - 1',
        thumbnail: '/images/vehicle-photo/truck-crane-ivanovets/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автокрана 25т Ивановец - 1',
      },
      {
        original: '/images/vehicle-photo/truck-crane-ivanovets/02.jpg',
        originalAlt: 'Автокран 25т Ивановец - 2',
        thumbnail: '/images/vehicle-photo/truck-crane-ivanovets/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автокрана 25т Ивановец - 2',
      },
      {
        original: '/images/vehicle-photo/truck-crane-ivanovets/03.jpg',
        originalAlt: 'Автокран 25т Ивановец - 3',
        thumbnail: '/images/vehicle-photo/truck-crane-ivanovets/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автокрана 25т Ивановец - 3',
      },
      {
        original: '/images/vehicle-photo/truck-crane-ivanovets/04.jpg',
        originalAlt: 'Автокран 25т Ивановец - 4',
        thumbnail: '/images/vehicle-photo/truck-crane-ivanovets/04-thumb.jpg',
        thumbnailAlt: 'Миниатюра автокрана 25т Ивановец - 4',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/truck-crane-ivanovets/technical-1.jpg',
        originalAlt: 'Технические характеристики автокрана Ивановец 25 т - 1',
        thumbnail:
          '/images/vehicle-photo/truck-crane-ivanovets/technical-1-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автокрана Ивановец 25 т - 1',
      },
      {
        original: '/images/vehicle-photo/truck-crane-ivanovets/technical-2.jpg',
        originalAlt: 'Технические характеристики автокрана Ивановец 25 т - 2',
        thumbnail:
          '/images/vehicle-photo/truck-crane-ivanovets/technical-2-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автокрана Ивановец 25 т - 2',
      },
    ],
    shortSpecs: [
      ['Грузоподъемность', '25 т'],
      ['Высота подъема', '31 м'],
      ['Вылет максимальный', '28 м'],
      ['Шасси', 'КАМАЗ'],
    ],
    fullSpecs: [
      ['Базовое шасси', 'КАМАЗ'],
      ['Колесная формула', '6х4'],
      ['Грузоподъемность', '25 т'],
      ['Высота подъема', '31 м'],
      ['Вылет стрелы', '28 м'],
      ['Зоны работы', '240° и 360°'],
      ['Габариты (Д/Ш/В)', '11,95/2,5/3,97 м'],
      ['Полная масса', '23,2 т'],
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
        originalAlt: 'Автокран 25т Kobelco - 1',
        thumbnail: '/images/vehicle-photo/truck-crane-kobelco/01-thumb.jpg',
        thumbnailAlt: 'Миниатюра автокрана 25т Kobelco - 1',
      },
      {
        original: '/images/vehicle-photo/truck-crane-kobelco/02.jpg',
        originalAlt: 'Автокран 25т Kobelco - 2',
        thumbnail: '/images/vehicle-photo/truck-crane-kobelco/02-thumb.jpg',
        thumbnailAlt: 'Миниатюра автокрана 25т Kobelco - 2',
      },
      {
        original: '/images/vehicle-photo/truck-crane-kobelco/03.jpg',
        originalAlt: 'Автокран 25т Kobelco - 3',
        thumbnail: '/images/vehicle-photo/truck-crane-kobelco/03-thumb.jpg',
        thumbnailAlt: 'Миниатюра автокрана 25т Kobelco - 3',
      },
    ],
    technicalPhotos: [
      {
        original: '/images/vehicle-photo/truck-crane-kobelco/technical-1.jpg',
        originalAlt: 'Технические характеристики автокрана Kobelco 25 т - 1',
        thumbnail:
          '/images/vehicle-photo/truck-crane-kobelco/technical-1-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автокрана Kobelco 25 т - 1',
      },
      {
        original: '/images/vehicle-photo/truck-crane-kobelco/technical-2.jpg',
        originalAlt: 'Технические характеристики автокрана Kobelco 25 т - 2',
        thumbnail:
          '/images/vehicle-photo/truck-crane-kobelco/technical-2-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автокрана Kobelco 25 т - 2',
      },
      {
        original: '/images/vehicle-photo/truck-crane-kobelco/technical-3.jpg',
        originalAlt: 'Технические характеристики автокрана Kobelco 25 т - 3',
        thumbnail:
          '/images/vehicle-photo/truck-crane-kobelco/technical-3-thumb.jpg',
        thumbnailAlt:
          'Миниатюра технических характеристик автокрана Kobelco 25 т - 3',
      },
    ],
    shortSpecs: [
      ['Высота подъема', '42 м'],
      ['Вылет максимальный', '30 м'],
      ['Грузоподъемность', '25 т'],
    ],
    fullSpecs: [
      ['Высота подъема', '42 м'],
      ['Вылет максимальный', '30 м'],
      ['Грузоподъемность', '25 т'],
    ],
  },
};
