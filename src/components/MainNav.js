import Link from "next/link";
import styles from '@/src/app/page.module.css'


export default function MainNav ({projects, about, contact}) {
    return (
       <div className={styles.mainNav}>
        
        <Link href='/' className={styles.navLink}>
        <div className={styles.firstLetterOfFirstNavLink}>H</div>
        <div className={styles.nonLastLetterNav}>o</div>
        <div className={styles.nonLastLetterNav}>m</div>
        <div className={styles.lastLetter}>e</div>
        </Link>
        <Link href={projects} className={styles.navLink}>
        <div className={styles.nonLastLetterNav}>P</div>
        <div className={styles.nonLastLetterNav}>r</div>
        <div className={styles.nonLastLetterNav}>o</div>
        <div className={styles.nonLastLetterNav}>j</div>
        <div className={styles.nonLastLetterNav}>e</div>
        <div className={styles.nonLastLetterNav}>c</div>
        <div className={styles.nonLastLetterNav}>t</div>
        <div className={styles.lastLetter}>s</div>
        </Link>
        <Link href={about} className={styles.navLink}>
        <div className={styles.nonLastLetterNav}>A</div>
        <div className={styles.nonLastLetterNav}>b</div>
        <div className={styles.nonLastLetterNav}>o</div>
        <div className={styles.nonLastLetterNav}>u</div>
        <div className={styles.lastLetter}>t</div>
        
        </Link>
        <Link href={contact} className={styles.navLink}>
        <div className={styles.nonLastLetterNav}>C</div>
        <div className={styles.nonLastLetterNav}>o</div>
        <div className={styles.nonLastLetterNav}>n</div>
        <div className={styles.nonLastLetterNav}>t</div>
        <div className={styles.nonLastLetterNav}>a</div>
        <div className={styles.nonLastLetterNav}>c</div>
        <div className={styles.lastLetter}>t</div>
        
        </Link>
       </div> 
    )
}

{/* <Link href='/' className={styles.navLink}>H</Link>
        <Link href='/' className={styles.navLink}>o</Link>
        <Link href='/' className={styles.navLink}>m</Link>
        <Link href='/' className={styles.navLink}>e</Link>
        <Link href={projects} className={styles.navLink}>Projects</Link>
        <Link href={about} className={styles.navLink}>About</Link> 
        <Link href={contact} className={styles.navLink}>Contact</Link> */}


    