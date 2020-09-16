import React from "react"
import Layout from "../../components/layout"
import styles from "./contact.module.css"
import SEO from "../../components/seo"

export default () => (
    <Layout>
        <SEO title="Contact" />
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className={styles.form}>
            <h1>Contact</h1>
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name" hidden="true">Name</label>
            <input id="name" name="name" className={styles.textBox} placeholder="Name"/>

            <label htmlFor="email" hidden="true">Email</label>
            <input id="email" name="email" type="email" className={styles.textBox} placeholder="Email"/>

            <label htmlFor="message" hidden="true">Message</label>
            <textarea id="message" name="message" className={styles.textArea} placeholder="Write something"/>

            <button class="button" type="submit">Send</button>
        </form>
    </Layout>
)