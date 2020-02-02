const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

// Recebe os dados em formato JSON no servidor web.
app.use(express.json());

// Habilita o acesso público a nossa API por hosts de qualquer domínio.
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true
});

// const require('./src/models/Product');
requireDir('./src/models');

// const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(3000);
