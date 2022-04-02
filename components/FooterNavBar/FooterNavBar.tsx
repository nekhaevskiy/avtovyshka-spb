import Link from 'next/link';

function FooterNavBar() {
  return (
    <div className="mx-auto max-w-6xl px-4" data-testid="footer-nav-bar">
      <div className="border-b border-gray-500 text-center">
        <Link href="/">
          <a className="mx-1 inline-block p-2 align-middle text-gray-300 sm:p-3 sm:text-lg">
            Главная
          </a>
        </Link>

        <Link href="/#vehicle-section">
          <a className="mx-1 inline-block p-2 align-middle text-gray-300 sm:p-3 sm:text-lg">
            Автопарк
          </a>
        </Link>

        <Link href="/#service-section">
          <a className="mx-1 inline-block p-2 align-middle text-gray-300 sm:p-3 sm:text-lg">
            Услуги
          </a>
        </Link>

        <Link href="/#photo-section">
          <a className="mx-1 inline-block p-2 align-middle text-gray-300 sm:p-3 sm:text-lg">
            Фото
          </a>
        </Link>

        <Link href="/#review-section">
          <a className="mx-1 inline-block p-2 align-middle text-gray-300 sm:p-3 sm:text-lg">
            Отзывы
          </a>
        </Link>

        <Link href="/#contact-section">
          <a className="mx-1 inline-block p-2 align-middle text-gray-300 sm:p-3 sm:text-lg">
            Контакты
          </a>
        </Link>
      </div>
    </div>
  );
}

export { FooterNavBar };
