import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>WHOAAAA SLOW IT DOWN</h1>
    <p>
    You just hit a route that doesn&#39;t exist... the sadness.
    That's ok though, we all make mistakes.
    </p>
    <Link to="/">Go Home</Link>

  </Layout>
)

export default NotFoundPage
