import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./header.module.css"

const Links = () => (
  <StaticQuery
    query={graphql`
      query {
        settingsJson {
          links {
            label
            link
          }
        }
      }
    `}

    render={data => (
      data.settingsJson.links.map(link => (
        <Link to={link.link}>{link.label}</Link>
      ))
    )}
  />
)

const Header = ({ siteTitle }) => (
  <header className={styles.siteHeader}>
    <nav>
      <Link className={styles.siteTitle} to="/">{siteTitle}</Link>
      <Links />
    </nav>
    <aside>
      <Link className="button" to="/contact">Contact</Link>
    </aside>
  </header>
)

export default Header
