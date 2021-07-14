interface Contact {
  link: string;
  text: string | string[];
}

export const contacts: Contact[] = [
  {
    link: 'tel:+79910009111',
    text: ['+7', '(991)', '000-91-11'],
  },
  {
    link: 'tel:+78123515151',
    text: '+7 (812) 351-51-51',
  },
  {
    link: 'mailto:suedima@rambler.ru',
    text: 'suedima@rambler.ru',
  },
];
