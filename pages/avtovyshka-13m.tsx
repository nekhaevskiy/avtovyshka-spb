import Head from 'next/head';
import React from 'react';
import {
  FooterCopyright,
  FooterNavBar,
  HeaderContacts,
  HeaderNavBar,
} from '../components';
import { contacts } from '../data/contacts';

export default function AWP13() {
  return (
    <>
      <Head>
        <title>Аренда автовышки-платформы 13м - {contacts.companyName}</title>
        <meta
          name="description"
          content="Аренда автовышки-платформы 13м - технические характеристики, подробное описание, фото и видео"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <HeaderContacts />
        <HeaderNavBar />
      </header>

      <main>{/* here */}</main>

      <footer className="bg-gray-900">
        <FooterNavBar />
        <FooterCopyright />
      </footer>
    </>
  );
}
