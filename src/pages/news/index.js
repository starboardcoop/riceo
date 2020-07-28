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
            edges.map(edge => (
                <article>
                    <a href={edge.node.frontmatter.link} target="_blank"><h1>{edge.node.frontmatter.title}</h1></a>
                    <img src={edge.node.frontmatter.image} alt="people" height="200" width="300"/>
                    <main dangerouslySetInnerHTML={{__html: edge.node.html}}></main>
                </article>
            ))
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
        html
      }
    }
  }
}
`