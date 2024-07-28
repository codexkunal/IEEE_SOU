import React from 'react';
import styles from './achivement.module.css';

const AchievementCard = ({ image, title, description }) => {
  return (
    <div className={styles.Achivcard}>
      <img src={image} alt={title} className={styles.Achivimage} />
      <div className={styles.Achivcontent}>
        <h3 className={styles.Achivtitle}>{title}</h3>
        <p className={styles.Achivdescription}>{description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
