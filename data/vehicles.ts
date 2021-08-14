interface VehicleCard {
  image: string;
  specs: [string, string][];
}

export interface IVehiclePhoto {
  original: string;
  thumbnail: string;
  originalAlt: string;
  thumbnailAlt: string;
}

export interface Vehicle {
  name: string;
  fullName: string[];
  path: string;
  priceHalfShift?: number;
  priceFullShift: number;
  priceDelivery: number;
  introSectionImage: string;
  vehicleCard: VehicleCard;
  title: string;
  vehiclePhoto: IVehiclePhoto[];
  vehicleShortDescription: [string, string][];
}

// We use object structure of vehicles instead of array structure of them
// because it's more suitable for dynamic routes feature of Next.js
export const vehicles: Record<string, Vehicle> = {
  'avtovyshka-13m': {
    name: 'Автовышка-платформа 13м',
    fullName: ['Автовышка-платформа', '13 метров'],
    path: '/avtopark/avtovyshka-13m',
    priceHalfShift: 7000,
    priceFullShift: 9000,
    priceDelivery: 50,
    introSectionImage: '/images/intro-section/avtovyshka-13m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-13m.jpg',
      specs: [
        ['Грузоподъемность корзины', '400 кг'],
        ['Размеры корзины (платформы)', '2х4 м'],
        ['Высота подъема', '13 м'],
        ['Вылет максимальный', '8 м'],
      ],
    },
    title: 'Аренда автовышки-платформы 13м',
    vehiclePhoto: [
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
    vehicleShortDescription: [
      ['Большая корзина СУПЕРДЕК', '2х4м'],
      ['Высота подъема', '13 м'],
      ['Вылет максимальный', '8 м'],
      ['Грузоподъемность платформы', '400 кг'],
      ['Поворот корзины (платформы)', '360°'],
      ['Размеры платформы (Д/Ш/В), мм', '4000/2000/900'],
    ],
  },
  'avtovyshka-15m': {
    name: 'Автовышка 15м',
    fullName: ['Автовышка', '15 метров'],
    path: '/avtopark/avtovyshka-15m',
    priceHalfShift: 7000,
    priceFullShift: 9000,
    priceDelivery: 50,
    introSectionImage: '/images/intro-section/avtovyshka-15m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-15m.jpg',
      specs: [
        ['Высота подъема', '15 м'],
        ['Вылет максимальный', '11 м'],
        ['Грузоподъемность люльки', '200 кг'],
        ['Грузоподъемность лебедки', '450 кг'],
      ],
    },
    title: 'Аренда автовышки 15м',
    vehiclePhoto: [
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
    vehicleShortDescription: [
      ['Высота подъема', '15 м'],
      ['Вылет максимальный', '11 м'],
      ['Грузоподъемность люльки', '200 кг'],
      ['Грузоподъемность лебедки', '450 кг'],
      ['Поворот корзины', '360°'],
      ['Размеры корзины (Д/Ш/В), мм', '1100/750/900'],
    ],
  },
  'avtovyshka-16m': {
    name: 'Автовышка-платформа 16м',
    fullName: ['Автовышка-платформа', '16 метров'],
    path: '/avtopark/avtovyshka-16m',
    priceHalfShift: 8000,
    priceFullShift: 10000,
    priceDelivery: 50,
    introSectionImage: '/images/intro-section/avtovyshka-16m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-16m.jpg',
      specs: [
        ['Грузоподъемность корзины', '1000 кг'],
        ['Размер корзины (платформы)', '2х4 м'],
        ['Высота подъема', '16 м'],
        ['Вылет максимальный', '11 м'],
      ],
    },
    title: 'Аренда автовышки-платформы 16м',
    vehiclePhoto: [
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
    vehicleShortDescription: [
      ['Большая корзина СУПЕРДЕК', '2х4м'],
      ['Высота подъема', '16 м'],
      ['Вылет максимальный', '11 м'],
      ['Грузоподъемность корзины', '1000 кг'],
      ['Поворот корзины', '360°'],
    ],
  },
  'avtovyshka-17m': {
    name: 'Автовышка 17м',
    fullName: ['Автовышка', '17 метров'],
    path: '/avtopark/avtovyshka-17m',
    priceHalfShift: 7000,
    priceFullShift: 9000,
    priceDelivery: 50,
    introSectionImage: '/images/intro-section/avtovyshka-17m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-17m.jpg',
      specs: [
        ['Высота подъема', '17 м'],
        ['Вылет максимальный', '10 м'],
        ['Грузоподъемность люльки', '200 кг'],
        ['Проезд в арку', '3200 мм'],
      ],
    },
    title: 'Аренда автовышки 17м',
    vehiclePhoto: [
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
    vehicleShortDescription: [
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
    name: 'Автовышка-платформа 21м',
    fullName: ['Автовышка-платформа', '21 метр'],
    path: '/avtopark/avtovyshka-21m',
    priceHalfShift: 11000,
    priceFullShift: 13000,
    priceDelivery: 50,
    introSectionImage: '/images/intro-section/avtovyshka-21m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-21m.jpg',
      specs: [
        ['Грузоподъемность', '1000 кг'],
        ['Размеры корзины (платформы)', '2х4 м'],
        ['Высота подъема', '21 м'],
        ['Вылет максимальный', '11 м'],
      ],
    },
    title: 'Аренда автовышки-платформы 21м',
    vehiclePhoto: [
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
    vehicleShortDescription: [
      ['Большая корзина СУПЕРДЕК', '2х4м'],
      ['Высота подъема', '21 м'],
      ['Вылет максимальный', '11 м'],
      ['Грузоподъемность', '1000 кг'],
      ['Поворот корзины', '360°'],
    ],
  },
  'avtovyshka-24m': {
    name: 'Автовышка 24м',
    fullName: ['Автовышка', '24 метра'],
    path: '/avtopark/avtovyshka-24m',
    priceHalfShift: 10000,
    priceFullShift: 12000,
    priceDelivery: 50,
    introSectionImage: '/images/intro-section/avtovyshka-24m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-24m.jpg',
      specs: [
        ['Высота подъема', '24 м'],
        ['Вылет максимальный', '15 м'],
        ['Грузоподъемность люльки', '200 кг'],
        ['Проезд в арку', '2800 мм'],
      ],
    },
    title: 'Аренда автовышки 24м',
    vehiclePhoto: [
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
    vehicleShortDescription: [
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
    name: 'Автовышка 29м',
    fullName: ['Автовышка', '29 метров'],
    path: '/avtopark/avtovyshka-29m',
    priceHalfShift: 9000,
    priceFullShift: 13000,
    priceDelivery: 45,
    introSectionImage: '/images/intro-section/avtovyshka-29m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-29m.jpg',
      specs: [
        ['Высота подъема', '29 м'],
        ['Вылет максимальный', '14 м'],
        ['Грузоподъемность люльки', '200 кг'],
        ['Проезд в арку', '3300 мм'],
      ],
    },
    title: 'Аренда автовышки 29м',
    vehiclePhoto: [
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
    vehicleShortDescription: [
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
    name: 'Автовышка 40м',
    fullName: ['Автовышка', '40 метров'],
    path: '/avtopark/avtovyshka-40m',
    priceFullShift: 22000,
    priceDelivery: 45,
    introSectionImage: '/images/intro-section/avtovyshka-40m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-40m.jpg',
      specs: [
        ['Высота подъема', '40 м'],
        ['Вылет максимальный', '20 м'],
        ['Грузоподъемность люльки', '300 кг'],
      ],
    },
    title: 'Аренда автовышки 40м',
    vehiclePhoto: [
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
    vehicleShortDescription: [
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
    name: 'Автовышка 45м',
    fullName: ['Автовышка', '45 метров'],
    path: '/avtopark/avtovyshka-45m',
    priceFullShift: 25000,
    priceDelivery: 45,
    introSectionImage: '/images/intro-section/avtovyshka-45m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-45m.jpg',
      specs: [
        ['Высота подъема', '45 м'],
        ['Вылет максимальный', '25 м'],
        ['Грузоподъемность люльки', '300 кг'],
      ],
    },
    title: 'Аренда автовышки 45м',
    vehiclePhoto: [
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
    vehicleShortDescription: [
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
    name: 'Автовышка 50м',
    fullName: ['Автовышка', '50 метров'],
    path: '/avtopark/avtovyshka-50m',
    priceFullShift: 28000,
    priceDelivery: 45,
    introSectionImage: '/images/intro-section/avtovyshka-50m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-50m.jpg',
      specs: [
        ['Высота подъема', '50 м'],
        ['Вылет максимальный', '30 м'],
        ['Грузоподъемность люльки', '300 кг'],
      ],
    },
    title: 'Аренда автовышки 50м',
    vehiclePhoto: [
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
    vehicleShortDescription: [
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
    name: 'Автокран 25т Ивановец',
    fullName: ['Автокран Ивановец', '25 тонн'],
    path: '/avtopark/avtokran-25t-ivanovets',
    priceHalfShift: 8000,
    priceFullShift: 14000,
    priceDelivery: 45,
    introSectionImage: '/images/intro-section/avtokran-25t-ivanovets.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtokran-25t-ivanovets.jpg',
      specs: [
        ['Грузоподъемность', '25 т'],
        ['Высота подъема', '31 м'],
        ['Вылет максимальный', '28 м'],
        ['Шасси', 'КАМАЗ'],
      ],
    },
    title: 'Аренда автокрана Ивановец 25т',
    vehiclePhoto: [
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
    vehicleShortDescription: [
      ['Грузоподъемность', '25 т'],
      ['Высота подъема', '31 м'],
      ['Вылет максимальный', '28 м'],
      ['Шасси', 'КАМАЗ'],
    ],
  },
  'avtokran-25t-kobelco': {
    name: 'Автокран 25т Kobelco',
    fullName: ['Автокран Kobelco', '25 тонн'],
    path: '/avtopark/avtokran-25t-kobelco',
    priceFullShift: 16000,
    priceDelivery: 45,
    introSectionImage: '/images/intro-section/avtokran-25t-kobelco.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtokran-25t-kobelco.jpg',
      specs: [
        ['Грузоподъемность', '25 т'],
        ['Высота подъема', '42 м'],
        ['Вылет максимальный', '30 м'],
      ],
    },
    title: 'Аренда автокрана Kobelco 25т',
    vehiclePhoto: [
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
    vehicleShortDescription: [
      ['Высота подъема', '42 м'],
      ['Вылет максимальный', '30 м'],
      ['Грузоподъемность', '25 т'],
    ],
  },
};
