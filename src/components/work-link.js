import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const WorkLink = ({ post, name }) => (
  <div>
    <h3>
      <Link style={{textDecoration: 'none'}} to={this.prop.post}>
        {this.prop.name}
      </Link>
    </h3>
  </div>
)

export default WorkLink

WorkLink.propTypes = {
  post: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired
}
