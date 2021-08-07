import GoogleMapReact from 'google-map-react';
import { SectionHeading } from '..';

interface Props {
  lat: number;
  lng: number;
}

function MarkerWrapper(props: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/awp.png" alt="ООО «Аренда Неба»" width="50" height="50" />
  );
}

function Contacts() {
  return (
    <section
      className="mx-auto px-4 py-8 max-w-6xl"
      data-testid="contacts"
      id="contacts"
    >
      <SectionHeading heading="Контакты" />

      <div className="w-full h-80">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyD1IQxplUprzuwTr70s71P57rLsfhkbNsQ',
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
    </section>
  );
}

export { Contacts };
