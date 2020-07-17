import React from 'react';
import Link from '@docusaurus/Link';

import Headline from '../Headline';
import styles from './styles.module.scss';

function FAQ() {
  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className="row">
          <div className="col col--5">
            <div className={styles.question}>
              <h2 className={styles.title}>Why use Runlet?</h2>
              <p>
                Runlet provides an easy to use interface to manage jobs across a
                fleet of connected devices, trigger remote executions, and view
                logs from remotely executed jobs. You can also quickly get a new
                device started since all configuration files and logs are stored
                in the cloud and synced after sign in.
              </p>
            </div>
            <div className={styles.question}>
              <h2 className={styles.title}>
                What are the supported platforms?
              </h2>
              <p>
                The desktop distribution includes both the daemon and a
                full-featured GUI, and is recommended for Linux, Mac and Windows
                users. The ARM distribution includes only the daemon, and is
                recommended for resource constrained devices like the Raspberry
                Pi.
              </p>
            </div>
          </div>

          <div className="col col--5 col--offset-1">
            <div className={styles.question}>
              <h2 className={styles.title}>How is personal data handled?</h2>
              <p>
                We only collect basic user information during registration (such
                as your name, email address, and social media avatar), and we do
                not share your personal data with any affiliates or service
                providers. For more details, have a look at our{' '}
                <Link to="docs/terms">terms of service</Link> and{' '}
                <Link to="docs/privacy">privacy policy</Link>.
              </p>
            </div>
            <div className={styles.question}>
              <h2 className={styles.title}>Is Runlet secure?</h2>
              <p>
                Yes, all logs are encrypted by the host machine before submitted
                to our servers, and decrypted once received by connected
                devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
