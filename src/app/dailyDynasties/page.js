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
          Daily Dynasties is a fantasy football content and user tools site
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
          <Link
            href="https://dailydynasties.vercel.app/"
            className={styles.siteLink}
          >
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
          I built this app because I wanted to build a somethibg that was based
          around content I was passionate about. I believed I could make a
          product that was unique and good enough to be a production application
          with active users. This project presented an opportunity to challenge
          myself, learn new technologies, and apply them in a real-world
          context, pushing the boundaries of my skills as a developer.
          <br /> <br />
          My goal was to build unique user tools that I wish existed but did not
          exist elsewhere. The primary aim was to create tools for my personal
          use, while also providing value to others, thereby attracting traffic
          to the site and cultivating a dedicated user community.
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
        <Image
          src="/DDDynastyRankingsScreenshot.png"
          width={900}
          height={500}
          alt="ebv project shop page"
          className={styles.siteScreenshots}
        ></Image>
        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}>Challenges faced</span>
          <br />
          There is so much to this site and so much that the user never sees.
          There is a massive amount of work with APIs, data fetching, and data
          manipulation in javascript to get the data, work with it, build my own
          data structures, and push those to several mongoDb databases. A lot of
          the data that the user sees is able to be statically generated by
          nextJs because of this.
          <br /> <br />
          There are several interactive user tools on the site that require
          extensive and layered API calls. I had to do a lot of work with
          promises and async/await for the multiple API calls that were
          neccessary.
          <br /> <br />
          The CSS was a challenge is places here as well as the layout changes
          with user interaction and I had to find creative was to display a lot
          of content on different screen sizes and keep a good UX for smaller
          screens.
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
          This is the largest app I have built and I learned the hard way how
          important code structure is in a large application. I learned you need
          to make a plan for the overall layout and structure of the projects
          code and file structure before you start coding.
          <br /> <br />
          One thing I learned with this being my first application with real
          users is to bring the client or user in sooner for feedback. I spent a
          lot of time building things a certain way and then having to rewrite
          code when it could have been avoided if I solicited user feedback
          sooner.
        </p>
      </div>

      {/* <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}></div>
      </div> */}

      <Footer />
    </div>
  );
}
