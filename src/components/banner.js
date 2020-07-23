import React from "react"
import styles from "./banner.module.css"

export default () => (
    <header className={styles.banner}>
        <div className={styles.placard}>
            <h1>Page Title</h1>
            <h2>What in the hell is a co-op, dawg?</h2>
            <h3>Once upon a time, there lived an old hag named Maggie Thatcher, who thought there's no such thing as society. She was right in thinking there is no such thing as society.</h3>
        </div>
    </header>
)