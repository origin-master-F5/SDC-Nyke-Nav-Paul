const Pool = require('pg').Pool;
const poolPG = require('../config.js');

// const pool = new Pool({
//   host: "localhost",
//   user: "postgres",
//   database: "nike",
//   port: 5432
// });
const pool = new Pool(poolPG);


const getShoes = (req, res) => {
  // pool.query(`SELECT * FROM shoes WHERE collections ILIKE '%${req.params.keyword}%' OR type ILIKE '%${req.params.keyword}%' limit 50;`)
  pool.query(`SELECT * FROM shoes WHERE (collections || type) ILIKE '%${req.params.keyword}%' limit 50;`)
    .then(result => {
      res.status(200).send(result.rows)
    })
    .catch(err => res.status(400).send(err))

}

module.exports = {
  getShoes
}