import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';
import 'tailwindcss/tailwind.css';

const PRODUCTION_HOST = process.env.NEXT_PUBLIC_PRODUCTION_HOST || '';
const VK_PIXEL_ID = process.env.NEXT_PUBLIC_VK_PIXEL_ID || '';
const YM_COUNTER_ID = process.env.NEXT_PUBLIC_YM_COUNTER_ID || '';

const ymCounterId = parseInt(YM_COUNTER_ID, 10);
const isProduction =
  typeof window !== 'undefined' && window.location.host === PRODUCTION_HOST;

function handleRouteChange(url: string) {
  if (isProduction) {
    ym('hit', url);
    VK.Retargeting.Hit();
  }
}

declare global {
  var VK: any;
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
        <>
          <YMInitializer
            accounts={[ymCounterId]}
            options={{
              defer: true,
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
            }}
            version="2"
          />

          {/* VK Pixel */}
          <Script
            src="https://vk.com/js/api/openapi.js?168"
            onLoad={() => {
              VK.Retargeting.Init(VK_PIXEL_ID), VK.Retargeting.Hit();
            }}
          />
          {/* /VK Pixel */}
        </>
      )}
    </>
  );
}
export default MyApp;
