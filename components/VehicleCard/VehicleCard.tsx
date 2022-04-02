import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '../../data/vehicles';

function VehicleCard({
  vehicle,
  className,
  specsClassName,
}: {
  vehicle: Vehicle;
  className?: string;
  specsClassName?: string;
}) {
  const { pagePath, shortName, image, fullName, card, price } = vehicle;
  return (
    <Link href={pagePath}>
      <a
        className={classNames(
          'mx-auto flex max-w-xs flex-col rounded border border-gray-300 bg-white px-4 pb-5 pt-4',
          className
        )}
        data-testid="vehicle-card"
      >
        <div className="relative mb-2 h-40 w-full">
          <Image
            alt={shortName}
            className="rounded"
            layout="fill"
            objectFit="cover"
            src={image}
          />
        </div>
        <h3 className="mb-2 text-center text-xl font-bold leading-6 text-gray-800">
          {fullName.map((part) => (
            <span className="block" key={part}>
              {part}
            </span>
          ))}
        </h3>
        <dl className={classNames('mb-3', specsClassName)}>
          {card.map((spec) => (
            <div key={spec[0]} className="flex">
              <dt className="flex-grow border-t border-gray-300 p-1 text-sm text-gray-500">
                {spec[0]}
              </dt>
              <dd className="flex-grow border-t border-gray-300 p-1 text-right text-sm text-gray-500">
                {spec[1]}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mb-3 mt-auto text-center text-lg text-gray-800">
          <b>{price.fullShift}&nbsp;₽</b>/смена
        </p>

        <div className="text-center">
          <span className="inline-block whitespace-nowrap rounded bg-red-500 px-4 py-2 align-middle font-medium text-white shadow-md">
            Подробнее
          </span>
        </div>
      </a>
    </Link>
  );
}

export { VehicleCard };
