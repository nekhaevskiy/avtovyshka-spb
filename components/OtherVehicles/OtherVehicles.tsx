import React from 'react';
import Slider from 'react-slick';
import { VehicleCard } from '..';
import { vehicles } from '../../data/vehicles';
import styles from './OtherVehicles.module.css';

function OtherVehicles({ currentVehiclePath }: { currentVehiclePath: string }) {
  const vehiclesArrayWithoutCurrent = Object.keys(vehicles).filter(
    (key) => vehicles[key].pagePath !== currentVehiclePath
  );
  const initialSlide =
    Object.keys(vehicles).findIndex(
      (key) => vehicles[key].pagePath === currentVehiclePath
    ) - 1;

  return (
    <section
      data-testid="other-vehicles"
      className="mb-10 mx-auto px-4 max-w-6xl"
    >
      <h2 className="mb-4 mx-auto px-4 max-w-6xl text-center text-2xl font-medium sm:text-3xl">
        Похожие автовышки и автокраны
      </h2>

      <div className="px-4">
        <Slider
          className={styles.carousel}
          initialSlide={initialSlide}
          responsive={[
            {
              breakpoint: 639,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 959,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
          slidesToShow={3}
        >
          {vehiclesArrayWithoutCurrent.map((key) => (
            <div className="px-2" key={key}>
              <VehicleCard vehicle={vehicles[key]} specsClassName="sm:h-40" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export { OtherVehicles };
