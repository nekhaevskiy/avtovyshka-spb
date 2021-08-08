import Link from 'next/link';

function FooterNavBar() {
  return (
    <div>
      <Link href="/">
        <a className="">Главная</a>
      </Link>
    </div>
  );
}

export { FooterNavBar };
