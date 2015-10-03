// Site Header Component

import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  render() {

    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Imgur Browser</Link>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a>Topic #1</a>
            </li>
          </ul>
        </div>
      </nav>
    );

  }
}

export default Header;