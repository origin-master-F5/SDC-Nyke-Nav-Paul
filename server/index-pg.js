const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../pg-database/queries.js');
const app = express();
const PORT = 3001;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/search/:keyword', db.getShoes)

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is listening on port ${PORT}`);
    }
})