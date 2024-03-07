import PageFooter from '@/components/layouts/page-footer/page-footer';
import { ReactNode } from 'react';
import PageHeader from '@/components/layouts/page-header/page-header';

function Layout({
  children
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  );
}

export default Layout;
