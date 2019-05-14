const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {createFile, getFiles, getFile, editFile, removeFile} = require('./handlers');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({mensaje: 'hola!'})
});

app.get('/files', (req, res) => {
  getFiles((err, data) => {
    if (!err) {
      res.json(data)
    } else {
      res.status(500);
      res.json(err)
    }
  })
});

app.get('/files/:name', (req, res) => {
  const fileName = req.params.name;

  if (!fileName) {
    res.status(400);
    res.json({msg: 'Falta el nombre del archivo'})
  } else {
    getFile(fileName, (err, data) => {
      if(!err) {
        res.json(data)
      } else {
        res.status(500);
        res.json(err)
      }
    })
  }
});

app.post('/files/:name', (req, res) => {
  const fileName = req.params.name;
  const content = req.body.content;

  if (!fileName || !content) {
    res.status(400);
    res.json({msg: 'Faltan campos requeridos'})
  } else {

    createFile({fileName, content}, (err, data) => {
      if (!err) {
        res.json(data)
      } else {
        res.status(500);
        res.json(err)
      }
    })

  }
});


app.listen(8080, () => {
  console.log('Server listening at port 8080')
});