import { contacts } from '../../data/contacts';

function FooterCopyright() {
  return (
    <div
      className="pb-5 pt-4 text-center text-sm text-gray-500"
      data-testid="footer-copyright"
    >{`2016-${new Date().getFullYear()} © ${contacts.companyName}`}</div>
  );
}

export { FooterCopyright };
