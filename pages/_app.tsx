import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';
import 'tailwindcss/tailwind.css';

const YM_COUNTER_ID = process.env.NEXT_PUBLIC_YM_COUNTER_ID || '';
const YM_PRODUCTION_HOST = process.env.NEXT_PUBLIC_YM_PRODUCTION_HOST || '';

const ymCounterId = parseInt(YM_COUNTER_ID, 10);
const isProduction =
  typeof window !== 'undefined' && window.location.host === YM_PRODUCTION_HOST;

function handleRouteChange(url: string) {
  if (isProduction) {
    ym('hit', url);
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
    // according to https://nextjs.org/docs/api-reference/next/router
    // `router.events` is not included in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Component {...pageProps} />

      {isProduction && (
        <YMInitializer
          accounts={[ymCounterId]}
          options={{ defer: true, webvisor: true }}
          version="2"
        />
      )}
    </>
  );
}
export default MyApp;
