import styles from "./projects.module.css"

const projects = [
  { id: 1, title: "Chinese idiom app", description: "A Next.js app with static API created to allow users to search through a bank of chinese idioms easily.", links: "See github repo here" },
  { id: 2, title: "Movie recommendation app", description: "A Next.js application created to make searching for movie and TV show recommendations easier and without a user-friendly interface.", links: "See github repo here" },
]

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.links}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

