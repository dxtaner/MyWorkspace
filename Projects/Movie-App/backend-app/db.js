// db.js
const mongodb = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}`;

const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    mongodb.MongoClient.connect(dbUrl, (err, client) => {
      if (err) {
        reject(err);
      } else {
        const db = client.db();
        resolve(db);
      }
    });
  });
};

module.exports = { connectToDatabase };
