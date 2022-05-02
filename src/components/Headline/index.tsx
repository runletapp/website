import React from "react"

import styles from "./styles.module.scss"

interface HeadlineProps {
  category?: string
  offset?: number
  title?: string
}

const Headline = ({ category, offset = 0, title }: HeadlineProps) => {
  return (
    <div className="row">
      <div className={`col col--${12 - offset} col--offset-${offset}`}>
        <div className={styles.headline}>
          {category && <span className={styles.category}>{category}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
        </div>
      </div>
    </div>
  )
}

export default Headline
