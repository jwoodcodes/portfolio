import styles from "@/src/styles/cardComponent.module.css";
import ProjectCard from "../components/ProjectCard";

export default function CardContainer() {
  return (
    <div className={styles.cardGridContainer}>
      <ProjectCard
        imgSrc="/OTCEngineMain.png"
        altText="OTC Fantasy"
        title="OTC Fantasy"
        subTitle="AI Powered Fantasy Data"
        siteDsc="Fantasy football platform featuring an AI-driven natural language search, market-based dynasty values, and interactive tools. Built with a custom evals pipeline."
        projectPageRef="/otcFantasy"
      />
      <ProjectCard
        imgSrc="/DDDarkTradeAnalyzer.png"
        altText="Daily Dynasties"
        title="Daily Dynasties"
        subTitle="data & interactive user tools app"
        siteDsc="Content and tools site built on a large backend and leveraging multiple databases and APIs. Heavely interactive with real time user tools. Built using React, Nextjs, and MongoDb"
        projectPageRef="/dailyDynasties"
      />
      <ProjectCard
        imgSrc="/originalHome.png"
        altText="Prospect Data Visualizer"
        title="Rookie Guide"
        subTitle="Football Data Visualizer"
        siteDsc="A football prospect data interface with interactive filters and comaparison visualizations. Built using React, Nextjs, AgGrid, and MongoDb"
        projectPageRef="/prospectDataVisualizer"
      />
      {/* <ProjectCard
        imgSrc="/unMain.png"
        altText="UN Projections Builder"
        title="Projections Builder"
        subTitle="Football Projections App"
        siteDsc="A football projection builder with a user friendly interface and data visualizations. Built using React, Nextjs, AgGrid, and MongoDb"
        projectPageRef="/projectionsBuilder"
      /> */}

    </div>
  );
}
