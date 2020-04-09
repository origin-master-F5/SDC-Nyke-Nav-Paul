const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = 3001;
let database;
MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db('nike');
    database = dbo;
});

app.get('/search/:keyword', (req, res)=>{
    database.collection('shoes').find({$or:[{collections: {$regex: new RegExp(req.params.keyword, 'i')}},  {type: { $regex: new RegExp(req.params.keyword, 'i') }}] }).limit(50).toArray((err, result)=>{
        if(err) throw err;
        res.status(200).send(result)
    })
})

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is listening on port ${PORT}`);
    }
})


