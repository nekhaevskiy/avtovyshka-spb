module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        email: "url('/images/email.svg')",
        phone: "url('/images/phone.svg')",
        quote: "url('/images/quote.svg')",
      }),
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
