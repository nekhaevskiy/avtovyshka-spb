import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '../../data/vehicles';

interface Props {
  vehicle: Vehicle;
}

function VehicleCard({ vehicle }: Props) {
  const { vehicleCard } = vehicle;
  return (
    <Link href={vehicle.path}>
      <a
        className="flex flex-col pb-5 pt-4 px-4 max-w-xs h-full bg-white border border-gray-300 rounded hover:shadow-2xl focus:shadow-2xl shadow-sm"
        data-testid="vehicle-card"
      >
        <div className="relative mb-2 w-full h-40">
          <Image
            alt={vehicle.name}
            className="rounded"
            layout="fill"
            objectFit="cover"
            src={vehicleCard.image}
          />
        </div>
        <h3 className="mb-2 text-center text-gray-800 text-xl font-bold leading-6">
          {vehicle.fullName.map((part) => (
            <span className="block" key={part}>
              {part}
            </span>
          ))}
        </h3>
        <dl className="mb-3">
          {vehicleCard.specs.map((spec) => (
            <div key={spec[0]} className="flex">
              <dt className="flex-grow p-1 text-gray-500 text-sm border-t border-gray-300">
                {spec[0]}
              </dt>
              <dd className="flex-grow p-1 text-right text-gray-500 text-sm border-t border-gray-300">
                {spec[1]}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mb-3 mt-auto text-center text-gray-800 text-lg">
          <b>{vehicle.priceFullShift} ₽</b>/смена
        </p>

        <div className="text-center">
          <span className="inline-block align-middle px-4 py-2 text-white whitespace-nowrap font-medium bg-red-500 rounded shadow-md">
            Подробнее
          </span>
        </div>
      </a>
    </Link>
  );
}

export { VehicleCard };
