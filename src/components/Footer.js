
import React from 'react';
import styles from '@/src/styles/footer.module.css'
import Link from 'next/link'


import { Github } from 'react-feather'


export default function Footer () {
    return (
        
        <div className={styles.wholeWrapper}>
            
            <Link href="https://github.com/jwoodcodes">
                {/* <Github 
                size={32}
                strokeWidth={1}
                color="white"
                />          */}
            </Link>
        </div>
    )
}