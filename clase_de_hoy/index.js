const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const createUser = require('./api/createFile');
const hbs = require('express-handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hola a todos')
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