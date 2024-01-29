import Image from "next/image"
import styles from "@/src/styles/ebvPage.module.css"
import MainNav from "@/src/components/MainNav"
import Footer from "@/src/components/Footer"
import Link from "next/link"


export default function EBV() {
    return (
        <div className={styles.wholePageWrapper}>
            <MainNav projects={'/#projects'} about={'/#about'} contact={'/#contact'}/>
            <div>
            <span className={styles.navName}>Jay Wood</span>
            <h1 className={styles.mainTitle}>ElderBlossom View</h1>
            </div>


            <div className={styles.sectionWrapper}>
                <Image src='/ebvHomeScreenshot.png' width={900} height={500} alt="ebv project home page" priority className={styles.siteScreenshots}></Image>
            

                <p className={styles.infoParagraph}>

                    <Link href='https://ebv.vercel.app/'  className={styles.siteLink}>Go to ElderBlossom View &rarr;</Link>
                    <br />
                    * Overview *
                    <br /><br />
                    * ElderBlossom View is a business content and ecommerce site for an elderberry winery and event venue
                    <br /><br />
                    * features next.js dynamic routing, full cart functionality with local storage, static data fetching from MongoDb, and responsive tables
                    <br/><br/>
                    * Built using React, NextJs, MongoDb, CSS
                </p>
            </div>

            <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}></div>
      </div>

            {/* section break */}

            <div className={styles.sectionWrapper}>
                <p className={styles.infoParagraph}>
                    * Goal and Reason for building *
                    <br /><br />
                    * I built this because I know the owners of this winery and they are such beautiful people with a gorgous venue and products but their site design didnt show this to the world and I felt like I could do so
                    <br /> <br />
                    * My goal was to pick a color scheme that went with their products and to use a design that highlighted and showcased their venue and products and let them be the star
                </p>
                <Image src='/ebvScreenshot.png' width={900} height={500} alt="ebv project shop page" className={styles.siteScreenshots}></Image>
            
            </div>

            <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
      <Image src='/ebvScreenshot.png' width={900} height={500} alt="ebv project shop page" className={styles.siteScreenshots}></Image>
                <p className={styles.infoParagraph}>
                    * Challenges faced *
                    <br /><br />
                    * I needed the cart state to be mutable in multiple places and have access to the value globally to display it in the mainNav. I Leveraged React context and local storage to hold cart state and make it available throughout the app where it was needed. 
                    <br /> <br />
                    * Uses Next.js dynamic routing to route to specfic product or event pages from the shop and events pages. 
                </p>
                
            
            </div>

            <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
      
                <p className={styles.infoParagraph}>
                    * Lessons learned building ElderBlossom View *
                    <br /> <br />
                    * This was the first app I built with React and NextJs. I learned very quickly the importance of, and how to,  structure a NextJs app to keep the codebase easy to use and navigate.
                    <br /> <br />
                    * I had to learn to use some hooks and libraries that I had not used before. I used React context, CLSX, and use-shopping-cart here. It taught me not just how to use these specifically, but gave me more real world experience in reading docs and learning new solutions to solve a problem I have. 
                </p>
                
                <Image src='/ebvScreenshot.png' width={900} height={500} alt="ebv project shop page" className={styles.siteScreenshots}></Image>
            </div>

            {/* <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}></div>
      </div> */}

     

            <Footer />

        </div>
    )
}