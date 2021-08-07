import { contacts } from '../../data/contacts';

const { phones, email, companyName, address } = contacts;

function ContactItems() {
  return (
    <dl>
      <dt className="text-lg font-medium">Телефоны</dt>
      <dd>
        <a href={phones[0].link} className="text-red-500">
          {phones[0].text[0]} <b>{phones[0].text[1]}</b> {phones[0].text[2]}
        </a>
      </dd>
      <dd className="mb-4">
        <a href={phones[1].link} className="text-red-500">
          {phones[1].text}
        </a>
      </dd>

      <dt className="text-lg font-medium">Email</dt>
      <dd className="mb-4">
        <a href={email.link} className="text-red-500">
          {email.text}
        </a>
      </dd>

      <dt className="text-lg font-medium">Адрес</dt>
      <dd>{companyName}</dd>
      <dd>
        {address[0]}
        <br />
        {address[1]}
      </dd>
    </dl>
  );
}

export { ContactItems };
