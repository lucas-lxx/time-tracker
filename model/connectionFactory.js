const { Client } = require('pg');

const clientFactory = async () => {
  return new Client();
}

module.exports = clientFactory;