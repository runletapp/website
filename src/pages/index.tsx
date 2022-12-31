import React from "react"

import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Download from "@site/src/components/Download"
import FAQ from "@site/src/components/FAQ"
import Features from "@site/src/components/Features"
import Hero from "@site/src/components/Hero"
import Resources from "@site/src/components/Resources"
import Layout from "@theme/Layout"

import styles from "./styles.module.scss"

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig } = context
  const { tagline } = siteConfig

  return (
    <Layout description={tagline}>
      <Hero />

      <main className={styles.main}>
        <Features />
        {/* <Download /> */}
        <Resources />
        <FAQ />
      </main>
    </Layout>
  )
}

export default Home
