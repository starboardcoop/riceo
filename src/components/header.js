import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.siteHeader}>
    <nav>
      <Link className={styles.siteTitle} to="/">{siteTitle}</Link>
      <Link to="/">About</Link>
      <Link to="/learn">Learn</Link>
      <Link to="/">Resources</Link>
      <Link to="/">News</Link>
    </nav>
    <aside>
      <Link className="button" to="/">Contact</Link>
    </aside>
  </header>
)

export default Header
