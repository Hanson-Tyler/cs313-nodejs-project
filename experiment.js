const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://ta_user:ta_pass@localhost:5432/familyhistory",
  ssl: true,
});

client.connect();

client.query('SELECT first FROM person;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});