import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./header.module.css"
import logo from "../images/logo.png"

const Links = () => (
  <StaticQuery
    query={graphql`
      {
        navigationJson {
          logo {
            alt
          }
          links {
            link
            label
          }
        }
      }
    `}

    const render ={data => (
      <>
        <Link className={styles.siteTitle} to="/">
          <img src={logo} alt={data.navigationJson.logo.alt} />
        </Link>
        {data.navigationJson.links.map(link => (
          <Link to={link.link}>{link.label}</Link>
        ))}
      </>
    )}
  />
)

const Header = () => (
  <header className={styles.siteHeader}>
    <nav>
      <Links />
    </nav>
    <aside>
      <Link className="button" to="/contact">Contact</Link>
    </aside>
  </header>
)

export default Header
