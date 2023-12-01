const { MongoClient } = require('mongodb');

async function query1() {
  const mongo_client = new MongoClient('mongodb://127.0.0.1:27017/assignment4', { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await mongo_client.connect();

    const db = mongo_client.db('assignment4');
    const collection = db.collection('student');
    
    const result = await collection.aggregate([
      { $group: { _id: null, age: { $avg: '$age' } } },
     
    ]).toArray();
    console.log('aggregation Average age of all students:');
  console.log(result);
  } finally {
    console.log("deygce");
    await mongo_client.close();
  }
}

query1();


