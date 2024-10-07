import Image from "next/image";
import styles from "./page.module.css";
import MainNav from "../components/MainNav";
import CardContainer from "../components/CardContainer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.wholeMainPageWrapper}>
      <MainNav projects={"#projects"} about={"#about"} contact={"#contact"} />
      <div className={styles.mainSectionWrapper}>
        <div className={styles.nameAndTitleWrapper}>
          <h1 className={styles.name}>Jay Wood</h1>
          <span className={styles.jobTitle}>Web Developer</span>
          <div className={styles.mainSectionIntro}>
           I&apos;m Jay, a web developer from Missouri. I love to
            take concepts and turn them into reality. I am so happy to share
            what i&apos;ve been working on with you!
          </div>
        </div>

        <div className={styles.mainImageContainer}>
          <Image
            src="/nightSkyOverLake.jpg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // width={900}
            // height={700}
           
            fill
            priority
            className={styles.mainPageImage}
            alt="night sky over lake"
            quality={80}
          />
        </div>
      </div>

      {/* projects section */}
      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.projectsSectionWrapper} id="projects">
        <div className={styles.myWorkHeaderContainer}>
          <h2 className={styles.projectsHeader}>Recent Work</h2>
        </div>
        <CardContainer />
      </div>

      {/* about section */}

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.aboutSectionWrapper} id="about">
        <h2 className={styles.aboutSectionHeader}>About Me</h2>
        <section className={styles.aboutMeMainSection}>
          Hi, I&apos;m Jay and I am so happy you&apos;re here!
          <br />
          <br />

          As a developer, I&apos;m driven by an never ending curiosity and a passion for turning ideas into reality. Every project I work on I am driven by the excitement of learning something new and the thrill of solving complex problems. I thrive on the challenge of taking abstract concepts and transforming them into tangible, user-friendly products that make tasks easier or open new abilites to users. Whether it&apos;s learning a new skill or building a product I am passionate about, I approach each task with enthusiasm and determination.
          <br />
          <br />
  My many years of management experience and my collaborative nature allow me to work closely with anyone. I believe that the best solutions emerge when diverse minds come together, and I take pride in my ability to work seamlessly with any team. My adaptability and open-minded approach allow me to integrate quickly into new environments, contributing positively to any team while always being receptive to others inputs and ideas. I truly believe that the best work gets done when everyone has the ability to see things from the other persons point of view, keeps an open mind, and is able to take criticism and turn it into better solutions.  
  <br />
  <br />
  In the face of challenges or setbacks, I maintain an unwavering positive attitude. I see obstacles not as roadblocks, but as opportunities for growth and improvement. This optimism, combined with my problem-solving skills, enables me to navigate through difficulties with resilience and creativity. I&apos;m always eager to embrace new technologies and methodologies, knowing that each challenge overcome adds to my skillset and makes me a more versatile developer. My goal is always to push myself when working independently and to be a valuable and collaborative member when working with a team. I cannot wait to hear from you and discuss how I could be of value to your team. 

          
        </section>
      </div>

      {/* contact section */}

      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.contactSectionWrapper} id="contact">
        <h2 className={styles.contactSectionHeading}>Contact</h2>
        <div className={styles.contactMessage}>
          I&apos;d love to work with you, reach me at
          <br />
          <br />
          jwoodcodes@gmail.com
        </div>
      </div>
      <Footer />
    </div>
  );
}
