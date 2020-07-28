import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Banner from "../../components/banner"

export default  ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => (
    <Layout>
        <SEO title="Worker Co-op News" />
        <Banner title="Worker Co-op News" subtitle="" content=""/>
        {
            edges.map(edge => edge.node.frontmatter.title)
        }
    </Layout>
)

export const pageQuery = graphql`
query NewsSectionQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/news/"}}){
    edges {
      node {
        frontmatter {
          date
          link
          image
          title
        }
      }
    }
  }
}
`