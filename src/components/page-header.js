import React from "react"
import { Link } from "gatsby"
import styles from "./page-header.module.css"

export default () => (
    <header className={styles.pageHeader}>
        <nav>
            <Link to="#">First</Link>
            <Link to="#">Second</Link>
            <Link to="#">Third</Link>
        </nav>
    </header>
)