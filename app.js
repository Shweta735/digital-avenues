const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const itemroutes = require('./route/itemroutes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs')


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public/html/index.html'));
});

const itemBasicPath = '/api/v1/item';

app.use(itemBasicPath,itemroutes);

app.use((req, res) => res.status(404).send('Not Found'));

app.listen(process.env.PORT || 5000, ()=> console.log("Connected"))