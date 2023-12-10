import styles from '@/src/styles/cardComponent.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({imgSrc, altText, siteDsc, title, subTitle, projectPageRef}) {
    
    return (
       
        <div className={styles.cardContainer }>
            <Image src={imgSrc} height='200' width='350' alt={altText} className={styles.cardImg}/>
            <div className={styles.projectCardTitle}>{title}<br/>{subTitle}</div>
            <div className={styles.projectCardBriefDisc}>{siteDsc}</div>
            <Link href={projectPageRef} className={styles.projectCardLinks}>Learn More & explore my journey building this app &rarr;</Link>
        </div>
        
    )
}