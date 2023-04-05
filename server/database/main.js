const mongoose = require('mongoose');
let username = process.env.DB_USERNAME;
let password = process.env.DB_PASSWORD;

const startDB = () => {
  return mongoose.connect(
    `mongodb+srv://${username}:${password}@favtunesmodel.txexneh.mongodb.net/?retryWrites=true&w=majority`
  );
};

module.exports = startDB;
