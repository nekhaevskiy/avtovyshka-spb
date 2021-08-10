import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import {
  Breadcrumbs,
  FooterCopyright,
  FooterNavBar,
  HeaderContacts,
  HeaderNavBar,
  VehiclePhoto,
} from '../../components';
import { contacts } from '../../data/contacts';
import { Vehicle, vehicles } from '../../data/vehicles';

interface Props {
  vehicle: Vehicle;
}

export default function VehiclePage({ vehicle }: Props) {
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
        <VehiclePhoto items={vehicle.vehiclePhoto!} />
      </main>

      <footer className="bg-gray-900">
        <FooterNavBar />
        <FooterCopyright />
      </footer>
    </>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params || typeof params.slug !== 'string' || !vehicles[params.slug]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicle: vehicles[params.slug],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(vehicles).map((key) => ({ params: { slug: key } })),
    fallback: false,
  };
}
