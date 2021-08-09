import Head from 'next/head';
import React from 'react';
import {
  Breadcrumbs,
  FooterCopyright,
  FooterNavBar,
  HeaderContacts,
  HeaderNavBar,
} from '../components';
import { contacts } from '../data/contacts';
import { vehicles } from '../data/vehicles';

export default function AWP13() {
  return (
    <>
      <Head>
        <title>Аренда автовышки 13м - {contacts.companyName}</title>
        <meta
          name="description"
          content="Аренда автовышки 13м - технические характеристики, подробное описание, фото и видео"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <HeaderContacts />
        <HeaderNavBar />
      </header>

      <main>
        <Breadcrumbs currentPage={vehicles[0].name} />
      </main>

      <footer className="bg-gray-900">
        <FooterNavBar />
        <FooterCopyright />
      </footer>
    </>
  );
}
