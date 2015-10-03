// Container for all Components

import React from 'react';
import Router, { RouteHandler, Link } from 'react-router';

import Header from './Header.jsx';
import TopicList from './TopicList.jsx';


class Main extends React.Component {

  renderContent() {
    if(this.props.children) {
      console.log("HEY")
      return this.props.children
    } else {
      return <TopicList />
    }
  }

  render() {
    return (
      <div className="container">
      <Header />
        <RouteHandler />
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

export default Main;