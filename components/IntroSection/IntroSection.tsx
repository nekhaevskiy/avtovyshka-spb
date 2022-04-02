import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { LinkAsButton } from '..';
import { contacts } from '../../data/contacts';
import { Vehicle, vehicles } from '../../data/vehicles';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import styles from './IntroSection.module.css';

const { phones, email } = contacts;

function Slide({ vehicle }: { vehicle: Vehicle }) {
  const { image, shortName, fullName, price, pagePath } = vehicle;
  return (
    <article className="relative h-80 w-full text-white" data-testid="slide">
      <div className="absolute -z-1 h-full w-full">
        <Image src={image} alt={shortName} layout="fill" objectFit="cover" />
      </div>
      <div className="flex h-full items-center justify-between bg-black bg-opacity-50 p-14">
        <div>
          <h2 className="mb-4 text-3xl font-bold">
            {fullName.map((part) => (
              <span className="block" key={part}>
                {part}
              </span>
            ))}
          </h2>
          <p className="mb-7 text-xl font-medium">
            {price.halfShift
              ? `от ${price.halfShift} ₽/полсмены`
              : `от ${price.fullShift} ₽/смена`}
          </p>
          <LinkAsButton href={pagePath}>Подробнее</LinkAsButton>
        </div>
        <div className="text-right">
          <a
            href={phones[0].link}
            className="mb-1 block text-lg"
            style={{ backgroundPosition: '1px 52%' }}
          >
            {phones[0].text[0]} <b>{phones[0].text[1]}</b> {phones[0].text[2]}
          </a>

          <a
            href={phones[1].link}
            className="mb-1 block text-lg"
            style={{ backgroundPosition: '1px 52%' }}
          >
            {phones[1].text}
          </a>

          <a
            href={email.link}
            className="block text-lg"
            style={{ backgroundPosition: '1px 52%' }}
          >
            {email.text}
          </a>
        </div>
      </div>
    </article>
  );
}

function IntroSection() {
  const windowWidth = useWindowWidth();

  return windowWidth && windowWidth >= 1024 ? (
    <div className="mx-auto max-w-6xl pb-9 xl:px-4" data-testid="intro-section">
      <Slider arrows={false} autoplay className={styles.carousel} dots>
        {Object.keys(vehicles).map((key) => (
          <Slide vehicle={vehicles[key]} key={key} />
        ))}
      </Slider>
    </div>
  ) : null;
}

export { IntroSection };
