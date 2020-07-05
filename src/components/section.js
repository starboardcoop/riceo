import React from "react"
import styles from "./section.module.css"

const Section = (props) => (
    <section id={props.id} className={styles.section}>
        {
            props.html != null &&
            <div className={styles.centered} dangerouslySetInnerHTML={{__html: props.html}}></div>
        }
        {
            props.html == null &&
            <div className={styles.centered}>
                {props.children}
            </div>
        }
    </section>
)

export default Section