import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Matt from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Matt Chupp`, `Web Developer`, `Champaign`]} />
    <h1>Hello. I'm Matt.</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Matt />
    </div>
    <p className="body-text">
      I like to build stuff.
    </p>
  </Layout>
)

export default IndexPage
