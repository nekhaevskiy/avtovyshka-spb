import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactChild;
  href: string;
}

function LinkAsButton({ children, href }: Props) {
  return (
    <Link href={href}>
      <a className="inline-block whitespace-nowrap rounded bg-red-500 px-4 py-2 align-middle font-medium text-white shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
        {children}
      </a>
    </Link>
  );
}

export { LinkAsButton };
