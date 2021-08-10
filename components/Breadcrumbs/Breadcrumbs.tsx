import Link from 'next/link';

interface Props {
  currentPage: string;
}

function Breadcrumbs({ currentPage }: Props) {
  return (
    <div data-testid="breadcrumbs" className="mx-auto px-4 max-w-6xl">
      <div className="px-4 py-2 text-gray-800 bg-gray-100 rounded">
        <Link href="/">
          <a className="inline-block align-baseline mr-2 text-red-500">
            Главная
          </a>
        </Link>
        <span className="mr-2">/</span>
        <span className="text inline-block align-baseline">{currentPage}</span>
      </div>
    </div>
  );
}

export { Breadcrumbs };
