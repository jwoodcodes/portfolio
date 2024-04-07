import Image from "next/image";
import styles from "@/src/styles/ebvPage.module.css";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import { Diphylleia } from "next/font/google";

export default function DailyDynasties() {
  return (
    <div className={styles.wholePageWrapper}>
      <div className={styles.nameAndNav}>
        <div className={styles.navName}>Jay Wood</div>
      </div>

      <MainNav
        projects={"/#projects"}
        about={"/#about"}
        contact={"/#contact"}
      />

      <h1 className={styles.mainTitle}>Daily Dynasties</h1>

      <div className={styles.sectionWrapper}>
        <Image
          src="/DDScreenshot.png"
          width={900}
          height={500}
          alt="ebv project home page"
          priority
          className={styles.siteScreenshots}
        ></Image>

        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}> Overview </span>
          <br />
          Daily Dynasties is a Fantasy football content and user tools site
          built on a large backend and leveraging multiple databases and APIs.
          Heavely interactive with real time user tools. Currently in production
          with active users
          <br />
          <br />
          features next.js static props, mongoDB databases, API and database
          data fetching, robust data manipulating backend, and sortable React
          data tables
          <br />
          <br />
          Built using React, NextJs, MongoDb, CSS, Web APIs
          <Link href="https://ebv.vercel.app/" className={styles.siteLink}>
            Go to Daily Dynasties &rarr;
          </Link>
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      {/* section break */}

      <div className={styles.sectionWrapper}>
        <Image
          src="/DDAnalyzerScreenshot.png"
          width={900}
          height={500}
          alt="ebv project shop page"
          className={styles.siteScreenshots}
        ></Image>
        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}>
            Goal and Reason for building
          </span>
          <br />
          I built this because I know the owners of this winery and they are
          such beautiful people with a gorgous venue and products but their site
          design didnt show this to the world and I felt like I could do so
          <br /> <br />
          My goal was to pick a color scheme that went with their products and
          to use a design that highlighted and showcased their venue and
          products and let them be the star
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
        <Image
          src="/DDDynastyRankings.png"
          width={900}
          height={500}
          alt="ebv project shop page"
          className={styles.siteScreenshots}
        ></Image>
        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}>Challenges faced</span>
          <br />
          I needed the cart state to be mutable in multiple places and have
          access to the value globally to display it in the mainNav. I Leveraged
          React context and local storage to hold cart state and make it
          available throughout the app where it was needed.
          <br /> <br />
          Uses Next.js dynamic routing to route to specfic product or event
          pages from the shop and events pages.
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
        <Image
          src="/DDWeeklyProjections.png"
          width={900}
          height={500}
          alt="ebv project shop page"
          className={styles.siteScreenshots}
        ></Image>
        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}>
            Lessons learned while building
          </span>
          <br />
          This was the first app I built with React and NextJs. I learned very
          quickly the importance of, and how to, structure a NextJs app to keep
          the codebase easy to use and navigate.
          <br /> <br />I had to learn to use some hooks and libraries that I had
          not used before. I used React context, CLSX, and use-shopping-cart
          here. It taught me not just how to use these specifically, but gave me
          more real world experience in reading docs and learning new solutions
          to solve a problem I have.
        </p>
      </div>

      {/* <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}></div>
      </div> */}

      <Footer />
    </div>
  );
}
