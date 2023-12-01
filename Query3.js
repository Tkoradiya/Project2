const { MongoClient } = require('mongodb');

async function query1() {
  const mongo_client = new MongoClient('mongodb://127.0.0.1:27017/assignment4', { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await mongo_client.connect();

    const db = mongo_client.db('assignment4');
    const collection = db.collection('course');
    
    const result = await collection.find({"course_name": "maths",
    "credit": { $gte: 37, $lte: 59 }}).toArray();
    console.log('Complex Search Criterion : find course name maths with credit between 37 to 49');
  console.log(result);
  } finally {
    console.log("deygce");
    await mongo_client.close();
  }
}

query1();


