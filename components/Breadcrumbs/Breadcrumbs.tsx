import Link from 'next/link';

interface Props {
  currentPage: string;
}

function Breadcrumbs({ currentPage }: Props) {
  return (
    <div data-testid="breadcrumbs" className="mx-auto mb-6 max-w-6xl px-4">
      <div className="rounded bg-gray-100 px-4 py-2 text-gray-800">
        <Link href="/#vehicle-section">
          <a className="mr-2 inline-block align-baseline text-red-500">
            Автопарк
          </a>
        </Link>
        <span className="mr-2">/</span>
        <span className="text inline-block align-baseline">{currentPage}</span>
      </div>
    </div>
  );
}

export { Breadcrumbs };
