import type { AppProps } from 'next/app';
import Router from 'next/router';
import React from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';
import 'tailwindcss/tailwind.css';

const YM_COUNTER_ID = process.env.NEXT_PUBLIC_YM_COUNTER_ID || '';
const YM_PRODUCTION_HOST = process.env.NEXT_PUBLIC_YM_PRODUCTION_HOST || '';

function isProduction() {
  return (
    typeof window !== 'undefined' && window.location.host === YM_PRODUCTION_HOST
  );
}

Router.events.on('routeChangeComplete', (url: string) => {
  if (isProduction()) {
    ym('hit', url);
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if (isProduction()) {
      const url = window.location.pathname + window.location.search;
      ym('hit', url);
    }
  }, []);
  return (
    <>
      {isProduction() && (
        <YMInitializer
          accounts={[parseInt(YM_COUNTER_ID, 10)]}
          options={{ webvisor: true, defer: true }}
          version="2"
        />
      )}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
