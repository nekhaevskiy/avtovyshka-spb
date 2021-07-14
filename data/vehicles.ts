export interface Vehicle {
  name: string;
  fullName: string[];
  path: string;
  priceHalfShift?: number;
  priceFullShift: number;
  priceDelivery: number;
  introCarouselPath: string;
}

export const vehicles: Vehicle[] = [
  {
    name: 'Автовышка-платформа 13м',
    fullName: ['Автовышка-платформа', '13 метров'],
    path: '/avtovyshka-13m',
    priceHalfShift: 7000,
    priceFullShift: 9000,
    priceDelivery: 50,
    introCarouselPath: '/images/intro-carousel/avtovyshka-13m.jpg',
  },
  {
    name: 'Автовышка 15м',
    fullName: ['Автовышка', '15 метров'],
    path: '/avtovyshka-15m',
    priceHalfShift: 7000,
    priceFullShift: 9000,
    priceDelivery: 50,
    introCarouselPath: '/images/intro-carousel/avtovyshka-15m.jpg',
  },
  {
    name: 'Автовышка-платформа 16м',
    fullName: ['Автовышка-платформа', '16 метров'],
    path: '/avtovyshka-16m',
    priceHalfShift: 8000,
    priceFullShift: 10000,
    priceDelivery: 50,
    introCarouselPath: '/images/intro-carousel/avtovyshka-16m.jpg',
  },
  {
    name: 'Автовышка 17м',
    fullName: ['Автовышка', '17 метров'],
    path: '/avtovyshka-17m',
    priceHalfShift: 7000,
    priceFullShift: 9000,
    priceDelivery: 50,
    introCarouselPath: '/images/intro-carousel/avtovyshka-17m.jpg',
  },
  {
    name: 'Автовышка-платформа 21м',
    fullName: ['Автовышка-платформа', '21 метр'],
    path: '/avtovyshka-21m',
    priceHalfShift: 11000,
    priceFullShift: 13000,
    priceDelivery: 50,
    introCarouselPath: '/images/intro-carousel/avtovyshka-21m.jpg',
  },
  {
    name: 'Автовышка 24м',
    fullName: ['Автовышка', '24 метра'],
    path: '/avtovyshka-24m',
    priceHalfShift: 10000,
    priceFullShift: 12000,
    priceDelivery: 50,
    introCarouselPath: '/images/intro-carousel/avtovyshka-24m.jpg',
  },
  {
    name: 'Автовышка 29м',
    fullName: ['Автовышка', '29 метров'],
    path: '/avtovyshka-29m',
    priceHalfShift: 9000,
    priceFullShift: 13000,
    priceDelivery: 45,
    introCarouselPath: '/images/intro-carousel/avtovyshka-29m.jpg',
  },
  {
    name: 'Автовышка 40м',
    fullName: ['Автовышка', '40 метров'],
    path: '/avtovyshka-40m',
    priceFullShift: 22000,
    priceDelivery: 45,
    introCarouselPath: '/images/intro-carousel/avtovyshka-40m.jpg',
  },
  {
    name: 'Автовышка 45м',
    fullName: ['Автовышка', '45 метров'],
    path: '/avtovyshka-45m',
    priceFullShift: 25000,
    priceDelivery: 45,
    introCarouselPath: '/images/intro-carousel/avtovyshka-45m.jpg',
  },
  {
    name: 'Автовышка 50м',
    fullName: ['Автовышка', '50 метров'],
    path: '/avtovyshka-50m',
    priceFullShift: 28000,
    priceDelivery: 45,
    introCarouselPath: '/images/intro-carousel/avtovyshka-50m.jpg',
  },
  {
    name: 'Автокран 25т Ивановец',
    fullName: ['Автокран Ивановец', '25 тонн'],
    path: '/avtokran-25t-ivanovets',
    priceHalfShift: 8000,
    priceFullShift: 14000,
    priceDelivery: 45,
    introCarouselPath: '/images/intro-carousel/avtokran-25t-ivanovets.jpg',
  },
  {
    name: 'Автокран 25т Kobelco',
    fullName: ['Автокран Kobelco', '25 тонн'],
    path: '/avtokran-25t-kobelco',
    priceFullShift: 16000,
    priceDelivery: 45,
    introCarouselPath: '/images/intro-carousel/avtokran-25t-kobelco.jpg',
  },
];
