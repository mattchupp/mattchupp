import React from "react"

import Layout from "../components/layout"
import Work from "../components/work-link"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Work</h1>
    <p>[ Things I do for work ]</p>
    <Work
      name="Reverb Conference"
      postLink="/blog/reverb-conference"
    />
    <Work
      name="More Love More Power"
      postLink="/blog/"
    />
    <Work
      name="MLMP Info"
      postLink="/blog/"
    />
    <Work
      name="Hope Center"
      postLink="/blog/"
    />
    <h1 style={{paddingTop: '2rem'}}>Projects</h1>
    <p>[ Things I do for play ]</p>
    <Work
      name="Weather"
      postLink="/blog/"
    />
  </Layout>
)

export default IndexPage
