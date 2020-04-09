const Pool = require('pg').Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "nike",
    port: 5432
});

(async ()=>{
    try{
    await pool.query('CREATE TABLE IF NOT EXISTS shoes (item VARCHAR(30) NOT NULL,type VARCHAR(30) NOT NULL,price BIGINT NOT NULL,image VARCHAR(200) NOT NULL,collections VARCHAR(500),id BIGINT NOT NULL PRIMARY KEY);');
    console.log('Seeding Postgres Data, Please Wait...');
    console.time('PG seed time');
    await pool.query(`COPY shoes FROM '/Users/iceman/Projects/SDC-Nyke-Nav-Paul/shoeData.csv' DELIMITER ',' CSV HEADER;`);
    console.timeEnd('PG seed time');
    console.log('Seeding Complete!!!');
    }catch(err){
        console.log(err);
    }
})()