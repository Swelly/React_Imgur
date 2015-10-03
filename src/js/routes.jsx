import React from 'react';
import Router, {Route, RouteHandler, Link } from 'react-router';

module.exports = (
  <Route handler={App}>
    <Route name="About" handler={About} />
    <Route name="Contact" handler={Contact} />
  </Route>
)
