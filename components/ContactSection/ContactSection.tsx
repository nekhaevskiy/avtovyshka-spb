import { ContactForm, ContactItems, ContactMap, SectionHeading } from '..';

function ContactSection() {
  return (
    <section
      className="mx-auto px-4 py-8 max-w-6xl text-gray-800"
      data-testid="contacts"
      id="contacts"
    >
      <SectionHeading heading="Контакты" />

      <ContactMap />

      <div className="mb-4">
        <ContactItems />
      </div>

      <ContactForm />
    </section>
  );
}

export { ContactSection };
