import { ContactForm, ContactItems, ContactMap, SectionHeading } from '..';

function ContactSection() {
  return (
    <section
      className="mx-auto px-4 py-8 max-w-6xl text-gray-800"
      data-testid="contact-section"
      id="contact-section"
    >
      <SectionHeading heading="Контакты" />

      <ContactMap />

      <div className="sm:flex">
        <div className="mb-4 sm:mb-0 sm:mr-2 sm:w-1/2 lg:w-1/4">
          <ContactItems />
        </div>

        <div className="sm:ml-2 sm:w-1/2 lg:w-3/4">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export { ContactSection };
