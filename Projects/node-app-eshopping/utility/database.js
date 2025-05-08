const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

let _db;

const mongoConnect = (callback) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client
    .connect()
    .then(() => {
      console.log("MongoDB servera bağlandı");
      _db = client.db(dbName);
      callback();
    })
    .catch((err) => {
      console.error("MongoDB bağlantı hatası:", err);
      throw err;
    });
};

const getdb = () => {
  if (_db) {
    return _db;
  }
  throw new Error("Veritabanı bağlantısı yok");
};

module.exports = { mongoConnect, getdb };
