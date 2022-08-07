import { contacts } from '../../data/contacts';

const { phones, email, companyName, address } = contacts;

function ContactItems() {
  return (
    <>
      <h3 className="text-lg font-medium">Телефон</h3>
      <p>
        <a href={phones[0].link} className="text-red-500">
          {phones[0].text[0]} <b>{phones[0].text[1]}</b> {phones[0].text[2]}
        </a>
      </p>

      <h3 className="text-lg font-medium">Email</h3>
      <p className="mb-4">
        <a href={email.link} className="text-red-500">
          {email.text}
        </a>
      </p>

      <h3 className="text-lg font-medium">Адрес</h3>
      <p>{companyName}</p>
      <p>{address[0]}</p>
      <p>{address[1]}</p>
    </>
  );
}

export { ContactItems };
