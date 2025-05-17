import Image from "next/image";
import styles from "@/src/styles/ebvPage.module.css";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import { Diphylleia } from "next/font/google";

export default function ProspectDataVisualizer() {
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

      <h1 className={styles.mainTitle}>Prospect Data Visualizer</h1>

      <div className={styles.sectionWrapper}>
        <Image
          src="/nameAndInfo.png"
          width={900}
          height={500}
          alt="ebv project home page"
          priority
          className={styles.siteScreenshots}
        ></Image>

        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}> Overview </span>
          <br />
          An interactive rookie guide commissioned by and built for the FFAstronauts fantasy football site. Users can fiter the main data table to compare prospects across classes and positions. In addition, a user can click on a player name to view metrics and data about the player in several different data visualizations and enter other players to compare them to in scatterplots and spider charts.
          <br />
          <br />
          Built with React, NextJs, MongoDb, AG Grid, ChartJs
          <br />
          <br />
          {/* Built using React, NextJs, MongoDb, CSS, Web APIs */}
          <Link
            href="https://prospect-pages.vercel.app/"
            className={styles.siteLink}
          >
            Go to Prospect Data Visualizer &rarr;
          </Link>
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      {/* section break */}

      <div className={styles.sectionWrapper}>
        <Image
          src="/scatterPlot.png"
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
          The FFAstronauts had a large of data and player grades from their analysis and film work, but not the technical knowledge to package it in a way the user could consume it, let alone interact with it. I have previously done freelance work for them so they hired me to build a UI for thier data. 
          <br /> <br />
          I wanted to elevate the product they had deleived in years prior and succeded in delivering on the clients vision and tripling the sales of the product from the previous year. 
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
        <Image
          src="/spidercharts.png"
          width={900}
          height={500}
          alt="ebv project shop page"
          className={styles.siteScreenshots}
        ></Image>
        <p className={styles.infoParagraph}>
          <span className={styles.sectionTitle}>Challenges faced</span>
          <br />
          The first challenge to building this actually turned out to be a positive. The client had a vision of what they wanted and how they wanted things to look and function. There were several of the conecepts that I had do some research to figure out how I could achieve that vision that the client had.
          <br /> <br />
          Another challenge came with the balance between leveraging libraries and needing custom control over the elements. I used ChartJs for the scatterplots and spidercharts and AG Grid for the data tables which I was able to achieve the desired look and feel of the data visualizations with, but I then had to read into their respective docs to figure out how to have fine grained control over aspects of the elements.
          <br /> <br />
          {/* The CSS was a challenge is places here as well as the layout changes
          with user interaction and I had to find creative was to display a lot
          of content on different screen sizes and keep a good UX for smaller
          screens. */}
        </p>
      </div>

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.sectionWrapper}>
        <Image
          src="/newHome.png"
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
          I really learned a ton building this app and working with the client on it. I had to go beyond the knowledge I had to figure out how to do things the client wanted. I learned to trust my inuition in a lot of places as well. There were times I was planning how to impliment a certian feature and asked Claude how they would recommened doing it and was able to read the suggestion and think I knew a better way to get the same result and was able to execute my plan. 
          <br /> <br />
          The other big lessons I learned were with the client interaction. I built out features and UI's that I thought looked and functioned really well that ended up not being used at all in the final product. I learned to make sure there is a well drawn out and detailed plan with the client before starting. Be flexable to changes after that, but have a more firm baseline understanding to start with 
        </p>
      </div>

      {/* <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}></div>
      </div> */}

      <Footer />
    </div>
  );
}
