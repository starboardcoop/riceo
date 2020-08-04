import React from "react"
import Layout from "../../components/layout"
import styles from "./contact.module.css"

export default () => (
    <Layout>
        <form className={ styles.form }>
            <h1>Contact</h1>
            <input className={ styles.textBox } placeholder="Name"/>
            <input className={ styles.textBox } placeholder="Email"/>
            <textarea className={ styles.textArea } placeholder="Write something"/>
            <button class="button" type="submit">Send</button>
        </form>
    </Layout>
)