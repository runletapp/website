import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';

import styles from './styles.module.scss';

function Hero() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const {isDarkTheme} = useThemeContext();
  const themePath = isDarkTheme ? 'dark' : 'light';

  return (
    <header id="hero" className={clsx('hero', styles.banner)}>
      <div className="container">
        <img
          src={useBaseUrl(`img/logo.svg`)}
          alt="Screenshot"
          className={styles.logo}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>

        <div className={styles.buttons}>
          <AnchorLink
            className={clsx('button button--primary button--lg', styles.button)}
            href="#download">
            Download
          </AnchorLink>
        </div>
      </div>

      <img
        src={useBaseUrl(`img/pages/${themePath}/homepage-screenshot.png`)}
        alt="Screenshot"
        className={clsx('shadow-md', styles.image)}
      />
    </header>
  );
}

export default Hero;
