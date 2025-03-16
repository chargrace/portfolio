"use client";

import { useEffect, useRef } from "react";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import styles from "./page.module.css";
import SkillsContainer from "../components/skillsContainer";
import Footer from "@/components/footer";
// import Header from "@/components/header";

export default function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.5}
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
        console.log(`observing section ${ref.id}`);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
          <About />
      <main className={styles.container}>
        <section
          id="skills"
          ref={(el) => (sectionRefs.current[0] = el)}
          className={styles.section}
        >
          <SkillsContainer />
        </section>
        <section
          id="projects"
          ref={(el) => (sectionRefs.current[1] = el)}
          className={styles.section}
        >
          <Projects />
        </section>
        <section
          id="contact"
          ref={(el) => (sectionRefs.current[2] = el)}
          className={styles.section}
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
