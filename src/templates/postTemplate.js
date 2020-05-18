import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import { Link } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <hr/>
      <div className="body-text">
        <h1>{frontmatter.title}</h1>
        <p className="meta-text">{frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <hr/>
        <Link style={{paddingBottom: '1rem'}} to="/blog">More posts</Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path } },
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
