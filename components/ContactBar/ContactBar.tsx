import Image from 'next/image';
import Link from 'next/link';
import logoPic from './cherry-picker.svg';

function ContactBar() {
  return (
    <div
      className="flex md:fixed justify-center px-20 w-full bg-white border-b border-gray-100"
      data-testid="contact-bar"
    >
      <Link href="/">
        <a className="md:hidden absolute top-2 left-0 w-20 h-8">
          <Image
            src={logoPic}
            alt="На главную"
            priority
            layout="fill"
            objectFit="contain"
            objectPosition="100%"
          />
        </a>
      </Link>

      <a
        href="tel:+79910009111"
        className="pl-5 py-2 sm:mx-4 font-medium text-base bg-no-repeat bg-phone"
        style={{ backgroundPosition: '1px 52%' }}
        data-testid="main-phone"
      >
        +7 <b className="text-red-500">(991)</b> 000-91-11
      </a>

      <a
        href="tel:+78123515151"
        className="hidden md:block pl-5 py-2 mx-4 font-medium text-base bg-no-repeat bg-phone"
        style={{ backgroundPosition: '1px 52%' }}
      >
        +7 (812) 351-51-51
      </a>

      <a
        href="mailto:suedima@rambler.ru"
        className="hidden sm:block pl-5 py-2 mx-4 font-medium text-base bg-no-repeat bg-email"
        style={{ backgroundPosition: '1px 52%' }}
      >
        suedima@rambler.ru
      </a>

      <span className="hidden lg:block pl-5 py-2 mx-4 font-medium text-base">
        Работаем круглосуточно
      </span>
    </div>
  );
}

export { ContactBar };
