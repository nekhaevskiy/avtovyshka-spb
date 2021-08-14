import { Vehicle } from '../../data/vehicles';

interface Props {
  vehicle: Vehicle;
}

function VehicleShortDescription({ vehicle }: Props) {
  const {
    vehicleShortDescription,
    priceFullShift,
    priceHalfShift,
    priceDelivery,
  } = vehicle;
  return (
    <div
      className="mx-auto max-w-md text-gray-800 md:ml-1 md:mr-0 md:w-1/2 md:max-w-none xl:ml-4"
      data-testid="vehicle-short-description"
    >
      <table className="mb-4 mx-auto w-full text-sm border-b lg:text-base">
        <tbody>
          {vehicleShortDescription.map((items) => (
            <tr className="border-t" key={items[0]}>
              <td className="px-2 py-1">{items[0]}</td>
              <td className="px-2 py-1">{items[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mb-3 text-center text-xl font-semibold">
        Стоимость аренды
      </h3>

      <table className="mx-auto w-full text-sm border-b lg:text-base">
        <tbody>
          <tr className="border-t">
            <td className="px-2 py-1">
              Смена (7+1){priceHalfShift ? ' / Полсмены (3+1)' : ''}
            </td>
            <td className="px-2 py-1">
              {priceFullShift}&nbsp;₽
              {priceHalfShift ? ` / ${priceHalfShift}\xa0₽` : ''}
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-2 py-1">Подача за КАД</td>
            <td className="px-2 py-1">{priceDelivery}&nbsp;₽/км</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { VehicleShortDescription };
