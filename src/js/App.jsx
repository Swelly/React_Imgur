import '../css/master.scss';
import '../../index.html';

import React from 'react';
import Router from 'react-router';

import routes from './routes.jsx';

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('app'));
});