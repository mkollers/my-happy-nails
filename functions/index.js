const functions = require('firebase-functions');
const express = require('express');
const prerender = require('prerender-node').set('prerenderToken', 'GPD3fV9iCt1DSzebO1pk');

const app = express();
app.use(prerender);

// This HTTPS endpoint can only be accessed by your Firebase Users.
// Requests need to be authorized by providing an `Authorization` HTTP header
// with value `Bearer <Firebase ID Token>`.
exports.app = functions.https.onRequest(app);
