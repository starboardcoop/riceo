import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.siteHeader}>
    <nav>
      <Link to="/">About</Link>
      <Link to="/">Learn</Link>
      <Link to="/">Resources</Link>
      <Link to="/">News</Link>
    </nav>
    <aside>
      <Link className={styles.button} to="/">Contact</Link>
    </aside>
  </header>
)

export default Header
