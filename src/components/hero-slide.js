import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = (props) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "providence-rhode-island.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="div"
          className={props.className}
          id={props.id}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
            {props.children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection