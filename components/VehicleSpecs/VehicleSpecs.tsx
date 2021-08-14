import { Price } from '../../data/vehicles';

interface Props {
  specs: [string, string][];
  price: Price;
}

function VehicleSpecs({ specs, price }: Props) {
  return (
    <div className="text-gray-800">
      <table className="mb-4 mx-auto w-full text-sm border-b lg:text-base">
        <tbody>
          {specs.map((items) => (
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
              Смена (7+1){price.halfShift ? ' / Полсмены (3+1)' : ''}
            </td>
            <td className="px-2 py-1">
              {price.fullShift}&nbsp;₽
              {price.halfShift ? ` / ${price.halfShift}\xa0₽` : ''}
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-2 py-1">Подача за КАД</td>
            <td className="px-2 py-1">{price.delivery}&nbsp;₽/км</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { VehicleSpecs };
