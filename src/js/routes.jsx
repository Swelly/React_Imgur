import React from 'react';
import {Route, DefaultRoute, Link} from 'react-router';

import App from './components/App.jsx';
import HomePage from './components/Pages/HomePage.jsx';
import AboutPage from './components/Pages/AboutPage.jsx';

export default (
  <Route handler={App}>
    <Route handler={AboutPage} name="About" path="/about" />
    <DefaultRoute handler={HomePage} name="Home" />
  </Route>
);