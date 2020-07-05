import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Section from "../../components/section"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Sections = edges
    .map(edge => <Section id={edge.node.frontmatter.id} html={edge.node.html}/>)
  return <Layout>{Sections}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
query PageSectionQuery {
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    id
                    order
                }
                html
            }
        }
    }
}
`

