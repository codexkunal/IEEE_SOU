import React from 'react'
import styles from "./about2.module.css"

export default function IeeeWieAg() {
  return (
    <div className={styles.ieeeMain}>
      <div className={styles.ieeeContentDiv}>
        <h1 className={styles.ieeeHeading}>
          Vision
        </h1>

        <ol className={styles.ieeeContentol}>
          <li>Equal access to knowledge.</li>
          <li>Encourage women in the potency of engineering.</li>
          <li>Enhance the share of women's voices.</li>
        </ol>
      </div>
      <div className={styles.ieeeContentDiv}>
        <h1 className={styles.ieeeHeading}>
          Mission
        </h1>
        <ol className={styles.ieeeContentol}>
<li>Betterment of society.</li>
<li>Empower women in leadership roles.</li>
<li>Technical enhancement of women.</li>
<li>Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.</li>
        </ol>
      </div>

      <div className={styles.ieeeContentDiv}>
        <h1 className={styles.ieeeHeading}>
        About SOU IEEE WIE AG
        </h1>
        <ol className={styles.ieeeContentol}>
          <li>IEEE WIE is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science. It envisions a vibrant community of IEE women and men by collectively using their diverse talents to innovate for the benefit of humanity.</li>
          <li>With the same vision and mission, SOU IEEE WIE AG was established in 2019, and today, it is the largest affinity group in the Gujarat Section with 32 members. Starting from its inception, SOU IEEE WIE AG has carried out multiple campaigns and initiatives emphasizing the betterment of society. Alongside this, the AG has organized various technical and non-technical events & talks, that have helped many students to uplift their technical and interpersonal skills.</li>
        </ol>
      </div>

    </div>
  )
}
