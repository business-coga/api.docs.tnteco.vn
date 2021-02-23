const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = 3000

const fs = require('fs');

const app = express()
app.use(history())
app.use(serveStatic(__dirname + '/build/test-site'))
app.get('/ping', function (req, res) {
  res.status(200).send('pong').end()
})

app.listen(port, () => {
	console.log('HTTPS Server running on port '+port);
});