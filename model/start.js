const clientFactory = require("./connectionFactory");

const startTimer = async () => {
  const client = await clientFactory();

  try {
    await client.connect();
    const result = await client.query('INSERT INTO start(start_time) VALUES(NOW())');
    console.log(result.rows[0]);
  } catch (err) {
    console.log(err);
  } finally {
    await client.end();
    console.log('Client has closed!')
  }
}

module.exports = {startTimer};