import React from 'react'
import styles from './home.module.css'
import { Helmet } from 'react-helmet-async'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faCalendarAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
// import Carousel from '../../components/carousel/Carousel'
import { lazy,Suspense } from 'react'
const Carousel = lazy(()=>import("../../components/carousel/Carousel"))
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='ieee sou sb officials' />
        <link rel='canonical' href='http://localhost:5173/' />
      </Helmet>
      <div className={styles.home}>
        <div className={styles.page1}>
          <h1 className={styles.welcomeHeading1}>Welcome to</h1>
          <h1 className={styles.welcomeHeading2}>Silver Oak University</h1>
          <h1 className={styles.welcomeHeading3}>IEEE Student Branch</h1>
          <div className={styles.slider}>
            <Suspense fallback={<div className={styles.suspenseslider}></div>}>
            <Carousel/>
            </Suspense>
          </div>
        </div>
        <div className={styles.ieeesection}>
          <div className={styles.content}>
            <h2>Why Silver Oak University IEEE SB?</h2>
            <div className={styles.section}>
              <div className={styles.text}>
                <h3>Keep Technically Up To Date</h3>
                <p>IEEE is dedicated to advancing technological innovation and excellence for the benefit of humanity, is connecting more than 400,000 members to the latest information and the best technical resources available. IEEE is a unique way to gauge the benefits of IEEE members but a reduced membership rates. Helps you do research, get recognition and publish your work to whole world.</p>
              </div>
              <div className={styles.image}>
                <img src="./image1.svg" alt="Image representing technical updates" />
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.lapimage}>
                <img src="./image2.svg" alt="Image representing global network" />
              </div>
              <div className={styles.text}>
                <h3>Join Global Network</h3>
                <p>When we join IEEE, it serves its members and their interest with 83 societies; 130 journals, transaction and magazines; more than 300 conferences annually and 900 active standards. Apart from it, global graphical units, publication, web services and conferences, IEEE remains the world’s largest technical professional association.</p>
              </div>
              <div className={styles.mobimage}>
                <img src="./image2.svg" alt="Image representing global network" />
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.text}>
                <h3>Gain Expertise Open Career Doors</h3>
                <p>Career door is an email newsletter which has recommend for choosing best career advice plus the job of the week from the IEEE job site. It provides members with links to news about engineering careers, education, & professional issues and anyone may opt-in to the newsletter. A weekly email containing career advice plus the job of the week from the IEEE Job Site.</p>
              </div>
              <div className={styles.image}>
                <img src="./image3.svg" alt="Image representing global network" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.factsContainer}>
          <h2>Some Facts About Us</h2>
          <div className={styles.facts}>
            <div className={styles.fact}>
              <i className={`${styles.icon} ${styles.membersIcon}`}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
              </i>
              <h3>500+</h3>
              <p>Members</p>
            </div>
            <div className={styles.fact}>
              <i className={`${styles.icon} ${styles.eventsIcon}`}>
                <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
              </i>
              <h3>100+</h3>
              <p>Events</p>
            </div>
            <div className={styles.fact}>
              <i className={`${styles.icon} ${styles.awardsIcon}`}>
                <FontAwesomeIcon icon={faAward} className={styles.icon} />
              </i>
              <h3>39+</h3>
              <p>Awards</p>
            </div>
            <div className={styles.fact}>
              <i className={`${styles.icon} ${styles.participationIcon}`}>
                <FontAwesomeIcon icon={faUsers} className={styles.icon} />
              </i>
              <h3>1500+</h3>
              <p>Participation</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
      <img 
        src="./satviksir.jpg" 
        alt="Dr. Satvik Khara" 
        className={styles.image} 
      />
      <div className={styles.content}>
        <h2 className={styles.title}>A Message From Our Co-Founder</h2>
        <p className={styles.message}>
          My message to everyone thinking about joining Silver Oak University IEEE SB would be that here you will get 360° development. You will be technically updated with various new inventions and researches emerging all around the world, build a strong network with other students as well as experts all around the world, you will have good opportunities for your career options, by bold—text attending various seminar and conferences you can build up your confidence and increase and nurture all around development.
        </p>
        <p className={styles.signature}>
          <strong>Dr. Satvik Khara</strong><br/>
          Head, Department of Computer Engineering
        </p>
      </div>
    </div>

      </div>
    </>
  )
}
