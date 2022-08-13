const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const db = require('../config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true})
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log(err));

app.listen(5000, function() {
  console.log('listening on 5000');
})

// const routes = require('./routes/routes');
// app.use('/api', routes);

const movies = require('./routes/movies');
const users = require('./routes/users');

app.use('/api/movies/', movies);
app.use('/api/users/', users);
