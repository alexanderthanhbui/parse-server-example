// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://heroku_sk59134b:gcfokroc8gtg9uouqk7pv20tat@ds053166.mlab.com:53166/heroku_sk59134b',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'MrFF6pmuI0ibpUheixmd',
  masterKey: process.env.MASTER_KEY || 'n5e0v9u2DxjkLWPmgQP8', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://blindbox.herokuapp.com/parse', // Don't forget to change to https if needed
  push: {
    ios: {
      pfx: 'pusher.p12', // Prod PFX or P12
      passphrase: 'alexbui1', // optional password to your p12/PFX
      bundleId: 'com.animenim.Yipster',
      production: true // Prod
    }
  }
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-server-example running on port ' + port + '.');
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
Contact GitHub API Training Shop Blog About© 2017 GitHub, Inc.Terms Privacy Security Status Help
