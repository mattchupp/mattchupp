import React from "react"

import Layout from "../components/layout"
import Matt from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Matt Chupp`, `Web Developer`, `Champaign`, `Matt`, `Chupp`]} />
    <h1>Hello. I'm Matt.</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Matt />
    </div>
    <p className="body-text">
      I am a software developer, guitar player, and enneagram type 5. 
      You can find me online <a href="http://twitter.com/mattchupp" rel="noopener noreferrer" target="_blank">Tweeting</a> or
      posting photos of food on <a href="http://instagram.com/mattychupp" rel="noopener noreferrer" target="_blank">Instagram</a>.
      I spend a lot of my free time writing code. Check out my {` `}
      <a href="https://codepen.io/mattchupp/" rel="noopener noreferrer" target="_blank">Codepen</a> or {` `}
      <a href="http://github.com/mattchupp" rel="noopener noreferrer" target="_blank">Github</a>.
    </p>

  </Layout>
)

export default IndexPage
