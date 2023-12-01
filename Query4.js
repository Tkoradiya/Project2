const { MongoClient } = require('mongodb');

async function query1() {
  const mongo_client = new MongoClient('mongodb://127.0.0.1:27017/assignment4', { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await mongo_client.connect();

    const db = mongo_client.db('assignment4');
    const collection = db.collection('enrollment');
 
    //console.log(collection);
    const result = await collection.countDocuments({ "student_id": 5 });
     
    
      console.log(`Number of documents for user with ID 5 : count`,result);
     
       
  } finally {
   
    await mongo_client.close();
  }
}

query1();


