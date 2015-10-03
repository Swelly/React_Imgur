import React from 'react';
import Router, { Route, RouteHandler, DefaultRoute } from 'react-router';

import Main from './components/Main.jsx';
import Home from './components/Home.jsx';

export default (
  <Route handler={Main}>
    <DefaultRoute handler={Home} name="home" />
  </Route>
);