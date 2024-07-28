import React, { useState } from 'react'
import styles from './award.module.css'
import { Helmet } from 'react-helmet-async'
import AchievementCard from '../../components/Achivement/Achivement';
import { BranchAchievement } from '../../branchachivements';
import { StudentAchievement } from '../../StudentAchivement';
export default function Awards() {
  const [studentawards,setStudentAwards] = useState(false);

  return (
    <>
    <Helmet>
      <title>Awards</title>
      <meta name='description' content='know everything about ieee achivements, winning all over asia '/>
      <link rel='canonical' href='http://localhost:5173/awards'/>
    </Helmet>
    <div className={styles.award}>
      <div className={styles.togglebuttons}>
        <p onClick={()=>setStudentAwards(false)} className={`${studentawards?'':styles.pactive}`}>BRANCH ACHIVEMENTS</p>
        <p onClick={()=>setStudentAwards(true)} className={`${studentawards?styles.pactive:''}`}>STUDENT ACHIVEMENTS</p>
       
      </div>
    <div className={`${studentawards?styles.deactivebranch:styles.branchcontainer}`}>
      {BranchAchievement.map((achievement, index) => (
        <AchievementCard key={index} {...achievement} />
      ))}
    </div>
    <div className={`${studentawards?styles.activestudent:styles.studentcontainer}`}>
      {StudentAchievement.map((achievement, index) => (
        <AchievementCard key={index} {...achievement} />
      ))}
    </div>
    </div>
    </>
  )
}
