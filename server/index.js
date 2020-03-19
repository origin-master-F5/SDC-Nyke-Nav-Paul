const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = express.Router();
const { find } =require('../database/dbhelpers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

const PORT = 3000;

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is listening on port ${PORT}`);
    }
})

router.get('/search', (req, res) => {
    find(req.body)
    .then((result) => {
        console.log('result--->', result);
        res.status(200).send(result);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
}) 



