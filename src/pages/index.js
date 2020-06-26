import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section id="workercoops">
      <div className="centered">
        <h1>What is a worker cooperative?</h1>
        <p>There are many kinds of cooperatives, such as credit unions and co-op markets. But unlike other “user-owned” or “consumer-owned” cooperatives, a worker co-op is a business owned by the people doing the work.</p>
        <p>A worker cooperative (or worker co-op) is a type of business that puts worker wellbeing and community benefit at the core of its purpose.</p>
      </div>
    </section>
    <section id="whoweare">
      <div className="centered">
        <h1>Who are we?</h1>
        <p>The Rhode Island Center for Employee Ownership (RI CEO) is a non-profit organization working to promote and support the growing cooperative economy in the Ocean State.</p>
        <Link className="button" to="/">Learn more</Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
