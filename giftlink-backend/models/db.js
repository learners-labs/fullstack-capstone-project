// db.js
require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017";
const dbName = "giftDB";

let dbInstance = null;

async function connectToDatabase() {
  if (dbInstance) {
    return dbInstance;
  }

  const client = new MongoClient(url);

  // Task 1: Connect to MongoDB
  await client.connect();

  // Task 2: Connect to database giftDB and store in variable dbInstance
  dbInstance = client.db(dbName);

  // Task 3: Return database instance
  return dbInstance;
}

module.exports = connectToDatabase;
