const express = require('express');
// initializa app
const PORT = process.env.PORT ;
const app = express();

app.get('/', (req, res) => res.send('<h1> Hello from app! </h1>'));
app.listen(PORT, () => console.log(`app is up and running on port: ${PORT}`));

