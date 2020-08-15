import React from "react";
import { PropTypes } from "prop-types";

import styles from "./styles.module.scss";

function Headline(props) {
  const { category, title, offset } = props;

  return (
    <div className="row">
      <div className={`col col--${12 - offset} col--offset-${offset}`}>
        <div className={styles.headline}>
          {category && <span className={styles.category}>{category}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
        </div>
      </div>
    </div>
  );
}

Headline.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  offset: PropTypes.number,
};

Headline.defaultProps = {
  offset: 0,
};

export default Headline;
