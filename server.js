var express = require('express');
var app = express();
var db = require('./database');

var cors = require('cors');
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (req, res) {
	res.send('Express is running');
});

var output = {
    status: 'success',
	message: 'REST API is working'
}
app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

app.get('/api/suppliers/', db.getSuppliers);


var port = process.env.PORT || 5050;
app.listen(port, function () {
	console.log('App is running on http://localhost:' + port);
});