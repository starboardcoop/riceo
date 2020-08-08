import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import PageNavigation from "../components/page-navigation"
import Banner from "../components/banner"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Sections = edges
    .map(edge => <Section id={edge.node.frontmatter.id} key={edge.node.frontmatter.id} html={edge.node.html}/>)
  return <Layout><PageNavigation sections={edges.map(edge => edge.node.frontmatter)} /><Banner title="Rhode Island CEO" content="The Rhode Island Center for Employee Ownership develops technical, financial assistance, and regulatory support to advance employee ownership in the State of Rhode Island." />{Sections}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
query AboutSectionQuery {
    allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {fileAbsolutePath: {regex: "/about/"}}) {
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

