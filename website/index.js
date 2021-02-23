require('dotenv').config()
const
  express = require('express'),
  serveStatic = require('serve-static'),
//   history = require('connect-history-api-fallback'),
  port = process.env.PORT

const app = express()
// app.use(history())
app.get('/ping', function (req, res) {
    res.status(200).send('pong').end()
  })
app.use(serveStatic(__dirname + '/build/test-site'))
app.listen(port, () => {
	console.log(`Server running on http://api.docs.tnteco.vn:${port}`);
});