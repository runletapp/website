import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Features from '../components/Features';
import Hero from '../components/Hero';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout title="Homepage" description="Homepage | Runlet">
      <Hero />

      <main>
        <Features />
      </main>
    </Layout>
  );
}

export default Home;
