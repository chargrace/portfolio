import Image from "next/image"
import styles from "./about.module.css"

export default function About() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.imageContainer}>
        <Image src="/placeholder.svg" alt="Profile picture" width={200} height={200} className={styles.profileImage} />
      </div>
      <p>
        Hello! I'm a passionate developer with experience in creating modern web applications. I love turning ideas into
        reality through code.
      </p>
    </section>
  )
}

