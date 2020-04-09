const Pool = require('pg').Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "nike",
    port: 5432
});

const getShoes = (req, res) => {
    pool.query(`SELECT * FROM shoes WHERE collections ILIKE '%${req.params.keyword}%' limit 50;`)
        .then(result => {
            res.status(200).send(result.rows)
        })
        .catch(err=>console.log(err))
}

module.exports = {
    getShoes
}