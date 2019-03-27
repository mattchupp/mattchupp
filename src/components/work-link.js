import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const WorkLink = ({ postLink, name }) => (
  <div>
    <h3>
      <Link style={{textDecoration: 'none'}} to={postLink}>
        {name}
      </Link>
    </h3>
  </div>
)

export default WorkLink

WorkLink.propTypes = {
  postLink: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired
}

WorkLink.defaultProps = {
  postLink: ``,
  name: ``
}
