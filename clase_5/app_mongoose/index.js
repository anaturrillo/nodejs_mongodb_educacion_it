const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const path = require('path');

const routes = require('./api/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/resources', express.static(path.join(__dirname, 'public')));

const hbs = expressHandlebars.create({defaultLayout:'main'});
hbs.extname = '.hbs' ;
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// CONEXION A LA DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function () {
	app.use('/', routes());
});

app.listen(3000, () => {
	console.log('server listening at port 3000')
});
