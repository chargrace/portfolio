"use client";

import { useEffect, useRef } from "react";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import styles from "./page.module.css";

export default function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>Charlotte Bell</h1>
      </header>
      <Navbar />
      <main className={styles.container}>
        <section
          id="about"
          ref={(el) => (sectionRefs.current[0] = el)}
          className={styles.section}
        >
          <About />
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
    </>
  );
}
