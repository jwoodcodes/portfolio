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
          <h1 className={styles.name}>Jordan Wood</h1>
          <span className={styles.jobTitle}>Web Developer</span>
          <div className={styles.mainSectionIntro}>
            Hi there! I&apos;m Jordan a web developer from Missouri. I love to
            take concepts and them into a reality. I am so happy to share what
            i&apos;ve been working on with you!
          </div>
        </div>

        <div className={styles.mainImageContainer}>
          <Image
            src="/coloredSmoke.jpg"
            cover
            width="2000"
            height="1200"
            className={styles.mainPageImage}
            alt="coloerd smoke lines image"
          />
        </div>
      </div>

      {/* projects section */}
      <div className={styles.sectionDividerWrapper}>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.projectsSectionWrapper} id="projects">
        <div className={styles.myWorkHeaderContainer}>
          <h2 className={styles.projectsHeader}>My Work</h2>
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
          In early 2001 I stood in the kitchen of an empty restaurant looking
          out a window at a barren downtown. Nothing moved. There was a distinct
          feeling that the world as we knew it was coming to an end. I was
          listening to a favorite buddhism podcast and as the host relayed
          messages of when one door closes another door opens I was struck by
          the question. <br />
          What door will I choose to open now that the world&apos;s closed
          it&apos;s door?
          <br />
          <br />
          As I was looking forward and pondereing what was next, I decided to
          look back. I always had a curiosity about code since my high school
          days playing MUDD&apos;s and remembered the feeling of desperately
          wanting to know how to take an idea and turn it into an experience for
          someone on a screen. The world had moved on, so I was going to too.
          All seemed possible as I dove in with all the gusto of one with the
          wind at their backs and limitless futures before them.
          <br />
          <br />
          Since that day my curiosity and excitement has only gained steam. I
          have taken things I thought could be better and built better versions.
          Taken ideas and tools I had mearly wished existed and made them into
          apps anyone in the world can pull up in front of them and use. Every
          time I pull up my code editor on a new project, I am back standing in
          front of that window, with a blank new world in front of me, and I{" "}
          <em>cannot wait</em> to share that geniuine joy with you!
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
