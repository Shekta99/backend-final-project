const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let dbInstance;

const connectToDB = async () => {
  if (!dbInstance) {
    await client.connect();
    dbInstance = client.db("productsDB");
  }
  return dbInstance;
};

module.exports = { connectToDB };
