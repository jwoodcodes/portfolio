import styles from "@/src/styles/cardComponent.module.css";
import ProjectCard from "../components/ProjectCard";

export default function CardContainer() {
  return (
    <div className={styles.cardGridContainer}>
      <ProjectCard
        imgSrc="/DDAnalyzerScreenshot.png"
        altText="Daily Dynasties"
        title="Daily Dynasties"
        subTitle="data & interactive user tools app"
        siteDsc="Fantasy football content and tools site built on a large backend and leveraging multiple databases and APIs. Heavely interactive with real time user tools. Built using React, Nextjs, and MongoDb"
        projectPageRef="/dailyDynasties"
      />
      <ProjectCard
        imgSrc="/UNMain.png"
        altText="UN Projections Builder"
        title="Projections Builder"
        subTitle="Football Projections App"
        siteDsc="A football projection builder with a user friendly interface and data visualizations. Built using React, Nextjs, AgGrid, and MongoDb"
        projectPageRef="/projectionsBuilder"
      />
      {/* <ProjectCard
        imgSrc="/ebvHomeScreenshot.png"
        altText="ElderBlossom View"
        title="ElderBlossom View"
        subTitle="business & ecommerce site"
        siteDsc="Business content site with estore and fully functioning cart for an elderberry winery and events venue. Built using React, Nextjs, and MongoDb"
        projectPageRef="/ebv"
      /> */}
    </div>
  );
}
