import React from "react"
import styles from "./banner.module.css"

export default (props) => (
    <header className={styles.banner}>
        <div className={styles.placard}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h3>{props.content}</h3>
        </div>
    </header>
)