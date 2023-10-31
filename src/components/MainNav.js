import Link from "next/link";
import styles from '@/src/app/page.module.css'


export default function MainNav () {
    return (
       <div className={styles.mainNav}>
        <Link href='/' className={styles.navLink}>Home</Link>
        <Link href='/' className={styles.navLink}>About</Link>
        <Link href='/' className={styles.navLink}>Projects</Link>
        </div> 
    )
}



    