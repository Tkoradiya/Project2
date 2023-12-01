const { MongoClient,ObjectId } = require('mongodb');

async function query1() {
  const mongo_client = new MongoClient('mongodb://127.0.0.1:27017/assignment4', { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await mongo_client.connect();

    const db = mongo_client.db('assignment4');
    const collection = db.collection('student');

    const studentIdToUpdate = '6568448a9e37e232e173d41e';

    const result = await collection.updateOne(
      { "_id":new  ObjectId(studentIdToUpdate) },
      { $set: { "isEnrolled": false } },
      function (err, result) {
        if (err) throw err;
    
        console.log(`Updated document for student with ID : ${result.modifiedCount} document(s) modified`);
      });    

        // Print the result
        console.log(result);
  } finally {
    await mongo_client.close();
  }
}

query1();


