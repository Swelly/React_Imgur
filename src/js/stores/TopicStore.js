import Api from '../utils/api.jsx';
import Reflux from 'reflux';

// Create a Store called TopicStore
// Use the API module for the Api func
// return topic/defaults json in a Promise
// make data accessible at TopicStore.topics

const TopicStore = Reflux.createStore({
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(json){
        this.topics = json.data;
        this.triggerChange();
      }.bind(this));
  },

  triggerChange: function() {
    this.trigger('change', this.topics);
  }
});

export default TopicStore;