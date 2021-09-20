 (async () => {
     console.log("=====")
     const {
         MongoClient
     } = require('mongodb');

     const url = 'mongodb://127.0.0.1:27017';

     const client = new MongoClient(url)

     let ret = await client.connect();
     let db = client.db('test')
     const fruits = db.collection('fruits')
    //  ret = await fruits.insertOne({
    //      name: '小小谢',
    //      age: '20'
    //  })
     const user = db.collection('user')
    //  ret = await user.insertOne({
    //      name: '马大哈',
    //      age: '20'
    //  })
    //  console.log(ret)

     /**
      * 异步之后干点啥?
      * 回调，promise，generator，async/await
      */
 })()