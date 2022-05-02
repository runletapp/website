import React from "react"

import clsx from "clsx"

import Headline from "@site/src/components/Headline"

import styles from "./styles.module.scss"

interface Feature {
  title: string
  description: string
}

const data: Feature[] = [
  {
    title: "Activity Logs",
    description:
      "Timestamped and uniquely identified output logs from job executions",
  },
  {
    title: "Device Syncing",
    description: "View and execute jobs from any authorized devices",
  },
  {
    title: "Device Assignment",
    description: "Define the set of devices in which each job will be executed",
  },
  {
    title: "Job Arguments",
    description:
      "You can pass additional data to your jobs as regular method arguments",
  },
  {
    title: "Scheduling",
    description: "Schedule your jobs for execution on specific dates and times",
  },
  {
    title: "Themes",
    description:
      "A variety of themes available: Black, Dark Grey, Dracula, Navy, and Slate",
  },
]

const Feature = ({ title, description }: Feature) => {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <Headline
          category="Features"
          title="Manage your fleet of devices with ease"
          offset={1}
        />

        <div className="row">
          {data.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
