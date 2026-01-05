import React from "react";
import styles from "@/src/styles/footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.wholeWrapper}>
      <Link href="https://github.com/jwoodcodes" target="_blank" className={styles.link}>
        <Image
          src="/github-mark-white.png"
          width={24}
          height={24}
          alt="GitHub"
        />
      </Link>
      <div className={styles.myName}>© {new Date().getFullYear()} Jay Wood</div>
      <Link href="https://www.linkedin.com/in/jay-wood-131432263/" target="_blank" className={styles.link}>
        <Image
          src="/linkedin.png"
          width={24}
          height={24}
          alt="LinkedIn"
        />
      </Link>
    </footer>
  );
}
