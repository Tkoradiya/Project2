const { MongoClient } = require('mongodb');

async function query1() {
  const mongo_client = new MongoClient('mongodb://127.0.0.1:27017/assignment4', { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await mongo_client.connect();

    const db = mongo_client.db('assignment4');
    const collection = db.collection('enrollment');

    const result = await collection.find({ enrollment_date:'2023-04-13' }).toArray();

        // Print the result
        console.log(result);

    console.log(`Query1: "Simple Find Query": ${result}`);
  } finally {
    await mongo_client.close();
  }
}

query1();


