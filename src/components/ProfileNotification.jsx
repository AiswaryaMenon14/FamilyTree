import React from 'react';
import Notification from "../assets/notification.png";
import Profile from "../assets/Profile.png";

import styles from './ProfileNotification.module.css';

const ProfileNotification = () => {
  return (
    <div >
      <div >
        <img src={Notification} alt="Family Tree"/>
      </div>
      <div style={{marginTop:'5px'}}>
      <img src={Profile} alt="Family Tree"/>

      </div>
    </div>
  );
};

export default ProfileNotification;
