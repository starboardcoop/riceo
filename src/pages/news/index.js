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
                <article className={styles.article}>
                  <div className={styles.imageContainer}>
                    <a href={edge.node.frontmatter.link} target="_blank"><img src={edge.node.frontmatter.image} alt="people" height="200" width="300"/></a>
                  </div>
                  <div>
                    <span>{edge.node.frontmatter.date}</span>
                    <a href={edge.node.frontmatter.link} target="_blank"><h1>{edge.node.frontmatter.title}</h1></a>
                    <h3>{edge.node.frontmatter.subtitle}</h3>
                  </div>
                </article>
            ))
        }
        </div>
    </Layout>
)

export const pageQuery = graphql`
query NewsQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/news/"}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          link
          image
          title
          subtitle
        }
      }
    }
  }
}
`