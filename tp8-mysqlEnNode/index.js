const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conectamos a la DB
const mysqlConnection = require('./config/db');

app.use('/rescatistas', require('./rutas/rescatistas'))
app.get('/', (req, res) => {
  res.send('Bienvenidos al inicio de la página');
});

app.listen(3000, () => {
  console.log('Mi aplicacion esta funcionando en el puerto 3000!');
})