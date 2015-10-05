import React from 'react';
import Reflux from 'reflux';

import TopicStore from '../stores/TopicStore.js';

class TopicList extends React.Component {

  constructor(props) {
    super(props);

    mixins: [Reflux.listenTo(TopicStore, 'onChange')];

    this.state = {
      topics: []
    };


  }

  onChange(data) {
    this.setState({topics: data});
  }

  componentWillMount() {
    TopicStore.getTopics();
    console.log(TopicStore)
  }


  renderTopics() {
    var topicChildren = this.state.topics.map((topic, index) => {
      return (
        <li key={index} className="list-group-item">
          {topic}
        </li>
      )
    });
    return topicChildren;
  }

  render() {
    return (
      <div className="col-md">
        <h3>Topic List</h3>
        <ul className="list-group">
          {this.renderTopics()}
        </ul>
      </div>
    )
  }
}

export default TopicList;