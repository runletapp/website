import React from "react"

import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Download from "@theme/Download"
import FAQ from "@theme/FAQ"
import Features from "@theme/Features"
import Hero from "@theme/Hero"
import Layout from "@theme/Layout"
import Resources from "@theme/Resources"

import styles from "./styles.module.scss"

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const { tagline } = siteConfig

  return (
    <Layout description={tagline}>
      <Hero />

      <main className={styles.main}>
        <Features />
        <Download />
        <Resources />
        <FAQ />
      </main>
    </Layout>
  )
}

export default Home
