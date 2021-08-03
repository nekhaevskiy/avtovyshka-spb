import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactChild;
  href: string;
}

function LinkAsButton({ children, href }: Props) {
  return (
    <Link href={href}>
      <a className="inline-block align-middle px-4 py-2 text-white whitespace-nowrap font-medium bg-red-500 hover:bg-red-700 rounded focus:outline-none shadow-md focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
        {children}
      </a>
    </Link>
  );
}

export { LinkAsButton };
