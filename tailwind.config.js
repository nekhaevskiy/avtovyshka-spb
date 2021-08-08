module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        email: "url('/icons/email.svg')",
        phone: "url('/icons/phone.svg')",
        quote: "url('/icons/quote.svg')",
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
