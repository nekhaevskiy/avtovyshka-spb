import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { vehicles } from '../../data';
import logoPic from './logo.svg';
import styles from './NavBar.module.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const menuEl = React.useRef<HTMLDivElement | null>(null);
  const subMenuEl = React.useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = React.useState<number>();

  const menuHeight = menuOpen && menuEl.current?.scrollHeight ? menuEl.current.scrollHeight : 0;
  const subMenuHeight =
    subMenuOpen && subMenuEl.current?.scrollHeight ? subMenuEl.current.scrollHeight : 0;

  function updateWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return (
    <div
      className="md:flex relative md:items-center p-4 md:py-0 lg:mx-auto lg:max-w-6xl"
      data-testid="nav-bar"
    >
      <Link href="/">
        <a className="absolute md:relative -top-8 md:top-auto left-0 md:left-auto md:flex-shrink-0 w-20 md:w-32 h-8 md:h-16">
          <Image
            src={logoPic}
            alt="На главную"
            layout="fill"
            objectFit="contain"
            objectPosition="100%"
          />
        </a>
      </Link>

      <h1 className="md:flex-shrink-0 md:mx-4 md:w-60 text-3xl md:text-base md:leading-none text-center md:text-left text-red-500">
        Аренда автовышки и автокрана
        <span className="hidden sm:block text-xl md:text-base md:leading-none">
          в Санкт-Петербурге и Ленинградской области
        </span>
      </h1>

      <button
        type="button"
        className="md:hidden absolute -top-9 right-4 w-7 h-7 text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="sr-only">{menuOpen ? 'Закрыть меню' : 'Открыть меню'}</span>
        <span className={menuOpen ? styles.menuBtnOpened : styles.menuBtn} />
      </button>

      <nav
        className={menuOpen ? styles.menuOpened : styles.menu}
        ref={menuEl}
        style={windowWidth && windowWidth < 768 ? { height: menuHeight } : undefined}
      >
        <Link href="/">
          <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
            Главная
          </a>
        </Link>
        <div className={styles.subMenuWrapper}>
          {windowWidth && windowWidth < 768 ? (
            <Link href="/#car-fleet">
              <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
                Автопарк
              </a>
            </Link>
          ) : (
            <button
              type="button"
              className={subMenuOpen ? styles.menuItemExpanded : styles.menuItemCollapsed}
              onClick={() => setSubMenuOpen(!subMenuOpen)}
            >
              Автопарк
            </button>
          )}
          <div
            className={subMenuOpen ? styles.subMenuOpened : styles.subMenu}
            ref={subMenuEl}
            style={windowWidth && windowWidth >= 768 ? { height: subMenuHeight } : undefined}
            data-testid="sub-menu"
          >
            {vehicles.map((vehicle) => (
              <Link href={vehicle.path} key={vehicle.path}>
                <a className={styles.subMenuItem}>{vehicle.name}</a>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/#service">
          <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
            Услуги
          </a>
        </Link>
        <Link href="/#photo">
          <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
            Фото
          </a>
        </Link>
        <Link href="/#reviews">
          <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
            Отзывы
          </a>
        </Link>
        <Link href="/#contacts">
          <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
            Контакты
          </a>
        </Link>
      </nav>
    </div>
  );
}

export { NavBar };
