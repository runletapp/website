import React from "react";
import Link from "@docusaurus/Link";

import styles from "./styles.module.scss";

const data = [
  {
    title: <>What is Runlet?</>,
    description: (
      <>
        Runlet is a cloud-based job manager that offers device synchronization
        and reliable message delivery in a network of connected devices even
        after connectivity issues.
      </>
    ),
  },
  {
    title: <>Why use Runlet?</>,
    description: (
      <>
        Runlet provides an easy to use interface to manage jobs across a fleet
        of connected devices, trigger remote executions, and view logs from
        remotely executed jobs. You can also quickly get a new device started
        since all configuration files and records are in the cloud.
      </>
    ),
  },
  {
    title: <>How is personal data handled?</>,
    description: (
      <>
        We only collect necessary user information during registration (such as
        your name, email address, and social media avatar). We do not share your
        data with any affiliates or service providers. For more details, have a
        look at our <Link to="docs/policies/terms">terms of service</Link> and{" "}
        <Link to="docs/policies/privacy">privacy policy</Link>.
      </>
    ),
  },
  {
    title: <>Is Runlet secure?</>,
    description: (
      <>
        Yes, all logs are encrypted by the host machine before submitted to our
        servers and decrypted once received by connected devices.
      </>
    ),
  },
];

function Question({ title, description }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {data[0] && <Question {...data[0]} />}
            {data[1] && <Question {...data[1]} />}
          </div>

          <div className="col col--6">
            {data[2] && <Question {...data[2]} />}
            {data[3] && <Question {...data[3]} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
