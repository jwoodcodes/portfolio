import Image from 'next/image'
import styles from './page.module.css'
import MainNav from '../components/MainNav'

export default function Home() {
  return (
    <div className={styles.wholeMainPageWrapper}>
      <MainNav />
      <div className={styles.mainSectionWrapper}>
      <div className={styles.nameAndTitleWrapper}>
      <div className={styles.name}>Jay Wood</div>
      <span className={styles.jobTitle}>Web Developer</span>
      <div className={styles.mainSectionIntro}>
        Hi there! I&apos;m Jay, a web developer from Missouri. I love to take concepts and apps I wish existed and make them into a reality. I am so happy to share what i&apos;ve been working on with you!
        
      </div>
     </div>
     
      <div className={styles.mainImageContainer}>

      <Image src='/coloredSmoke.jpg' cover width='2000' height='1200' className={styles.mainPageImage} alt='coloerd smoke lines image'/>
      </div>
      </div>
      <div className={styles.projectsSectionWrapper}>
          <h2 className={styles.projectsHeader}>My Work</h2>
      </div>

    </div>
  )
}
