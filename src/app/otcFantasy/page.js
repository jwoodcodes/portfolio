import Image from "next/image";
import styles from "@/src/styles/ebvPage.module.css";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import Link from "next/link";

export default function OTCFantasy() {
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

            <h1 className={styles.mainTitle}>OTC Fantasy</h1>

            {/* Section 1: Overview / AI Interface Highlight */}
            <div className={styles.sectionWrapper}>
                <Image
                    src="/OTCEngineMain.png"
                    width={900}
                    height={500}
                    alt="OTC Fantasy Main Interface"
                    priority
                    className={styles.siteScreenshots}
                ></Image>

                <p className={styles.infoParagraph}>
                    <span className={styles.sectionTitle}> AI Driven Data Interface </span>
                    <br />
                    OTC Fantasy features a groundbreaking AI-driven data interface that allows users to query complex stats using natural language.
                    <br /><br />
                    I developed a custom natural language to SQL search engine, powered by a fine-tuned system prompt and a custom-built evaluations pipeline to ensure accuracy. Users can simply ask questions like "Who had the most rushing yards in week 10?" and get instant data-backed answers.
                    <br />
                    <Link
                        href="https://otc-fantasy.com/"
                        className={styles.siteLink}
                    >
                        Go to OTC Fantasy &rarr;
                    </Link>
                </p>
            </div>

            <div className={styles.sectionDividerWrapper}>
                <div className={styles.sectionDivider}></div>
            </div>

            {/* Section 2: Dynasty Values */}
            <div className={styles.sectionWrapper}>
                <Image
                    src="/OTCEngineWeeklyView.png"
                    width={900}
                    height={500}
                    alt="OTC Fantasy Dynasty Market Values"
                    className={styles.siteScreenshots}
                ></Image>
                <p className={styles.infoParagraph}>
                    <span className={styles.sectionTitle}>
                        Market Based Dynasty Values
                    </span>
                    <br />
                    Beyond standard rankings, OTC Fantasy allows users to track player values based on real-world market and trade data.
                    <br /> <br />
                    The platform aggregates data to provide realistic "market blue book" values, helping users make informed trade decisions in their dynasty leagues.
                </p>
            </div>

            <div className={styles.sectionDividerWrapper}>
                <div className={styles.sectionDivider}></div>
            </div>

            {/* Section 3: Tools & Charts */}
            <div className={styles.sectionWrapper}>
                <Image
                    src="/OTCEngineChartView.png"
                    width={900}
                    height={500}
                    alt="OTC Fantasy Chart View"
                    className={styles.siteScreenshots}
                ></Image>
                <p className={styles.infoParagraph}>
                    <span className={styles.sectionTitle}>Interactive Tools</span>
                    <br />
                    The site includes a suite of custom tools including articles, trade calculators, and interactive visualizations.
                    <br /> <br />
                    Built with React and Next.js, the dashboard offers a responsive, high-performance experience for analyzing complex football datasets.
                </p>
            </div>

            <Footer />
        </div>
    );
}
