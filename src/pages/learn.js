import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import PageNavigation from "../components/page-navigation"
import Banner from "../components/banner"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Sections = edges
    .map(edge => <Section id={edge.node.frontmatter.id} key={edge.node.frontmatter.id} html={edge.node.html}/>)
  return <Layout><SEO title="Learn" /><PageNavigation sections={edges.map(edge => edge.node.frontmatter)} /><Banner title="Learn" subtitle="" content="Worker cooperatives are the better way to do business."/>{Sections}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
query LearnSectionQuery {
  allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {fileAbsolutePath: {regex: "/learn/"}}) {
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
