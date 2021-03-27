const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const OneonOneUserDataRoutes = express.Router();
const userData = require('./back-end/userData.model.js')

app.use('/userData', OneonOneUserDataRoutes)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/OneonOneUserData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection

connection.once('open', function () {
  console.log('MongoDB database conection established successfully');
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/userTypeSelect', (req, res) => {
  let userTypeData = new userData(req.body)
  userTypeData.save()
    .then(item => {
      res.send("item saved to database")
    })
    .catch(err => {
      res.status(400).send("unable to save to database :(")
    });
});

OneonOneUserDataRoutes.route('/').get(function (req, res) {
  userData.find(function (err, userData) {
    if (err) {
      return console.log(err);
    } else {
      return res.json(userData);
    }
  })
})


