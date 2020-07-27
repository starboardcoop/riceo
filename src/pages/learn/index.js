import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Section from "../../components/section"
import PageNavigation from "../../components/page-navigation"
import Banner from "../../components/banner"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Sections = edges
    .map(edge => <Section id={edge.node.frontmatter.id} key={edge.node.frontmatter.id} html={edge.node.html}/>)
  return <Layout><PageNavigation sections={edges.map(edge => edge.node.frontmatter)} /><Banner title="Learn" subtitle="Why start a co-op?" content="It’s a common dream to be your own boss. In a worker-owned cooperative, the members (or worker-owners) each own an equal share of the business."/>{Sections}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
query LearnSectionQuery {
  allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {frontmatter: {page: {eq: "learn"}}}) {
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
