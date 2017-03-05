var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);
var appData = require('./data.json');
var user = appData.user; // 接口
var dataCenter = appData.data_center;

var apiRouter = express.Router();
apiRouter.get('/user', function (req, res) {
  res.json({
    errno: 0,
    data: user
  });
});
apiRouter.get('/data_center', function (req, res) {
  res.json({
    errno: 0,
    data: dataCenter
  });
});

app.use('/api', apiRouter);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});
