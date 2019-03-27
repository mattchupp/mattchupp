import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Work</h1>
    <p>Things I do for work</p>
    <h1>Projects</h1>
    <p>Things I do for play</p>
  </Layout>
)

export default IndexPage
