import { contacts } from '../data/contacts';

function ContactBar() {
  return (
    <>
      <div
        className="flex md:fixed md:top-0 z-10 justify-center items-center pl-20 pr-11 sm:px-0 w-full h-10 border-b border-gray-100 bg-white"
        data-testid="contact-bar"
      >
        <a
          href={contacts[0].link}
          className="pl-5 py-1 sm:mx-4 font-medium text-base whitespace-nowrap bg-no-repeat bg-phone"
          style={{ backgroundPosition: '1px 52%' }}
        >
          {contacts[0].text[0]} <b className="text-red-500">{contacts[0].text[1]}</b>{' '}
          {contacts[0].text[2]}
        </a>

        <a
          href={contacts[1].link}
          className="hidden md:block pl-5 py-1 mx-4 font-medium text-base whitespace-nowrap bg-no-repeat bg-phone"
          style={{ backgroundPosition: '1px 52%' }}
        >
          {contacts[1].text}
        </a>

        <a
          href={contacts[2].link}
          className="hidden sm:block pl-5 py-1 mx-4 font-medium text-base whitespace-nowrap bg-no-repeat bg-email"
          style={{ backgroundPosition: '1px 52%' }}
        >
          {contacts[2].text}
        </a>

        <span className="hidden lg:block pl-5 py-1 mx-4 font-medium text-base whitespace-nowrap">
          Работаем круглосуточно
        </span>
      </div>

      {/* The next div is needed to compensate height of ContactBar when it's fixed (above md) */}
      <div className="hidden md:block h-10" />
    </>
  );
}

export { ContactBar };
