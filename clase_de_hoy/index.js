const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const createUser = require('./api/createFile');
const path = require('path');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const expressHbs = require('express-handlebars');
const hbs = expressHbs.create({defaultLayout: 'main'});
//hbs.extname = 'hbs'
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/resources', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

  res.render('home', {
    layout: 'main',
    title: 'Inicio',
    className:'home',
    saludar: (saludo) => 'Hola!' + saludo,
    usuario: req.query.usuario
  })
})

app.get('/usuarios', (req, res) => {
  const usuarios = [
    {"nombre":"Lalo", "apellido":"Landa", "usuario":"lalo_landa"},
    {"nombre":"Pepe", "apellido":"Gomez", "usuario":"pepe_gomez"},
    {"nombre":"Pepa", "apellido":"Gomez", "usuario":"pepa_gomez"}
  ];

  res.render('usuarios',{
    title: 'Usuarios',
    className: 'lista-usuarios',
    usuarios
  })
})

app.post('/crearUsuario', (req, res) => {
  const user = req.body;
  console.log(user)
  createUser(user, (err, data) => {
    if(!err) {
      res.json({msg: 'usuario creado'})
    } else {
      res.status(500);
      res.json({err})
    }
  })
})

app.listen(3000, () => {
  console.log('Server at 3000')
})