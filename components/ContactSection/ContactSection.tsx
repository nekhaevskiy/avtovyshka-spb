import dynamic from 'next/dynamic';
import React from 'react';
import useInView from 'react-cool-inview';
import { ContactForm, ContactItems, SectionHeading } from '..';

const ContactMap = dynamic(() => import('../ContactMap/ContactMap'));

function ContactSection() {
  // We use `react-cool-inview` and `next/dynamic` due to performance reasons
  const { observe, inView } = useInView({
    rootMargin: '50px',
    unobserveOnEnter: true,
  });

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-8 text-gray-800"
      data-testid="contact-section"
      id="contact-section"
    >
      <SectionHeading heading="Контакты" />

      <div ref={observe}>{inView && <ContactMap />}</div>

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
