import { SectionHeading, VehicleCard } from '..';
import { vehicles } from '../../data/vehicles';

function VehicleSection() {
  return (
    <section
      className="bg-gray-100"
      data-testid="vehicle-section"
      id="vehicle-section"
    >
      <div className="mx-auto px-4 py-8 max-w-6xl">
        <SectionHeading
          heading="Наш автопарк"
          subheading="автовышки и автокраны"
        />
        <div className="sm:flex sm:flex-wrap sm:items-stretch sm:justify-center sm:-mx-2 lg:justify-around">
          {Object.keys(vehicles).map((key) => (
            <div className="mb-4 mx-auto max-w-xs sm:mx-2 sm:w-80" key={key}>
              <VehicleCard vehicle={vehicles[key]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { VehicleSection };
