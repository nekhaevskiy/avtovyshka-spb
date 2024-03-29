import Head from 'next/head';
import React from 'react';
import {
  AboutSection,
  ContactSection,
  FooterCopyright,
  FooterNavBar,
  HeaderContacts,
  HeaderNavBar,
  IntroSection,
  PhotoSection,
  ReviewSection,
  ServiceSection,
  VehicleSection,
} from '../components';
import { contacts } from '../data/contacts';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          Аренда автовышки и автокрана в Санкт-Петербурге и Ленинградской
          области - {contacts.companyName}
        </title>
        <meta
          name="description"
          content="Наша компания оказывает услуги по аренде автовышек и автокранов в Санкт-Петербурге и Ленинградской области"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <HeaderContacts />
        <HeaderNavBar />
      </header>

      <main>
        <IntroSection />
        <VehicleSection />
        <AboutSection />
        <ServiceSection />
        <PhotoSection />
        <ReviewSection />
        <ContactSection />
      </main>

      <footer className="bg-gray-900">
        <FooterNavBar />
        <FooterCopyright />
      </footer>
    </>
  );
}
