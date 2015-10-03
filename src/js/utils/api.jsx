// Standalone Module to Connect with Imgur's API

import Fetch from 'whatwg-fetch';

const rootURL = 'https://api.imgur.com/3/';
const apiKey  = '1e17698da8da290';
// ^ IDGAF :P

// FETCH Library
// Pass absolute URL
// = https://api.imgur.com/3/[URL]
// Authorization: Client-ID 1e17698da8da290
// ** RETURNS PROMISE OBJECT **
// Complete 1st .then(response)
// [[Promise Object]]
// 2nd Grab JSON from Object
// data = Promise Object.json()

// EX:
// Api.get('topics/defaults')
// .then(function(data){
//   Do Something with data
// })

module.exports = window.api = {
  get: function(url) {
    return fetch(rootURL + url, {
      headers: {
        'Authorization': 'CLIENT_ID ' + apiKey
      }
    })
    .then(function(response){
      return response.json();
    })
  }
};
