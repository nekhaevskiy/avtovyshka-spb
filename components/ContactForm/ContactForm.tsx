function ContactForm() {
  return (
    <form action="/send.php" method="post">
      <div className="mb-4">
        <label htmlFor="inputMessage" className="block text-lg font-medium">
          Сообщение*
        </label>
        <textarea
          className="block mt-1 w-full border-gray-300 focus:border-indigo-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          id="inputMessage"
          name="message"
          placeholder="Введите текст сообщения"
          required
          rows={9}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="inputName" className="block text-lg font-medium">
          Фамилия Имя Отчество*
        </label>
        <input
          className="block mt-1 w-full border-gray-300 focus:border-indigo-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          id="inputName"
          name="name"
          placeholder="Ваше имя"
          required
          type="text"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="inputPhone" className="block text-lg font-medium">
          Контактный телефон*
        </label>
        <input
          className="block mt-1 w-full border-gray-300 focus:border-indigo-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          id="inputPhone"
          name="phone"
          pattern="8-[0,9]{3}-[0,9]{3}-[0,9]{2}-[0,9]{2}"
          placeholder="8-___-___-__-__"
          required
          type="tel"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="inputEmail" className="block text-lg font-medium">
          Email
        </label>
        <input
          className="block mt-1 w-full border-gray-300 focus:border-indigo-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          id="inputEmail"
          name="email"
          placeholder="Ваш Email"
          type="email"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 text-white whitespace-nowrap font-medium bg-red-500 hover:bg-red-700 rounded focus:outline-none shadow-md focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Отправить
        </button>
      </div>
    </form>
  );
}

export { ContactForm };
