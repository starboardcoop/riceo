import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./header.module.css"

const Links = () => (
  <StaticQuery
    query={graphql`
   {
      navigationJson {
        links {
          link
          label
        }
      }
    }
    `}

    render={data => (
      data.navigationJson.links.map(link => (
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
