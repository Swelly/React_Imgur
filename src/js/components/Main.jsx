import React from 'react';
import Router, { RouteHandler, Link } from 'react-router';

import Header from './Header.jsx';

class Main extends React.Component {

  render() {
    return (
      <div className="container">
      <Header />
      {this.props.children}
          <RouteHandler />
      </div>
    );
  }
}

export default Main;