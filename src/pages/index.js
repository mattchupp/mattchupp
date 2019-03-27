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
      You can find me online <a href="http://twitter.com/mattchupp" target="_blank">Tweeting</a> or
      posting photos on <a href="http://instagram.com/mattychupp" target="_blank">Instagram</a>.
      I also enjoy writing code. Check out some of my work on {` `}
      <a href="https://codepen.io/mattchupp/" target="_blank">Codepen</a> or {` `}
      <a href="http://github.com/mattchupp" target="_blank">Github</a>.
    </p>
  </Layout>
)

export default IndexPage
