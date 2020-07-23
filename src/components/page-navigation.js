import React from "react"
import { Link } from "gatsby"
import styles from "./page-header.module.css"

export default (props) => (
    <header className={styles.pageHeader}>
        <nav>
            { props.sections.map(section => <Link to={`#${section.id}`} key={section.id}>{section.title}</Link>) }
        </nav>
    </header>
)