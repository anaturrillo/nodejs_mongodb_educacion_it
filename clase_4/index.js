const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/resources', express.static(path.join(__dirname, 'public')));

const hbs = expressHandlebars.create({defaultLayout:'main'});
hbs.extname = '.hbs';
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


const handlersInit = require('./handlers');


MongoClient.connect('mongodb://localhost:27017/', function(err, client) {

  if (err) {
    throw err;
  }

  const db = client.db('curso_node_mongo');

  const handlers = handlersInit(db);

  app.get('/', (req, res) => {
    res.render('home', {
      className: 'home',
      title:'Bienvenidos :)'
    })
  });

  app.get('/usuarios', (req, res) => {

  });

  app.get('/crear-usuario', (req, res) => {
    res.render('userForm')
  });

  app.get('/usuario/:id', (req, res) => {

  });

  app.post('/api/user', (req, res) => {
    const user = req.body;

    handlers.create(user, (err, data) => {
      if (!err) {
        res.render('userCreated')
      } else {
        if (err.code === 11000) {
          res.status(400);
          res.json({errorMsg: 'El usuario ya existe.'})
        } else {
          res.status(500)
          res.json({errorMsg: 'No se pudo crear el usuario.'})
        }
      }
    })
  });
});


app.listen(3000, () => {
	console.log('server listening at port 3000')
});


// documentaciones
// https://www.npmjs.com/package/mongodb
// https://www.mongodb.com/