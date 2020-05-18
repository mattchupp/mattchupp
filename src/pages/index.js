import React from "react"

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
      I like making things for the web.
      You can find me online <a href="http://twitter.com/mattchupp" rel="noopener noreferrer" target="_blank">Tweeting</a> or
      posting photos of food on <a href="http://instagram.com/mattychupp" rel="noopener noreferrer" target="_blank">Instagram</a>.
      I also enjoy writing code. Check out some of my work on {` `}
      <a href="https://codepen.io/mattchupp/" rel="noopener noreferrer" target="_blank">Codepen</a> or {` `}
      <a href="http://github.com/mattchupp" rel="noopener noreferrer" target="_blank">Github</a>.
    </p>

    <p className="body-text">
    <strong>Some of my favorite tools to make websites with are:</strong><br/>
    ReactJS, GatsbyJS, Bootstrap, UIKit, and anything else that's shiny and new.
    </p>
    <p className="body-text">
    <strong>I also have some experience with:</strong><br/>
    Wordpress, CraftCMS, PHP, Ghost, NextJs
    </p>
  </Layout>
)

export default IndexPage
