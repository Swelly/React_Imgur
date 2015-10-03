import "../../css/master.scss";

import React from 'react';
import { RouteHandler } from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div className={'app'}>
        <RouteHandler />
      </div>
    );
  }
}

export default App;
