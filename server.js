//Install express server
const express = require('express');
const path = require('path');

const app = express();
const webhook = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/webappdemo'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/webappdemo/index.html'));
});

webhook.get('/*', (req, res) => {
  var resp = 'This is the response';
  let responseJson = {};
  responseJson.fulfillmentText = 'This is an endpoint published to RunKit'; // displayed response
  res.send(resp);
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
webhook.listen(8081);
