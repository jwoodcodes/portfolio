"use client";
import React, { useState, useEffect } from 'react';
import styles from './MainNav.module.css';
import Link from 'next/link';

const MainNav = ({ projects, about, contact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navContainer} ${isScrolled ? styles.glassNav : ''}`}>
      <Link href="/" className={styles.logo}>
        JayWood<span className={styles.logoHighlight}>.dev</span>
      </Link>

      <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Toggle menu">
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
        <Link href="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link href={projects || "#projects"} className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
        <Link href={about || "#about"} className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link href={contact || "#contact"} className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default MainNav;

