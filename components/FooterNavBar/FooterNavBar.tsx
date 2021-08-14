import Link from 'next/link';

function FooterNavBar() {
  return (
    <div className="mx-auto px-4 max-w-6xl" data-testid="footer-nav-bar">
      <div className="text-center border-b border-gray-500">
        <Link href="/">
          <a className="inline-block align-middle mx-1 p-2 text-gray-300 sm:p-3 sm:text-lg">
            Главная
          </a>
        </Link>

        <Link href="/#vehicle-section">
          <a className="inline-block align-middle mx-1 p-2 text-gray-300 sm:p-3 sm:text-lg">
            Автопарк
          </a>
        </Link>

        <Link href="/#service-section">
          <a className="inline-block align-middle mx-1 p-2 text-gray-300 sm:p-3 sm:text-lg">
            Услуги
          </a>
        </Link>

        <Link href="/#photo-section">
          <a className="inline-block align-middle mx-1 p-2 text-gray-300 sm:p-3 sm:text-lg">
            Фото
          </a>
        </Link>

        <Link href="/#review-section">
          <a className="inline-block align-middle mx-1 p-2 text-gray-300 sm:p-3 sm:text-lg">
            Отзывы
          </a>
        </Link>

        <Link href="/#contact-section">
          <a className="inline-block align-middle mx-1 p-2 text-gray-300 sm:p-3 sm:text-lg">
            Контакты
          </a>
        </Link>
      </div>
    </div>
  );
}

export { FooterNavBar };
