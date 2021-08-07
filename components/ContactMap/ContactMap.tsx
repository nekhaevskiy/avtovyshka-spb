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
      src="/images/awp.png"
      alt={contacts.companyName}
      width="50"
      height="50"
    />
  );
}

function ContactMap() {
  return (
    <div className="mb-6 w-full h-80">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '',
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
    </div>
  );
}

export { ContactMap };
