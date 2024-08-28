import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const dbName = "products";
const collectionName = "products";

async function main() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    const db = client.db(dbName);

    const collection = db.collection(collectionName);

    const documents = await collection.find({}).toArray();

    documents.forEach((doc) => {
      console.log(doc);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  } finally {
    await client.close();
  }
}

main();
