const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productsRoute = require('./routes/products');
require('dotenv').config();
require('./DataBase/mongo');

const app = express();
app.use(cors());
app.use(express.json());

require('./DataBase/mongo');

app.use('/api/auth', require('./routes/auth'));

app.listen(5000, () => console.log('Server running on port 5000'));
app.use('/api/products', require('./routes/products'));
app.use('/api/products', productsRoute);
