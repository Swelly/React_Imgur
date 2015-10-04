import React from 'react';
import Reflux from 'reflux';

import TopicStore from '../stores/TopicStore.js';
class TopicList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: []
    };
  }



  componentWillMount() {
    TopicStore.getTopics();
  }

  onChange(event, topics) {
    this.setState({topics: this.topics});
  }

  renderTopics() {
    console.log("hey");
    var topicChildren = this.state.topics.map((topic, index) => {
      return (
        <li key={index} className="list-group-item">
          {topic}
        </li>
      )
    })
    return (
      <ul className="list-group">
        {topicChildren}
      </ul>
    )
  }

  render() {
    return (
      <div className="col-md">
        <h3>Topic List</h3>
        {this.renderTopics()}
      </div>
    )
  }
}

export default TopicList;