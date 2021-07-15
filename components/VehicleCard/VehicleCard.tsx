import Image from 'next/image';
import { Vehicle } from '../../data/vehicles';
import { LinkAsButton } from '../LinkAsButton';

interface Props {
  vehicle: Vehicle;
}

function VehicleCard({ vehicle }: Props) {
  const { vehicleCard } = vehicle;
  return (
    <article
      className="flex flex-col pb-5 pt-4 px-4 w-72 bg-white border border-gray-300 rounded"
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
        <LinkAsButton href={vehicle.path}>Подробнее</LinkAsButton>
      </div>
    </article>
  );
}

export { VehicleCard };
