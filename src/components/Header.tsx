import * as React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

// PureComponent used to prevent react-router rerendering
class Header extends React.PureComponent {
  render() {
    return (
      <div className="Header">
        <div className="Header-content">
          <div className="Header-brand"><Link to="/">STOCKSIFY</Link></div>
          <div className="Header-item"><Link to="/browse">Portfolio</Link></div>
          <div className="Header-item"><Link to="/browse">Browse</Link></div>
        </div>
      </div>
    )
  }
}

export default Header
