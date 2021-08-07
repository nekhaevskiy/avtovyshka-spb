import Head from 'next/head';
import React from 'react';
import {
  About,
  ContactBar,
  ContactSection,
  IntroCarousel,
  NavBar,
  PhotoGallery,
  Reviews,
  Service,
  VehicleFleet,
} from '../components';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Аренда автовышки и автокрана в Санкт-Петербурге и Ленинградской
          области - ООО «Аренда Неба»
        </title>
        <meta
          name="description"
          content="Наша компания оказывает услуги по аренде автовышек и автокранов в Санкт-Петербурге и Ленинградской области"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <ContactBar />
        <NavBar />
      </header>

      <main>
        <IntroCarousel />
        <VehicleFleet />
        <About />
        <Service />
        <PhotoGallery />
        <Reviews />
        <ContactSection />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </>
  );
}
