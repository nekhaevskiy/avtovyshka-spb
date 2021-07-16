import { vehicles } from '../data/vehicles';
import { VehicleCard } from './VehicleCard/VehicleCard';

function VehicleFleet() {
  return (
    <section
      className="bg-gray-100"
      data-testid="vehicle-fleet"
      id="vehicle-fleet"
    >
      <div className="mx-auto px-4 py-8 max-w-6xl">
        <h2 className="mb-6 pb-3 text-gray-800 text-2xl font-bold border-b border-gray-300">
          Наш автопарк{' '}
          <small className="block text-gray-500 text-lg font-normal sm:inline-block sm:align-baseline">
            автовышки и автокраны
          </small>
        </h2>
        <div className="sm:flex sm:flex-wrap sm:items-stretch sm:justify-center sm:-mx-2 lg:justify-around">
          {vehicles.map((vehicle) => (
            <div
              className="mb-4 mx-auto max-w-xs sm:mx-2 sm:w-80"
              key={vehicle.path}
            >
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { VehicleFleet };
