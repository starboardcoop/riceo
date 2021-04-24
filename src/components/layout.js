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
import ExternalLink from "./external-link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const styles = {
  social: "text-3xl transform hover:text-white"
}


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
      <main>{children}</main>
      <footer className="bg-primary text-secondary px-8 py-4 flex flex-col space-y-2 md:grid md:grid-cols-3">
        <div></div>
        <div className="flex flex-row justify-center items-center text-sm text-center">
          <a href="https://starboard.coop">Designed by Starboard in Rhode Island</a>
        </div>
        <div className="flex flex-row space-x-4 justify-center md:justify-end">
          <ExternalLink to="https://twitter.com/rhodeislandceo" className={styles.social}><FontAwesomeIcon icon={faTwitter} /></ExternalLink>
          <ExternalLink to="https://www.facebook.com/RICenter4EmployeeOwnership/" className={styles.social}><FontAwesomeIcon icon={faFacebook} /></ExternalLink>
          <ExternalLink to="https://www.linkedin.com/company/riceo" className={styles.social}><FontAwesomeIcon icon={faLinkedinIn} /></ExternalLink>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
