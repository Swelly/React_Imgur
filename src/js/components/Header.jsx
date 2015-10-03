import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Imgur Browser
          </a>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a>Topic #1</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;