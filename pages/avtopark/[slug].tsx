import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import {
  Breadcrumbs,
  FooterCopyright,
  FooterNavBar,
  HeaderContacts,
  HeaderNavBar,
  VehicleSpecs,
} from '../../components';
import { contacts } from '../../data/contacts';
import { Vehicle, vehicles } from '../../data/vehicles';

interface Props {
  vehicle: Vehicle;
}

export default function VehiclePage({ vehicle }: Props) {
  const { pageTitle, shortName, fullName, generalPhotos, shortSpecs, price } =
    vehicle;
  return (
    <>
      <Head>
        <title>
          {pageTitle} - {contacts.companyName}
        </title>
        <meta
          name="description"
          content={`${pageTitle} - технические характеристики, подробное описание, фото и видео`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <HeaderContacts />
        <HeaderNavBar />
      </header>

      <main>
        <Breadcrumbs currentPage={shortName} />

        <h2 className="mb-4 mx-auto px-4 max-w-6xl text-center text-2xl font-medium sm:text-3xl">
          {fullName.join(' ')}
        </h2>

        <div className="mb-6 mx-auto px-4 max-w-6xl md:flex">
          <div
            className="mb-4 md:mr-1 md:w-1/2 lg:mr-2 xl:mr-4"
            data-testid="general-photos"
          >
            <ReactImageGallery items={generalPhotos} lazyLoad />
          </div>

          <div
            className="mx-auto max-w-md md:ml-1 md:mr-0 md:w-1/2 md:max-w-none xl:ml-4"
            data-testid="short-specs"
          >
            <VehicleSpecs specs={shortSpecs} price={price} />
          </div>
        </div>
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
