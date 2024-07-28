import React from 'react'
import styles from './about2.module.css'
export default function IeeeSpsSbc() {
  return (
    <div className={styles.ieeeMain}>
      <div className={styles.ieeeContentDiv}>
        <h1 className={styles.ieeeHeading}>
          Vision
        </h1>
        <p className={styles.ieeeContent}>The Signal Processing Society is a dynamic organization that is the preeminent source of signal processing information and resources to a global community. We do this by: being a one-stop source of signal processing resources; providing a variety of high quality resources to a variety of users in formats customized to their interests; adapting to a rapidly changing technical community.</p>
      </div>
      <div className={styles.ieeeContentDiv}>
        <h1 className={styles.ieeeHeading}>
          Mission
        </h1>
        <p className={styles.ieeeContent}>
        The Signal Processing Society enables technology for the generation, transformation, and interpretation of information whose purpose is to advance and disseminate state-of-the-art scientific information and resources; and provide a venue for people to interact and exchange ideas. Silver Oak University IEEE Signal Processing Society Student Branch provides opportunities to collaborate and connect with industry professionals, academics and students alike working towards the advancement of signal processing and the technology it enables.
        </p>
      </div>

      <div className={styles.ieeeContentDiv}>
        <h1 className={styles.ieeeHeading}>
        About SOU IEEE SPS SBC
        </h1>
        <ol className={styles.ieeeContentol}>
          <li>The Signal Processing Society is the first IEEE society, founded in 1948, whose perspective is to advance and spread scientific information and resources, educate the signal processing community, and present a platform for individuals to communicate and exchange ideas.</li>
          <li>Silver Oak University IEEE SPS SBC was established this year in 2021. In Spite of the short time span we are the largest society in the Gujarat Section with 63 members and we have successfully organized various events. We have organized different specialized symposia on the various emerging technologies to accomplish its objective to keep the members acquainted with the latest information and to serve the society at ample.</li>
        </ol>
      </div>

    </div>
  )
}
