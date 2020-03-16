const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = 3000;

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is listening on port ${PORT}`);
    }
})
