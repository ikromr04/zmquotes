import './page-footer.scss';
import MainLogo from '@/components/ui/main-logo/main-logo';
import TextLink from '@/components/ui/text-link/text-link';
import Link from 'next/link';
import AtIcon from '@/components/ui/icons/at-icon';
import TwitterIcon from '@/components/ui/icons/twitter-icon';
import GlobeIcon from '@/components/ui/icons/globe-icon';

function PageFooter(): JSX.Element {
  return (
    <footer className="page-footer">
      <div className="page-footer__container container">
        <MainLogo />

        <ul className="page-footer__nav">
          <li className="page-footer__nav-item">
            <TextLink href="/terms-of-use">
              Terms of use
            </TextLink>
          </li>
          <li className="page-footer__nav-item">
            <TextLink href="/privacy-policy">
              Privacy policy
            </TextLink>
          </li>
        </ul>

        <div className="page-footer__bottom">
          <ul className="page-footer__contacts">
            <li className="page-footer__contact">
              <Link
                className="page-footer__contact-link"
                href="mailto:info@zmquotes.com"
                target="_blank"
              >
                <AtIcon width={20} height={20} />
                <span className="visually-hidden">Feedback: info@zmquotes.com</span>
              </Link>
            </li>
            <li className="page-footer__contact">
              <Link
                className="page-footer__contact-link"
                href="https://twitter.com/zafarmirzo"
                target="_blank"
              >
                <TwitterIcon width={20} height={20} />
                <span className="visually-hidden">Zafar Mirzo&apos;s twitter</span>
              </Link>
            </li>
            <li className="page-footer__contact">
              <Link
                className="page-footer__contact-link"
                href="https://zafarmirzo.com/"
                target="_blank"
              >
                <GlobeIcon width={20} height={20} />
                <span className="visually-hidden">Personal web-page</span>
              </Link>
            </li>
          </ul>

          <p className="page-footer__copyright">
            &#169; 2017 - {new Date().getFullYear()} Zafar Mirzo. <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;
