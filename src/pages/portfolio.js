import React from "react"

import Layout from "../components/layout"
import Work from "../components/work-link"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `portfolio`, `react`]} />
    <h1 style={{paddingTop: '2rem'}}>Projects</h1>
    <p>[ Things I do for fun ]</p>
    <Work
      name="Weather"
      postLink="/blog/weather-app"
    />
  </Layout>
)

export default IndexPage
