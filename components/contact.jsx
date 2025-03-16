import styles from "./contact.module.css"

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        </div>

        <button className={styles.button}type="submit">Send Message</button>
      </form>
    </section>
  )
}

