import Link from 'next/link';

function FooterNavBar() {
  return (
    <div
      className="mx-auto max-w-6xl text-center border-b border-gray-500"
      data-testid="footer-nav-bar"
    >
      <Link href="/">
        <a className="inline-block align-middle mx-1 p-3 text-gray-300 text-lg">
          Главная
        </a>
      </Link>

      <Link href="/#vehicle-section">
        <a className="inline-block align-middle mx-1 p-3 text-gray-300 text-lg">
          Автопарк
        </a>
      </Link>

      <Link href="/#service-section">
        <a className="inline-block align-middle mx-1 p-3 text-gray-300 text-lg">
          Услуги
        </a>
      </Link>

      <Link href="/#photo-section">
        <a className="inline-block align-middle mx-1 p-3 text-gray-300 text-lg">
          Фото
        </a>
      </Link>

      <Link href="/#review-section">
        <a className="inline-block align-middle mx-1 p-3 text-gray-300 text-lg">
          Отзывы
        </a>
      </Link>

      <Link href="/#contact-section">
        <a className="inline-block align-middle mx-1 p-3 text-gray-300 text-lg">
          Контакты
        </a>
      </Link>
    </div>
  );
}

export { FooterNavBar };
