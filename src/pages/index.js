import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Section id="workercoops">
      <h1>What is a worker cooperative?</h1>
      <p>There are many kinds of cooperatives, such as credit unions and co-op markets. But unlike other consumer-owned cooperatives, a worker co-op is a business owned by the people doing the work.</p>
      <p>A worker cooperative (or co-op) is a type of business that puts worker wellbeing and community benefit at the core of its purpose.</p>
    </Section>
    <Section id="whoweare">
      <h1>Who are we?</h1>
      <p>The Rhode Island Center for Employee Ownership (RI CEO) is a non-profit organization working to promote and support the growing cooperative economy in the Ocean State.</p>
      <Link className="button" to="/learn">Learn more</Link>
    </Section>
  </Layout>
)

export default IndexPage
