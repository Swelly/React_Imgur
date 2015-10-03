import "../css/master.scss";

import React from 'react';
import Router, { Route, RouteHandler, Link } from 'react-router';

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    let name = this.context.router.getCurrentPath();
    return (
      <div>
        <ul>
          <li><Link to="About">About</Link></li>
          <li><Link to="Contact">Contact</Link></li>
        </ul>
          <RouteHandler key={name}/>
      </div>
    );
  }
});

const About = React.createClass({
  render() {
    return (
      <div className="Image">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
});

const Contact = React.createClass({
  render() {
    return (
      <div className="Image">
        <h1>Contact</h1>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
});

const routes = (
  <Route handler={App}>
    <Route name="About" handler={About} />
    <Route name="Contact" handler={Contact} />
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('app'));
});
