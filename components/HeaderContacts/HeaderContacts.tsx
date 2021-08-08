import { contacts } from '../../data/contacts';

const { phones, email } = contacts;

function HeaderContacts() {
  return (
    <>
      <div
        className="z-10 flex items-center justify-center pl-20 pr-11 w-full h-10 bg-white border-b border-gray-300 sm:px-0 md:fixed md:top-0"
        data-testid="header-contacts"
      >
        <a
          href={phones[0].link}
          className="pl-5 py-1 whitespace-nowrap text-base font-medium bg-phone bg-no-repeat sm:mx-4"
          style={{ backgroundPosition: '1px 52%' }}
        >
          {phones[0].text[0]}{' '}
          <b className="text-red-500">{phones[0].text[1]}</b>{' '}
          {phones[0].text[2]}
        </a>

        <a
          href={phones[1].link}
          className="hidden mx-4 pl-5 py-1 whitespace-nowrap text-base font-medium bg-phone bg-no-repeat md:block"
          style={{ backgroundPosition: '1px 52%' }}
        >
          {phones[1].text}
        </a>

        <a
          href={email.link}
          className="hidden mx-4 pl-5 py-1 whitespace-nowrap text-base font-medium bg-email bg-no-repeat sm:block"
          style={{ backgroundPosition: '1px 52%' }}
        >
          {email.text}
        </a>

        <span className="hidden mx-4 pl-5 py-1 whitespace-nowrap text-base font-medium lg:block">
          Работаем круглосуточно
        </span>
      </div>

      {/* The next div is needed to compensate height of HeaderContacts when it's fixed (above md) */}
      <div className="hidden h-10 md:block" />
    </>
  );
}

export { HeaderContacts };
