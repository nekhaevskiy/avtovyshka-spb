import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import {
  Breadcrumbs,
  FooterCopyright,
  FooterNavBar,
  HeaderContacts,
  HeaderNavBar,
} from '../../components';
import { contacts } from '../../data/contacts';
import { vehicles } from '../../data/vehicles';

export default function VehiclePage() {
  const router = useRouter();
  const { slug } = router.query;

  if (typeof slug !== 'string' || !vehicles[slug]) {
    return <ErrorPage statusCode={404} />;
  }

  const vehicle = vehicles[slug];

  return (
    <>
      <Head>
        <title>
          {vehicle.title} - {contacts.companyName}
        </title>
        <meta
          name="description"
          content={`${vehicle.title} - технические характеристики, подробное описание, фото и видео`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <HeaderContacts />
        <HeaderNavBar />
      </header>

      <main>
        <Breadcrumbs currentPage={vehicle.name} />
      </main>

      <footer className="bg-gray-900">
        <FooterNavBar />
        <FooterCopyright />
      </footer>
    </>
  );
}
