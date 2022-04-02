import { contacts } from '../../data/contacts';

const { phones, email } = contacts;

function HeaderContacts() {
  return (
    <>
      <div
        className="z-10 flex h-10 w-full items-center justify-center border-b border-gray-300 bg-white pl-20 pr-11 sm:px-0 md:fixed md:top-0"
        data-testid="header-contacts"
      >
        <a
          href={phones[0].link}
          className="whitespace-nowrap bg-phone bg-no-repeat py-1 pl-5 text-base font-medium sm:mx-4"
          style={{ backgroundPosition: '1px 52%' }}
        >
          {phones[0].text[0]}{' '}
          <b className="text-red-500">{phones[0].text[1]}</b>{' '}
          {phones[0].text[2]}
        </a>

        <a
          href={phones[1].link}
          className="mx-4 hidden whitespace-nowrap bg-phone bg-no-repeat py-1 pl-5 text-base font-medium md:block"
          style={{ backgroundPosition: '1px 52%' }}
        >
          {phones[1].text}
        </a>

        <a
          href={email.link}
          className="mx-4 hidden whitespace-nowrap bg-email bg-no-repeat py-1 pl-5 text-base font-medium sm:block"
          style={{ backgroundPosition: '1px 52%' }}
        >
          {email.text}
        </a>

        <span className="mx-4 hidden whitespace-nowrap py-1 pl-5 text-base font-medium lg:block">
          Работаем круглосуточно
        </span>
      </div>

      {/* The next div is needed to compensate height of HeaderContacts when it's fixed (above md) */}
      <div className="hidden h-10 md:block" />
    </>
  );
}

export { HeaderContacts };
