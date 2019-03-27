import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ navLinks }) => (
  <div>
    <nav className="navbar">
      <div className="">
        <ul className="navbar-items">
          <li><Link style={{textDecoration: 'none'}} activeStyle={{color: '#1c7278'}} to="/">Matt Chupp</Link></li>
        </ul>
      </div>
      <div className="">
        <ul className="navbar-items">
          {
            navLinks.map(link =>
              <li key={link.name} className="">
                <Link style={{textDecoration: 'none'}} activeStyle={{color: '#1c7278'}} to={link.route}>{link.name}</Link>
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
