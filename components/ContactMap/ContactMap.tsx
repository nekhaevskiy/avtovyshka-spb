import GoogleMapReact from 'google-map-react';
import { contacts } from '../../data/contacts';

interface Props {
  lat: number;
  lng: number;
}

function MarkerWrapper(props: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/map-marker.png"
      alt={contacts.companyName}
      width="50"
      height="50"
    />
  );
}

const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
const PRODUCTION_HOST = process.env.NEXT_PUBLIC_PRODUCTION_HOST;

function ContactMap() {
  return (
    <div className="mb-6 h-80 w-full">
      {typeof window !== 'undefined' &&
      window.location.host === PRODUCTION_HOST &&
      GOOGLE_MAPS_KEY ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: GOOGLE_MAPS_KEY,
            language: 'ru',
            region: 'ru',
          }}
          defaultCenter={{
            lat: 59.948796,
            lng: 30.224368,
          }}
          defaultZoom={12}
          options={{
            scrollwheel: false,
          }}
        >
          <MarkerWrapper lat={59.953386} lng={30.222991} />
        </GoogleMapReact>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-300">
          <span>Google Maps placeholder</span>
        </div>
      )}
    </div>
  );
}

export default ContactMap;
