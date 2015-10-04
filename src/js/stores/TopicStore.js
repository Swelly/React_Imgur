import Api from '../utils/api.jsx';
import Reflux from 'reflux';

const TopicStore = Reflux.createStore({
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(json){
        this.topics = json.data;
      }.bind(this));
  }
});

export default TopicStore;