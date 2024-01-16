import Image from "next/image";
import styles from "@/src/styles/ebvPage.module.css";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import Link from "next/link";

export default function EBV() {
  return (
    <div className={styles.wholePageWrapper}>
      <MainNav
        projects={"/#projects"}
        about={"/#about"}
        contact={"/#contact"}
      />
      <span className={styles.navName}>Jay Wood</span>
      <h1 className={styles.mainTitle}>ElderBlossom View</h1>

      <div className={styles.sectionWrapper}>
        <Image
          src="/ebvHomeScreenshot.png"
          width={900}
          height={500}
          alt="ebv project home page"
          priority
          className={styles.siteScreenshots}
        ></Image>

        <p className={styles.infoParagraph}>
          <Link href="https://ebv.vercel.app/" className={styles.siteLink}>
            Go to ElderBlossom View &rarr;
          </Link>
          <br />
          * ElderBlossom View is a business content and ecommerce site for an
          elderberry winery and event venue
          <br />
          <br />
          * features next.js dynamic routing, full cart functionality with local
          storage, static data fetching from MongoDb, and responsive tables
          <br />
          <br />* Built using React, NextJs, MongoDb, CSS
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      {/* section break */}

      <div className={styles.sectionWrapper}>
        <p className={styles.infoParagraph}>
          * I built this because I know the owners of this winery and they are
          such beautiful people with a gorgous venue and products but their site
          design didnt show this to the world and I felt like I could do so
          <br /> <br />* My goal was to pick a color scheme that went with their
          products and to use a design that highlighted and showcased their
          venue and products and let them be the star
        </p>
        <Image
          src="/ebvScreenshot.png"
          width={900}
          height={500}
          alt="ebv project shop page"
          className={styles.siteScreenshots}
        ></Image>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
        <Image
          src="/photogalleryscreenshotToUse.png"
          width={900}
          height={500}
          alt="ebv project shop page"
          className={styles.siteScreenshots}
        ></Image>
        <p className={styles.infoParagraph}>
          sfds dsfdsfs fdsf sdfsd fdsf dsfds fdsf sdfdsf dsfd sfdsf dsfds fsd
          fdsfds fdsf dsfds fdsf dsfd sfds fds fdsf dsf dsfds fsd fdsf dsf sdfd
          sfds fdsf sds
        </p>
      </div>

      <Footer />
    </div>
  );
}
