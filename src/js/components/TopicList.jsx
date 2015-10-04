import React from 'react';

import TopicStore from '../stores/TopicStore.js';

class TopicList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: []
    };
  }

  componentWillMount() {
    TopicStore.getTopics()
      .then(function(){
        // We have successfully fetched topics
        // Topics avail on TopicStore.topics
        this.setState({
          topics: TopicStore.topics
        })
      }.bind(this));
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