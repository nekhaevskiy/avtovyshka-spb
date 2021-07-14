import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Link from 'next/link';
import React from 'react';
import { contacts } from '../../data/contacts';
import { Vehicle, vehicles } from '../../data/vehicles';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import styles from './IntroCarousel.module.css';

interface Props {
  vehicle: Vehicle;
}

function Slide({ vehicle }: Props) {
  return (
    <article
      className="w-full text-white bg-gray-500 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${vehicle.introCarouselPath})` }}
      data-testid={vehicle.path}
    >
      <div className="flex justify-between p-14 bg-black bg-opacity-50">
        <div>
          <h2 className="mb-4 text-3xl font-bold">
            {vehicle.fullName.map((part) => (
              <span className="block" key={part}>
                {part}
              </span>
            ))}
          </h2>
          <p className="mb-7 text-xl font-medium">
            {vehicle.priceHalfShift
              ? `от ${vehicle.priceHalfShift} ₽/полсмены`
              : `от ${vehicle.priceFullShift} ₽/смена`}
          </p>
          <Link href={vehicle.path}>
            <a className="inline-block px-4 py-2 font-medium text-white align-middle whitespace-nowrap bg-red-500 hover:bg-red-700 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
              Подробнее
            </a>
          </Link>
        </div>
        <div className="text-right">
          <a
            href={contacts[0].link}
            className="block mb-1 text-lg"
            style={{ backgroundPosition: '1px 52%' }}
          >
            {contacts[0].text[0]} <b>{contacts[0].text[1]}</b> {contacts[0].text[2]}
          </a>

          <a
            href={contacts[1].link}
            className="block mb-1 text-lg"
            style={{ backgroundPosition: '1px 52%' }}
          >
            {contacts[1].text}
          </a>

          <a
            href={contacts[2].link}
            className="block text-lg"
            style={{ backgroundPosition: '1px 52%' }}
          >
            {contacts[2].text}
          </a>
        </div>
      </div>
    </article>
  );
}

const slides = vehicles.map((vehicle) => <Slide vehicle={vehicle} key={vehicle.path} />);

function IntroCarousel() {
  const [value, setValue] = React.useState(0);
  const windowWidth = useWindowWidth();

  function onChange(value: number) {
    setValue(value);
  }

  return windowWidth && windowWidth >= 1024 ? (
    <div className="xl:px-4 mx-auto max-w-6xl" data-testid="intro-carousel">
      <Carousel value={value} onChange={onChange} slides={slides} />
      <Dots className={styles.dots} value={value} onChange={onChange} number={slides.length} />
    </div>
  ) : null;
}

export { IntroCarousel };
