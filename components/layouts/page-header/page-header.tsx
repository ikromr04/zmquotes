import './page-header.scss';
import MainLogo from '@/components/ui/main-logo/main-logo';
import PageNavigation from '../page-navigation/page-navigation';
import UserNavigation from '../user-navigation/user-navigation';

function PageHeader(): JSX.Element {
  return (
    <header className="page-header">
      <div className="page-header__container container">
        <MainLogo />

        <PageNavigation />

        <UserNavigation />
      </div>
    </header>
  );
}

export default PageHeader;
