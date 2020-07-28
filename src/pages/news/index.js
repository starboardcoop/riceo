import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Banner from "../../components/banner"
import styles from "./news.module.css"

export default  ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => (
    <Layout>
        <SEO title="Worker Co-op News" />
        <Banner title="Worker Co-op News" subtitle="" content=""/>
        <div className={styles.container}>
        {
            edges.map(edge => (
              <a className={styles.card} href={edge.node.frontmatter.link} target="_blank">
                <article className={styles.article}>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <img src={edge.node.frontmatter.image} alt="people" height="200" width="300"/>
                  <main dangerouslySetInnerHTML={{__html: edge.node.html}}></main>
                </article>
              </a>
            ))
        }
        </div>
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