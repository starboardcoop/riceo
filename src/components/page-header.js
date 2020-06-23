import React from "react"
import { Link } from "gatsby"
import styles from "./page-header.module.css"

export default () => (
    <header className={styles.pageHeader}>
        <nav>
            <Link to="#">Worker co-ops</Link>
            <Link to="#">Who we are</Link>
        </nav>
    </header>
)