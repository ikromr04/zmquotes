import Link from 'next/link';
import './text-link.scss';
import { ReactNode } from 'react';

function TextLink({
  children,
  href,
}: {
  children: ReactNode
  href: string
}): JSX.Element {
  return (
    <Link
      className="text-link"
      href={href}
    >
      {children}
    </Link>
  );
};

export default TextLink;
