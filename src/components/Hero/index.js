import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './styles.module.css';

function Hero() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const {isDarkTheme} = useThemeContext();
  const themePath = isDarkTheme ? 'dark' : 'light';

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>

        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--primary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('docs/')}>
            Get Started
          </Link>
        </div>

        <img
          src={useBaseUrl(`img/pages/${themePath}/homepage-screenshot.png`)}
          alt="Screenshot"
          className={clsx('shadow-md', styles.image)}
        />
      </div>
    </header>
  );
}

export default Hero;
