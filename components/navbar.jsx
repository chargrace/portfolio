"use client"

import { useState, useEffect } from "react"
import styles from "./navbar.module.css"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"]
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={styles.navbar}>
      <a href="#about" className={activeSection === "about" ? styles.active : ""}>
        About Me
      </a>
      <a href="#projects" className={activeSection === "projects" ? styles.active : ""}>
        My Projects
      </a>
      <a href="#contact" className={activeSection === "contact" ? styles.active : ""}>
        Contact Me
      </a>
    </nav>
  )
}

