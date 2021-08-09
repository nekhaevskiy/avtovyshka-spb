interface Card {
  image: string;
  specs: [string, string][];
}

export interface Vehicle {
  name: string;
  fullName: string[];
  path: string;
  title: string;
  priceHalfShift?: number;
  priceFullShift: number;
  priceDelivery: number;
  introSectionImage: string;
  vehicleCard: Card;
}

// We use object structure of vehicles instead of array structure of them
// because it's more suitable for dynamic routes feature of Next.js
export const vehicles: Record<string, Vehicle> = {
  'avtovyshka-13m': {
    name: 'Автовышка-платформа 13м',
    fullName: ['Автовышка-платформа', '13 метров'],
    path: '/avtopark/avtovyshka-13m',
    title: 'Аренда автовышки-платформы 13м',
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
  },
  'avtovyshka-15m': {
    name: 'Автовышка 15м',
    fullName: ['Автовышка', '15 метров'],
    path: '/avtopark/avtovyshka-15m',
    title: 'Аренда автовышки 15м',
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
  },
  'avtovyshka-16m': {
    name: 'Автовышка-платформа 16м',
    fullName: ['Автовышка-платформа', '16 метров'],
    path: '/avtopark/avtovyshka-16m',
    title: 'Аренда автовышки-платформы 16м',
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
  },
  'avtovyshka-17m': {
    name: 'Автовышка 17м',
    fullName: ['Автовышка', '17 метров'],
    path: '/avtopark/avtovyshka-17m',
    title: 'Аренда автовышки 17м',
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
  },
  'avtovyshka-21m': {
    name: 'Автовышка-платформа 21м',
    fullName: ['Автовышка-платформа', '21 метр'],
    path: '/avtopark/avtovyshka-21m',
    title: 'Аренда автовышки-платформы 21м',
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
  },
  'avtovyshka-24m': {
    name: 'Автовышка 24м',
    fullName: ['Автовышка', '24 метра'],
    path: '/avtopark/avtovyshka-24m',
    title: 'Аренда автовышки 24м',
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
  },
  'avtovyshka-29m': {
    name: 'Автовышка 29м',
    fullName: ['Автовышка', '29 метров'],
    path: '/avtopark/avtovyshka-29m',
    title: 'Аренда автовышки 29м',
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
  },
  'avtovyshka-40m': {
    name: 'Автовышка 40м',
    fullName: ['Автовышка', '40 метров'],
    path: '/avtopark/avtovyshka-40m',
    title: 'Аренда автовышки 40м',
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
  },
  'avtovyshka-45m': {
    name: 'Автовышка 45м',
    fullName: ['Автовышка', '45 метров'],
    path: '/avtopark/avtovyshka-45m',
    title: 'Аренда автовышки 45м',
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
  },
  'avtovyshka-50m': {
    name: 'Автовышка 50м',
    fullName: ['Автовышка', '50 метров'],
    path: '/avtopark/avtovyshka-50m',
    title: 'Аренда автовышки 50м',
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
  },
  'avtokran-25t-ivanovets': {
    name: 'Автокран 25т Ивановец',
    fullName: ['Автокран Ивановец', '25 тонн'],
    path: '/avtopark/avtokran-25t-ivanovets',
    title: 'Аренда автокрана Ивановец 25т',
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
  },
  'avtokran-25t-kobelco': {
    name: 'Автокран 25т Kobelco',
    fullName: ['Автокран Kobelco', '25 тонн'],
    path: '/avtopark/avtokran-25t-kobelco',
    title: 'Аренда автокрана Kobelco 25т',
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
  },
};
