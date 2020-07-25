import React from 'react';
import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.scss';

function Hero() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <header id="hero" className={clsx('hero', styles.banner)}>
      <div className="container">
        <img
          src={useBaseUrl(`img/logo.svg`)}
          alt="Logo"
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
        src={useBaseUrl('img/pages/light/homepage-screenshot.png')}
        alt="Screenshot"
        className={clsx('shadow-md', styles.image)}
        loading="lazy"
      />
    </header>
  );
}

export default Hero;
