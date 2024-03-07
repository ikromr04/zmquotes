'use client';

import './page-navigation.scss';
import PageLink from '@/components/ui/page-link/page-link';
import classNames from 'classnames';
import QuoteIcon from '@/components/ui/icons/quote-icon';
import TagIcon from '@/components/ui/icons/tag-icon';
import AuthorIcon from '@/components/ui/icons/author-icon';
import SearchIcon from '@/components/ui/icons/search-icon';

function PageNavigation({
  className,
}: {
  className?: string
}): JSX.Element {
  return (
    <nav className={classNames(className, 'main-navigation')}>
      <ul className="main-navigation__list">
        <li className="main-navigation__item">
          <PageLink href="/">
            <QuoteIcon /> Thoughts
          </PageLink>
        </li>
        <li className="main-navigation__item">
          <PageLink href="/tags">
            <TagIcon /> Tags
          </PageLink>
        </li>
        <li className="main-navigation__item">
          <PageLink href="/author">
            <AuthorIcon /> Author
          </PageLink>
        </li>
        <li className="main-navigation__item">
          <PageLink href="/search">
            <SearchIcon /> Search
          </PageLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNavigation;
