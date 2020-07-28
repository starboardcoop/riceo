/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main class="main-container">{children}</main>
        <footer className={styles.footer}>
          <div></div>
          <div className={styles.watermark}>
            <span>Designed by Starboard in Rhode Island</span>
          </div>
          <div className={styles.socials}>
            <a href="https://twitter.com/rhodeislandceo" target="_blank" className={styles.social}><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href="https://www.facebook.com/RICenter4EmployeeOwnership/" target="_blank" className={styles.social}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.linkedin.com/company/riceo" target="_blank" className={styles.social}><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
