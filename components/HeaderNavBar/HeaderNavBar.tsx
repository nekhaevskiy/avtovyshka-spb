import Link from 'next/link';
import React from 'react';
import { vehicles } from '../../data/vehicles';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import styles from './HeaderNavBar.module.css';

function HeaderNavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const menuWrapperEl = React.useRef<HTMLDivElement | null>(null);
  const menuEl = React.useRef<HTMLDivElement | null>(null);
  const subMenuWrapperEl = React.useRef<HTMLDivElement | null>(null);
  const subMenuEl = React.useRef<HTMLDivElement | null>(null);
  const windowWidth = useWindowWidth();

  useOnClickOutside(menuWrapperEl, () => setMenuOpen(false));
  useOnClickOutside(subMenuWrapperEl, () => setSubMenuOpen(false));

  const menuHeight =
    menuOpen && menuEl.current?.scrollHeight ? menuEl.current.scrollHeight : 0;
  const subMenuHeight =
    subMenuOpen && subMenuEl.current?.scrollHeight
      ? subMenuEl.current.scrollHeight
      : 0;

  return (
    <div
      className="relative p-4 md:flex md:items-center md:py-0 lg:mx-auto lg:max-w-6xl"
      data-testid="header-nav-bar"
    >
      <Link href="/">
        <a className="absolute -top-8 left-0 h-8 w-20 md:relative md:left-auto md:top-auto md:h-16 md:w-32 md:flex-shrink-0">
          {/* Reasons: `/README.md#using-nextimage-for-svg-files` */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt="На главную"
            className="h-full object-contain object-bottom"
          />
        </a>
      </Link>

      <h1 className="text-center text-3xl text-red-500 md:mx-4 md:w-64 md:flex-shrink-0 md:text-left md:text-base md:leading-none">
        Аренда автовышки и автокрана
        <span className="hidden text-xl sm:block md:text-base md:leading-none">
          в Санкт-Петербурге и Ленинградской области
        </span>
      </h1>

      <div ref={menuWrapperEl} className="md:-mr-4 md:ml-auto">
        <button
          type="button"
          className="absolute -top-9 right-4 h-7 w-7 text-gray-800 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">
            {menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          </span>
          <span className={menuOpen ? styles.menuBtnOpened : styles.menuBtn} />
        </button>

        <nav
          className={menuOpen ? styles.menuOpened : styles.menu}
          ref={menuEl}
          style={
            windowWidth && windowWidth < 768
              ? { height: menuHeight }
              : undefined
          }
        >
          <Link href="/">
            <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
              Главная
            </a>
          </Link>
          <div className={styles.subMenuWrapper} ref={subMenuWrapperEl}>
            {windowWidth && windowWidth < 768 ? (
              <Link href="/#vehicle-section">
                <a
                  className={styles.menuItem}
                  onClick={() => setMenuOpen(false)}
                >
                  Автопарк
                </a>
              </Link>
            ) : (
              <button
                type="button"
                className={
                  subMenuOpen
                    ? styles.menuItemExpanded
                    : styles.menuItemCollapsed
                }
                onClick={() => setSubMenuOpen(!subMenuOpen)}
              >
                Автопарк
              </button>
            )}
            <div
              className={subMenuOpen ? styles.subMenuOpened : styles.subMenu}
              ref={subMenuEl}
              style={
                windowWidth && windowWidth >= 768
                  ? { height: subMenuHeight }
                  : undefined
              }
              data-testid="sub-menu"
            >
              {Object.keys(vehicles).map((key) => (
                <Link href={vehicles[key].pagePath} key={key}>
                  <a
                    className={styles.subMenuItem}
                    onClick={() => {
                      setMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    {vehicles[key].shortName}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#service-section">
            <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
              Услуги
            </a>
          </Link>
          <Link href="/#photo-section">
            <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
              Фото
            </a>
          </Link>
          <Link href="/#review-section">
            <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
              Отзывы
            </a>
          </Link>
          <Link href="/#contact-section">
            <a className={styles.menuItem} onClick={() => setMenuOpen(false)}>
              Контакты
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export { HeaderNavBar };
