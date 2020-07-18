import React from 'react';
import Layout from '@theme/Layout';

import FAQ from '@theme/FAQ';
import Features from '@theme/Features';
import Hero from '@theme/Hero';
import Resources from '@theme/Resources';
import Download from '@theme/Download';
import styles from './styles.module.scss';

function Home() {
  return (
    <Layout description="Home | Runlet">
      <Hero />

      <main className={styles.main}>
        <Features />
        <Download />
        <Resources />
        <FAQ />
      </main>
    </Layout>
  );
}

export default Home;
