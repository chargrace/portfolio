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
      I am a junior software engineer with a background in education. While teaching in Shenzhen, China, I became fascinated by the endless possibilities in tech, particularly how AI was used to test and teach students. I was inspired by the range of technologies used to enhance learning, such as translation pens and educational apps, and wanted to be part of this wave of innovation. I knew then I wanted to channel my passion for continuous improvement, my adaptability, and problem-solving skills to create tools that help others grow and learn.
      </p>
    </section>
  )
}

