import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Banner from "../../components/banner"
import ExternalLink from "../../components/external-link"

const styles = {
  article: ""
}

export default  ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => (
    <Layout>
        <SEO title="Worker Co-op News" />
        <Banner title="The News" subtitle="Worker co-ops around the country and the world." content=""/>
        <div>
        {
            edges.map(edge => (
                <article key={edge.node.frontmatter.link} className={styles.article}>
                  <div className="p-4">
                    <div>
                      <ExternalLink to={edge.node.frontmatter.link}>
                        <img src={edge.node.frontmatter.image} alt="people" height="200" className="w-full md:w-1/4 lg:w-1/5" />
                      </ExternalLink>
                    </div>
                    <div>
                      <span>{edge.node.frontmatter.date}</span>
                      <ExternalLink to={edge.node.frontmatter.link}>
                        <h2>{edge.node.frontmatter.title}</h2>
                      </ExternalLink>
                      <h3>{edge.node.frontmatter.subtitle}</h3>
                    </div>
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