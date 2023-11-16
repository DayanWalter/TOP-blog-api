import styles from './Logout.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Logout() {
  localStorage.setItem('jwtoken', '');

  return (
    <>
      <div className={styles.logout}>
        <h1>This is the Logoutpage - Goodbye!</h1>
      </div>
    </>
  );
}
