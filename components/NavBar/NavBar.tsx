import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { vehicles } from '../../data';
import logoPic from './logo.svg';
import styles from './NavBar.module.css';

function NavBar() {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  return (
    <div className="relative p-4" data-testid="nav-bar">
      <Link href="/">
        <a className="absolute -top-8 left-0 w-20 h-8">
          <Image
            src={logoPic}
            alt="На главную"
            layout="fill"
            objectFit="contain"
            objectPosition="100%"
          />
        </a>
      </Link>

      <h1 className="text-3xl text-center text-red-500">
        Аренда автовышки и автокрана
        <span className="hidden sm:block text-xl">в Санкт-Петербурге и Ленинградской области</span>
      </h1>

      <button
        type="button"
        className="absolute -top-9 right-4 w-7 h-7 text-gray-800"
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        <span className="sr-only">{isMenuOpened ? 'Закрыть меню' : 'Открыть меню'}</span>
        <span className={isMenuOpened ? styles.menuBtnOpened : styles.menuBtn} />
      </button>

      <nav className="hidden">
        <Link href="/">Главная</Link>
        <button type="button">Автопарк</button>
        <div className="sub-menu">
          {vehicles.map((vehicle) => (
            <Link href={vehicle.path} key={vehicle.path}>
              {vehicle.name}
            </Link>
          ))}
        </div>
        <Link href="/#service">Услуги</Link>
        <Link href="/#photo">Фото</Link>
        <Link href="/#reviews">Отзывы</Link>
        <Link href="/#contacts">Контакты</Link>
      </nav>
    </div>
  );
}

export { NavBar };
