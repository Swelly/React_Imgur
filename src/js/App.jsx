import "../css/master.scss";

import React from 'react';
import Router from 'react-router';
import routes from './routes.jsx';

import Api from './utils/api.jsx';

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
