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
        <div className={styles.navName}>Jordan Wood</div>
      </div>

      <MainNav
        projects={"/#projects"}
        about={"/#about"}
        contact={"/#contact"}
      />

      <h1 className={styles.mainTitle}>Football Projections App</h1>

      <div className={styles.sectionWrapper}>
        <Image
          src="/unPlayerLevel.png"
          width={900}
          height={500}
          alt="Projections builder app player projections"
          priority
          className={styles.siteScreenshots}
        ></Image>

        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}> Overview </span>
          <br />A football projection building app.
          {/* I built for myself and the people I work with at the Undroppables fantasy football.  */}
          The app allows you to build projections for a number of stats and
          fantasy points for all teams and players, stores them in local
          storage, and creates dynamic tables for all of the users projections.
          <br />
          <br />
          Built using React, Nextjs, agGrid, and MongoDb
          <Link
            href="https://undroppables.vercel.app/toolkit/projectionBuilder"
            className={styles.siteLink}
          >
            Go to Projections Builder app &rarr;
          </Link>
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      {/* section break */}

      <div className={styles.sectionWrapper}>
        <Image
          src="/unTeamLevel.png"
          width={900}
          height={500}
          alt="Team level football projections"
          className={styles.siteScreenshots}
        ></Image>
        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}>
            Goal and Reason for building
          </span>
          <br />
          My goal was to make an app that was simple and easy to use so that
          anyone that wanted to could easily build projections for any player or
          team. It is something a lot of people want to do but its too
          complicated so my goal was to build something that was approachable
          and anyone could use.
          {/* <br /> <br />I built this because people I work with said they wanted
          to make their own projections and the app they used to use was no
          longer in production so they asked if I could build them something to
          use. */}
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
        <Image
          src="/unProjectionsGrid.png"
          width={900}
          height={500}
          alt="stats grid of football projecions builder app"
          className={styles.siteScreenshots}
        ></Image>
        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}>Challenges faced</span>
          <br />
          This app involved a ton of React forms and state and data management.
          The app has to bring in data from multiple databases for the team
          level and individual player data. One challenege I had was how to
          handle storage and updating of data as a user builds out projections.
          There is also the possability of a user stopping part way through. I
          settled on building out objects that get updated as a user goes along
          and each time the user finishes a subsection the object in local
          storage gets updated.
          <br />
          <br />
          The other main challenge was how to display the data to the user. I
          did some searching and spent some time comparing the pros and cons of
          tanstack table and agGrid. In the end I used AgGrid for the first time
          for this. After some time reading the docs I was very happy with the
          results I was able to achieve.
        </p>
      </div>

      {/* <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}></div>
      </div> */}

      <Footer />
    </div>
  );
}
