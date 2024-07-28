import React from 'react'
import styles from './faqs.module.css'
import { Helmet } from 'react-helmet-async'
export default function Faqs() {
  return (
    <>  
     <Helmet>
      <title>FAQs</title>
      <meta name='description' content='any questions about ieee, ieee doubt'/>
      <link rel='canonical' href='http://localhost:5173/faqs'/>
    </Helmet>  
    <div >
      <h1 className={styles.faqs}>FAQS📰📜</h1>
    </div>
    </>
  )
}
