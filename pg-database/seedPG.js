//file not needed after deployment

const { Pool } = require('pg');

const pool = new Pool({
  host: "postgres",
  user: "postgres",
  password: "postgres",
  database: "nike",
  port: 5432
});


(async () => {
  try {
    await pool.query('CREATE TABLE IF NOT EXISTS shoes (main_id BIGSERIAL NOT NULL PRIMARY KEY, item VARCHAR(30) NOT NULL,type VARCHAR(30) NOT NULL,price BIGINT NOT NULL,image VARCHAR(200) NOT NULL,collections VARCHAR(500),id BIGINT UNIQUE NOT NULL);');
    console.log('Seeding Postgres Data, Please Wait...');
    console.time('PG seed time');
    await pool.query(`COPY shoes(item, type, price, image, collections, id) FROM '/Users/iceman/Projects/SDC-Nyke-Nav-Paul/shoeData.csv' DELIMITER ',' CSV HEADER;`);
    console.timeEnd('PG seed time');
    console.log('Seeding Complete!!!');
    await pool.end();
  } catch (err) {
    console.log(err);
  }
})()