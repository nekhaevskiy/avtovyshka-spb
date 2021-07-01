module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        email: "url('/icons/email.svg')",
        phone: "url('/icons/phone.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
