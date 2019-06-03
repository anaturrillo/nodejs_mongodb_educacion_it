const express = require('express');
const actions = require('./services');

module.exports = () => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('home', {
      className: 'home',
      title:'Bienvenidos :)'
    })
  });

  router.get('/usuarios', (req, res) => {
    actions.getUsers((err, data) => {
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

  router.get('/crear-usuario', (req, res) => {
    res.render('userForm')
  });

  router.get('/usuario/:email', (req, res) => {
    const email = req.params.email;
    actions.getUser(email, (err, data) => {
      if(!err) {
        res.render('usuario', {user: data})
      } else {
        res.status(500);
        res.json({error: err})
      }
    });
  });

  router.post('/api/user', (req, res) => {
    const user = req.body;

    actions.createUser(user, (err, data) => {
      if (!err) {
        res.render('userCreated')
      } else {
        res.status(500);
        res.json({error: err})
      }
    })
  });

  return router;
};



