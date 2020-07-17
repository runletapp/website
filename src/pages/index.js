import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Resources from '../components/Resources';
import Download from '../components/Download';

import styles from './styles.module.scss';

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Home" description="Home | Runlet">
      <Hero />

      <main>
        <Features />
        <Download />
        <Resources />
        <FAQ />
      </main>
    </Layout>
  );
}

export default Home;
