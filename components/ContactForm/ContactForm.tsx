import emailjs from 'emailjs-com';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

emailjs.init(USER_ID);

function ContactForm() {
  const [sendingForm, setSendingForm] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendingForm(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, USER_ID)
      .then(
        (result) => {
          toast.success('Ваше сообщение отправлено', { duration: 3000 });
          (e.target as HTMLFormElement).reset();
          setSendingForm(false);
        },
        (error) => {
          toast.error(
            'Сообщение не удалось отправить. Пожалуйста, попробуйте еще раз.'
          );
          setSendingForm(false);
          console.log(`Sending contact message error: ${error.text}`);
        }
      );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="lg:mb-6 lg:flex">
        <div className="mb-4 lg:mb-0 lg:mr-2 lg:w-2/3">
          <label
            htmlFor="contact-message"
            className="block text-lg font-medium"
          >
            Сообщение*
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="contact-message"
            name="user_message"
            placeholder="Текст сообщения"
            required
            rows={9}
          />
        </div>

        <div className="lg:ml-2 lg:w-1/3">
          <div className="mb-4 lg:mb-5">
            <label htmlFor="contact-name" className="block text-lg font-medium">
              Фамилия Имя Отчество*
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              id="contact-name"
              name="user_name"
              placeholder="Ваше имя"
              required
              type="text"
            />
          </div>

          <div className="mb-4 lg:mb-6">
            <label
              htmlFor="contact-phone"
              className="block text-lg font-medium"
            >
              Контактный телефон*
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              id="contact-phone"
              name="user_phone"
              placeholder="Ваш телефон"
              required
              type="tel"
            />
          </div>

          <div className="mb-6 lg:mb-0">
            <label
              htmlFor="contact-email"
              className="block text-lg font-medium"
            >
              Email
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              id="contact-email"
              name="user_email"
              placeholder="Ваш email"
              type="email"
            />
          </div>
        </div>
      </div>

      <div className="mb-6 text-center">
        <button
          type="submit"
          disabled={sendingForm}
          className={`whitespace-nowrap rounded bg-red-500 px-4 py-2 font-medium text-white shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 disabled:bg-gray-500`}
        >
          Отправить
        </button>
      </div>

      <div className="border-t border-gray-300 pt-1 text-xs">
        Поля, отмеченные звездочкой (*), обязательны для заполнения
      </div>

      <Toaster />
    </form>
  );
}

export { ContactForm };
