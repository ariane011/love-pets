const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());  // "Dizer" para o express que estaremos usando o json no corpo das requições
app.use(routes);


app.listen(3333);