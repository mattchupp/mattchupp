import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <h3 style={{margin: '0', padding: '0'}}>
      <Link style={{textDecoration: 'none'}} to={post.frontmatter.path}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <p className="meta-text">{post.frontmatter.date}</p>
  </div>
)

export default PostLink
