import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Section from "../../components/section"
import PageNavigation from "../../components/page-navigation"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Sections = edges
    .map(edge => <Section id={edge.node.frontmatter.id} html={edge.node.html}/>)
  return <Layout><PageNavigation sections={edges.map(edge => edge.node.frontmatter)} />{Sections}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
query PageSectionQuery {
    allMarkdownRemark(sort: {fields: frontmatter___order}) {
        edges {
            node {
                frontmatter {
                    id
                    title
                    order
                }
                html
            }
        }
    }
}
`

