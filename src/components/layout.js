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
        <footer>
          <div></div>
          <div>
            <span><a href="https://starboard.coop">Designed by Starboard in Rhode Island</a></span>
          </div>
          <div>
            <ExternalLink to="https://twitter.com/rhodeislandceo"><FontAwesomeIcon icon={faTwitter} /></ExternalLink>
            <ExternalLink to="https://www.facebook.com/RICenter4EmployeeOwnership/"><FontAwesomeIcon icon={faFacebook} /></ExternalLink>
            <ExternalLink to="https://www.linkedin.com/company/riceo"><FontAwesomeIcon icon={faLinkedinIn} /></ExternalLink>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
