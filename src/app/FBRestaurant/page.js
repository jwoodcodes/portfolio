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

      <h1 className={styles.mainTitle}>Flatbranch Pub</h1>

      <div className={styles.sectionWrapper}>
        <Image
          src="/fbScreenshot.png"
          width={900}
          height={500}
          alt="ebv project home page"
          priority
          className={styles.siteScreenshots}
        ></Image>

        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}> Overview </span>
          <br />
          Flatbranch Pub is a restaurant and bar content site. It is built
          almost exclusivly with CSS, SASS, and some vanilla javascript. It has
          a user interactive food menu and beer menu.
          <br />
          <br />
          Built using CSS, SASS, and javascrpt
          <Link href="https:/myfbpage.vercel.app/" className={styles.siteLink}>
            Go to Flatbranch Pub &rarr;
          </Link>
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      {/* section break */}

      <div className={styles.sectionWrapper}>
        <Image
          src="/FBBeers.png"
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
          My goal was to make a better site for the restaurant I worked for
          leveraging the minimum amount of code as possible. I did not like the
          site that they had I wanted to show them I could make a better one
          <br /> <br />I built this because I wanted to build something that did
          not use any frameworks. I wanted to build a site that was built with
          just CSS and the minimal amount of javscript needed for the minimal
          user functionality that was neccessary.
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
        <Image
          src="/fbMenu.png"
          width={900}
          height={500}
          alt="ebv project shop page"
          className={styles.siteScreenshots}
        ></Image>
        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}>Challenges faced</span>
          <br />
          <br /> <br />
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
        <Image
          src="/fbShop.png"
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
          <br /> <br />
        </p>
      </div>

      {/* <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}></div>
      </div> */}

      <Footer />
    </div>
  );
}
