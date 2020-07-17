import React from 'react';

import Headline from '../Headline';
import styles from './styles.module.scss';

function Download() {
  return (
    <section id="download" className={styles.download}>
      <div className="container">
        <Headline
          category="Download"
          title="ARM, Linux, MacOS, Windows, you name it!"
        />
      </div>
    </section>
  );
}

export default Download;
