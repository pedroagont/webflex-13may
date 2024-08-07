'use strict';

/* Question 02

Implement a function fetchDataForUser, which fetches data from a remote JSON api and then returns a part of it.

Since this is a network call, it will need to be an asynchronous function and return the data via a callback.

The JSON-based data will be fetched from this URL, and others like it:
https://gist.githubusercontent.com/kvirani/f7d65576cc1331da1c98d5cad4f82a69/raw/4baad7566f0b6cd6f651c5d3558a015e226428b5/data.json

The callback should be called with two arguments:
1. error: if request comes back with an err, pass it through to this callback. otherwise set this to null
2. data: if there is no error, this should be the object representing the wins and losses for the given username. If there is an error, this should be set to null.

Use the needle library (https://www.npmjs.com/package/needle) to fetch data.
The needle library is already installed in this project, and you can require and use it.

*/
const needle = require('needle');

const fetchDataForUser = function (url, username, callback) {
  // IMPLEMENT ME
  needle.get(url, function (error, response) {
    if (error) return callback(error, null);

    if (response.statusCode == 200) {
      const body = JSON.parse(response.body);

      for (const user in body.users) {
        if (user === username) {
          callback(null, body.users[user]);
        }
      }
    }
  });
};

const API_URL =
  'https://gist.githubusercontent.com/kvirani/f7d65576cc1331da1c98d5cad4f82a69/raw/4baad7566f0b6cd6f651c5d3558a015e226428b5/data.json';

const logResponseCb = (error, response) => console.log(response);

// fetchDataForUser(API_URL, 'mr_robot', logResponseCb);

fetchDataForUser(API_URL, 'teddy_b', logResponseCb);
