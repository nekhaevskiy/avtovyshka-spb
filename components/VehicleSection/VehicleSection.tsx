import { SectionHeading, VehicleCard } from '..';
import { vehicles } from '../../data/vehicles';

function VehicleSection() {
  return (
    <section
      className="bg-gray-100"
      data-testid="vehicle-section"
      id="vehicle-section"
    >
      <div className="mx-auto max-w-6xl px-4 py-8">
        <SectionHeading
          heading="Наш автопарк"
          subheading="автовышки и автокраны"
        />
        <div className="sm:-mx-2 sm:flex sm:flex-wrap sm:items-stretch sm:justify-center lg:justify-around">
          {Object.keys(vehicles).map((key) => (
            <VehicleCard
              vehicle={vehicles[key]}
              className="mb-4 shadow-sm hover:shadow-2xl focus:shadow-2xl sm:mx-2 sm:w-80"
              key={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { VehicleSection };
