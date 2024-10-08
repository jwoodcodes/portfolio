import React from 'react';
// import styles from './MainNav.module.css';
import styles from '../app/page.module.css';

const MainNav = ({ projects, about, contact }) => {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.navLinks}>
      <a href="/" className={styles.navLink}>Home</a>
        <a href={projects} className={styles.navLink}>Projects</a>
        
        <a href={about} className={styles.navLink}>About</a>
        <a href={contact} className={styles.navLink}>Contact</a>
      </div>
    </nav>
  );
};

export default MainNav;

