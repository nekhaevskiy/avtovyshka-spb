import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { LinkAsButton } from '..';
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
      className="w-full text-white bg-gray-500 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${vehicle.introCarouselImage})` }}
      data-testid="slide"
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
          <LinkAsButton href={vehicle.path}>Подробнее</LinkAsButton>
        </div>
        <div className="text-right">
          <a
            href={contacts[0].link}
            className="block mb-1 text-lg"
            style={{ backgroundPosition: '1px 52%' }}
          >
            {contacts[0].text[0]} <b>{contacts[0].text[1]}</b>{' '}
            {contacts[0].text[2]}
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

function IntroCarousel() {
  const windowWidth = useWindowWidth();

  return windowWidth && windowWidth >= 1024 ? (
    <div
      className="mx-auto pb-9 max-w-6xl xl:px-4"
      data-testid="intro-carousel"
    >
      <Slider
        arrows={false}
        autoplay
        className={styles.carousel}
        dots
        lazyLoad="ondemand"
      >
        {vehicles.map((vehicle) => (
          <Slide vehicle={vehicle} key={vehicle.path} />
        ))}
      </Slider>
    </div>
  ) : null;
}

export { IntroCarousel };
