
import React from 'react';
import styles from '@/src/styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image';


// import { Github } from 'react-feather'


export default function Footer () {
    return (
        
        <div className={styles.wholeWrapper}>
            
        <Link href='https://github.com/jwoodcodes'>
          <Image
            src='/github-mark-white.png'
            width={60}
            height={60}
            alt="github link"
          ></Image>
        </Link>
        <div className={styles.myName}>Jay Wood 2023</div>
        <Link href='https://www.linkedin.com/in/jay-wood-131432263/'>
          <Image
            src='/linkedin.png'
            width={80}
            height={80}
            alt="github link"
          ></Image>
        </Link>
        </div>
    )
}