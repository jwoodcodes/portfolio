import Image from "next/image";
import styles from "./page.module.css";
import MainNav from "../components/MainNav";
import CardContainer from "../components/CardContainer";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainNav projects={"#projects"} about={"#about"} contact={"#contact"} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image
            src="/nightSkyOverLake.jpg"
            alt="Night sky over lake"
            fill
            priority
            quality={90}
            className={styles.heroImage}
            sizes="100vw"
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          <h2 className={styles.heroSubtitle}>Full Stack Developer</h2>
          <h1 className={styles.heroTitle}>Jay Wood</h1>
          <p className={styles.heroDescription}>
            Building robust, user-friendly applications with modern technologies.
            I transform abstract concepts into tangible, high-quality digital products.
          </p>
          <Link href="#projects" className={styles.heroCta}>
            View My Work
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section} id="projects">
        <h2 className={styles.sectionHeader}>Recent Work</h2>
        <CardContainer />
      </section>

      {/* About Section */}
      <section className={styles.section} id="about">
        <h2 className={styles.sectionHeader}>About Me</h2>
        <div className={styles.aboutContent}>
          I build the tools I wish existed.
          <br /><br />
          I am a developer always trying to build products and apps that are a joy to use and bring value to users. Whether it&apos;s complex fantasy sports analytics engines or polished business platforms, my goal is always the same: to build something unique, useful, and production-ready.
          <br /><br />
          I specialize in the full stack, leveraging technologies like React, Next.js, SQL databases and the most up to date AI tools to engineer complete solutions. From the database structure to the final pixel, I ensure every layer is built with purpose, performance, and the user in mind.
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section} id="contact">
        <h2 className={styles.sectionHeader}>Contact</h2>
        <div className={styles.contactContainer}>
          <p className={styles.contactText}>I&apos;d love to hear from you. Let&apos;s build something great together.</p>
          <a href="mailto:jwoodcodes@gmail.com" className={styles.contactEmail}>
            jwoodcodes@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
