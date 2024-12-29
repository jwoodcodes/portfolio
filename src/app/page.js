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
           I&apos;m Jay, a developer from Missouri. I am so happy to share
            what I&apos;ve been working on with you!
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
          I&apos;m Jay and I&apos;d love to work with you!
          <br />
          <br />

           I thrive on the challenge of taking abstract concepts and transforming them into tangible, user-friendly products that make tasks easier or more enjoyable for users. There is nothing better to me than working with a client and delivering exactly what they were looking for and having users get joy or utility out of apps and tools I build. I am always curious to learn and try new things and take on new challenges because I love expanding what I am capable of building and improving the skills I already have. 

          
          <br />
          <br />
  Having over a decade of management experience and my collaborative nature lets me work well with anyone. Having worked closely with and managed all kinds of people in high paced stressful environments, I take pride in, and am uniquely experienced in, getting along with all kinds of people and teams. I adapt easily to new environments and always stay open to others&apos; ideas. I really believe that the best work happens when everyone can see things from each other&apos;s perspective, keeps an open mind, and can take feedback to better themselves and what the team is working on.  
  <br />
  <br />
  As a genuinely positive person, I am always calm and positive when faced with challenges. My positive mindset, along with my problem-solving skills, helps me come up with creative solutions. Whether working solo or with a team, my aim is to always challenge myself and contribute to the team&apos;s success. I&apos;m excited to connect with you and explore how I can bring value to your team. 

          
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
