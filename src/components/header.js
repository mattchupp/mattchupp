import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ navLinks }) => (
  <div style={{
    backgroundColor: '#303030',
  }}>
    <nav className="uk-navbar">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li><Link to="/">Matt Chupp</Link></li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          {
            navLinks.map(link =>
              <li key={link.name} style={{ 'listStyleType': 'none', margin: '10px'}}>
                <Link to={link.route}>{link.name}</Link>
              </li>
            )
          }
        </ul>
      </div>
    </nav>
  </div>
)

Header.propTypes = {
  navLinks: PropTypes.array,
}

Header.defaultProps = {
  navLinks: ``,
}

export default Header
