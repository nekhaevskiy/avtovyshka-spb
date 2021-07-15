import { vehicles } from '../data/vehicles';
import { VehicleCard } from './VehicleCard/VehicleCard';

function VehicleFleet() {
  return (
    <section
      className="bg-gray-100"
      data-testid="vehicle-fleet"
      id="vehicle-fleet"
    >
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h2 className="mb-6 pb-3 text-gray-800 text-2xl font-bold border-b border-gray-300">
          Наш автопарк{' '}
          <small className="block text-gray-500 text-lg font-normal sm:inline-block sm:align-baseline">
            автовышки и автокраны
          </small>
        </h2>
        <div className="flex flex-col gap-4 items-center sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center xl:justify-between">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.path} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { VehicleFleet };
