import classNames from 'classnames';

function Table({
  data,
  className,
}: {
  data: [string, string][];
  className?: string;
}) {
  return (
    <table
      className={classNames(
        'w-full text-gray-800 text-sm border-b lg:text-base',
        className
      )}
    >
      <tbody>
        {data.map((cells) => (
          <tr className="border-t" key={cells[0]}>
            <td className="px-2 py-1">{cells[0]}</td>
            <td className="px-2 py-1">{cells[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { Table };
