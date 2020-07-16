import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Device Syncing</>,
    imageUrl: 'img/pages/undraw_docusaurus_mountain.svg',
    description: <>View and execute jobs from any authorized devices.</>,
  },
  {
    title: <>Activity Logs</>,
    imageUrl: 'img/pages/undraw_docusaurus_tree.svg',
    description: <>Timestamped and uniquely identified output logs.</>,
  },
  {
    title: <>Themes</>,
    imageUrl: 'img/pages/undraw_docusaurus_react.svg',
    description: <>A diverse set of dark themes available for choosing.</>,
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Features() {
  return (
    <>
      {features && features.length > 0 && (
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Features;
