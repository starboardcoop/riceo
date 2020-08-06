import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Sections = edges
    .map(edge => <Section id={edge.node.frontmatter.id} key={edge.node.frontmatter.id} html={edge.node.html}/>)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      {Sections}
    </Layout>
  )}

export default IndexPage

export const pageQuery = graphql`
query HomeSectionQuery {
  allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {fileAbsolutePath: {regex: "/home/"}}) {
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
