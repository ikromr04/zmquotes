'use client';

import './page-link.scss';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

function PageLink({
  children,
  href,
}: {
  children: ReactNode
  href: string
}): JSX.Element {
  const pathname = usePathname();
  const className: string = (href === '/' && pathname === '/')
    ? 'page-link--current'
    : ((href !== '/' && pathname.startsWith(href)) ? 'page-link--current' : '');

  return (
    <Link
      className={classNames('page-link', className)}
      href={href}
    >
      {children}
    </Link>
  );
}

export default PageLink;
