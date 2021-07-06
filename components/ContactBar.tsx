function ContactBar() {
  return (
    <>
      <div
        className="flex md:fixed md:top-0 z-10 justify-center items-center pl-20 pr-11 sm:px-0 w-full h-10 border-b border-gray-100 bg-white"
        data-testid="contact-bar"
      >
        <a
          href="tel:+79910009111"
          className="pl-5 py-1 sm:mx-4 font-medium text-base whitespace-nowrap bg-no-repeat bg-phone"
          style={{ backgroundPosition: '1px 52%' }}
        >
          +7 <b className="text-red-500">(991)</b> 000-91-11
        </a>

        <a
          href="tel:+78123515151"
          className="hidden md:block pl-5 py-1 mx-4 font-medium text-base whitespace-nowrap bg-no-repeat bg-phone"
          style={{ backgroundPosition: '1px 52%' }}
        >
          +7 (812) 351-51-51
        </a>

        <a
          href="mailto:suedima@rambler.ru"
          className="hidden sm:block pl-5 py-1 mx-4 font-medium text-base whitespace-nowrap bg-no-repeat bg-email"
          style={{ backgroundPosition: '1px 52%' }}
        >
          suedima@rambler.ru
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
