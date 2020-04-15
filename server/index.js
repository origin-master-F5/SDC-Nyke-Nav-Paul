require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../pg-database/queries.js');
// const numCPUs = require('os').cpus().length;
// const cluster = require('cluster');
const app = express();
const PORT = 3001;

// if(cluster.isMaster){
//     console.log(`Master ${process.pid} is running`);

//     for(let i = 0; i < numCPUs; i++){
//         cluster.fork();
//     }

//     cluster.on('exit', (worker, code, signal)=>{
//         console.log(`worker ${worker.process.pid} died`);
//     });
// }else{
    // app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/search/:keyword', db.getShoes);

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is listening on port ${PORT}`);
    }
});
// }


// // app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../client/dist')));

// // app.get('/search/:keyword', db.getShoes);
// app.get('/search/:keyword', db.getShoes);

// app.listen(PORT, (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(`Server is listening on port ${PORT}`);
//     }
// });