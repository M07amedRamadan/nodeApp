const express = require('express');
const mongoose = require('mongoose') 
// initializa app
const PORT = process.env.PORT ;
const app = express();

// initialize connection to mongoddb
const DB_USER='root';
const DB_PASSWORD='password'
const DB_PORT='27017'
const DB_HOST='mongo'  //mongo here is the name of service that used to create mongodb in docker compose
const URI=`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose
    .connect(URI)
    .then(() => console.log('connect to database...'))
    .catch((err) => console.log('faild to connect to db', err));



app.get('/', (req, res) => res.send('<h1> Hello from app! </h1>'));
app.listen(PORT, () => console.log(`app is up and running on port: ${PORT}`));

