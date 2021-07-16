interface Card {
  image: string;
  specs: [string, string][];
}

export interface Vehicle {
  name: string;
  fullName: string[];
  path: string;
  priceHalfShift?: number;
  priceFullShift: number;
  priceDelivery: number;
  introCarouselImage: string;
  vehicleCard: Card;
}

export const vehicles: Vehicle[] = [
  {
    name: 'Автовышка-платформа 13м',
    fullName: ['Автовышка-платформа', '13 метров'],
    path: '/avtovyshka-13m',
    priceHalfShift: 7000,
    priceFullShift: 9000,
    priceDelivery: 50,
    introCarouselImage: '/images/intro-carousel/avtovyshka-13m.jpg',
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
  {
    name: 'Автовышка 15м',
    fullName: ['Автовышка', '15 метров'],
    path: '/avtovyshka-15m',
    priceHalfShift: 7000,
    priceFullShift: 9000,
    priceDelivery: 50,
    introCarouselImage: '/images/intro-carousel/avtovyshka-15m.jpg',
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
  {
    name: 'Автовышка-платформа 16м',
    fullName: ['Автовышка-платформа', '16 метров'],
    path: '/avtovyshka-16m',
    priceHalfShift: 8000,
    priceFullShift: 10000,
    priceDelivery: 50,
    introCarouselImage: '/images/intro-carousel/avtovyshka-16m.jpg',
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
  {
    name: 'Автовышка 17м',
    fullName: ['Автовышка', '17 метров'],
    path: '/avtovyshka-17m',
    priceHalfShift: 7000,
    priceFullShift: 9000,
    priceDelivery: 50,
    introCarouselImage: '/images/intro-carousel/avtovyshka-17m.jpg',
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
  {
    name: 'Автовышка-платформа 21м',
    fullName: ['Автовышка-платформа', '21 метр'],
    path: '/avtovyshka-21m',
    priceHalfShift: 11000,
    priceFullShift: 13000,
    priceDelivery: 50,
    introCarouselImage: '/images/intro-carousel/avtovyshka-21m.jpg',
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
  {
    name: 'Автовышка 24м',
    fullName: ['Автовышка', '24 метра'],
    path: '/avtovyshka-24m',
    priceHalfShift: 10000,
    priceFullShift: 12000,
    priceDelivery: 50,
    introCarouselImage: '/images/intro-carousel/avtovyshka-24m.jpg',
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
  {
    name: 'Автовышка 29м',
    fullName: ['Автовышка', '29 метров'],
    path: '/avtovyshka-29m',
    priceHalfShift: 9000,
    priceFullShift: 13000,
    priceDelivery: 45,
    introCarouselImage: '/images/intro-carousel/avtovyshka-29m.jpg',
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
  {
    name: 'Автовышка 40м',
    fullName: ['Автовышка', '40 метров'],
    path: '/avtovyshka-40m',
    priceFullShift: 22000,
    priceDelivery: 45,
    introCarouselImage: '/images/intro-carousel/avtovyshka-40m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-40m.jpg',
      specs: [
        ['Высота подъема', '40 м'],
        ['Вылет максимальный', '20 м'],
        ['Грузоподъемность люльки', '300 кг'],
      ],
    },
  },
  {
    name: 'Автовышка 45м',
    fullName: ['Автовышка', '45 метров'],
    path: '/avtovyshka-45m',
    priceFullShift: 25000,
    priceDelivery: 45,
    introCarouselImage: '/images/intro-carousel/avtovyshka-45m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-45m.jpg',
      specs: [
        ['Высота подъема', '45 м'],
        ['Вылет максимальный', '25 м'],
        ['Грузоподъемность люльки', '300 кг'],
      ],
    },
  },
  {
    name: 'Автовышка 50м',
    fullName: ['Автовышка', '50 метров'],
    path: '/avtovyshka-50m',
    priceFullShift: 28000,
    priceDelivery: 45,
    introCarouselImage: '/images/intro-carousel/avtovyshka-50m.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtovyshka-50m.jpg',
      specs: [
        ['Высота подъема', '50 м'],
        ['Вылет максимальный', '30 м'],
        ['Грузоподъемность люльки', '300 кг'],
      ],
    },
  },
  {
    name: 'Автокран 25т Ивановец',
    fullName: ['Автокран Ивановец', '25 тонн'],
    path: '/avtokran-25t-ivanovets',
    priceHalfShift: 8000,
    priceFullShift: 14000,
    priceDelivery: 45,
    introCarouselImage: '/images/intro-carousel/avtokran-25t-ivanovets.jpg',
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
  {
    name: 'Автокран 25т Kobelco',
    fullName: ['Автокран Kobelco', '25 тонн'],
    path: '/avtokran-25t-kobelco',
    priceFullShift: 16000,
    priceDelivery: 45,
    introCarouselImage: '/images/intro-carousel/avtokran-25t-kobelco.jpg',
    vehicleCard: {
      image: '/images/vehicle-card/avtokran-25t-kobelco.jpg',
      specs: [
        ['Грузоподъемность', '25 т'],
        ['Высота подъема', '42 м'],
        ['Вылет максимальный', '30 м'],
      ],
    },
  },
];
