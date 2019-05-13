const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const express = require('express');
const path = require('path');

const app = express();


// app.use carga una función de midleware. Cada vez que app reciba una solicitud se va a ejecutar la función
app.use(bodyParser.json()); // parsea body cuando la req tiene Content-Type='application/json'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); // parsea body cuando la req tiene Content-Type='application/x-www-form-urlencoded'
app.use('/resources', express.static(path.join(__dirname, 'public'))); // servimos los archivos estáticos en la ruta /resources

// configracion del motor de renderizado (handlebars)
const hbs = expressHandlebars.create({defaultLayout:'main'}); // inicializacion del motor
hbs.extname = '.hbs' ;// aceptar archivos de extension .hbs
app.engine('.hbs', hbs.engine); // asignamos nuestro motor 
app.set('view engine', '.hbs'); // seteamos el valor 'view engine'


// importamos nuestros handlers
const {createFile, getFiles, getFile, removeFile, editFile} = require('./handlers');

app.get('/', (req, res) => {
	res.render('home', {
    className: 'home',
    title:'Bienvenidos :)'
	})
});

app.get('/usuarios', (req, res) => {
  getFiles((err, data) => {
    if (!err) {
      res.render('usuarios', {
        className:'lista-usuarios',
        title: 'Lista de usuarios',
        usuarios: data
      })
    } else {
      res.status(500);
      res.json({error: err})
    }
  })
});

app.get('/crear-usuario', (req, res) => {
  res.render('userForm')
});

app.get('/usuario/:id', (req, res) => {
  const userId = req.params.id;
  getFile(userId, (err, data) => {
   if(!err) {
     res.render('usuario', {user: data})
   } else {
     res.status(500);
     res.json({error: err})
   }
  });
});

// API
app.get('/api/user', (req, res) => {
  const user = req.query;

  createFile(user, (err, data) => {
    if (!err) {
      res.render('userCreated')
    } else {
      res.status(500);
      res.json({error: err})
    }
  })
});

/*
app.route('/api/users')
	.get(getFiles)
	.post(createFile)
	.put(editFile)
	.delete(removeFile);
*/
app.listen(3000, () => {
	console.log('server listening at port 3000')
});


// documentaciones
// https://www.npmjs.com/package/express-handlebars
// https://handlebarsjs.com/