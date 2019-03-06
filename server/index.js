// SERVER FILE eg. EXPRESS

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname + '/../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});


// SET UP ROUTES BELOW: GET/POST/PUT/DELETE













app.listen(port, () => {
  console.log('express serving the application at http://localhost:' + port);
});
