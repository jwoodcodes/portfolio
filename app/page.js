import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wholeMainPageWrapper}>
      <div className={styles.test1}>testing light greens</div>
      <div className={styles.test2}>testing primary greens</div>
      <div className={styles.test3}>testing dark greens</div>
      <div className={styles.test4}>testing light blue</div>
      <div className={styles.test5}>testing primary blue</div>
      <div className={styles.test6}>testing dark blue</div>
      <div className={styles.test7}>testing light purple</div>
      <div className={styles.test8}>testing primary purple</div>
      <div className={styles.test9}>testing dark purple</div>
    </div>
  )
}
