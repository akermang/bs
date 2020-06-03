const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = require("./db.env.js"); 
const DATABASE_NAME = "boardsList";
const BOARDS_LIST = "BOARDS_LIST";
const board_options = "board_options";

const conectToDB = () =>
  MongoClient.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const controller = {
  dbAddNewBoard: async (newBoard, callback) => {
    // connect to your cluster
    const client = await conectToDB();
    // specify the DB's name
    const db = client.db(DATABASE_NAME);
    // execute find query
    db.collection(BOARDS_LIST).insertOne(newBoard, (err, res) => {
      if (err) throw err;
      console.log("newBoard inserted:", res.ops);
      client.close();
      callback(res);
    });
  },

  dbAddManyBoards: async (boardsList, callback) => {
    // connect to your cluster
    const client = await conectToDB();
    // specify the DB's name
    const db = client.db(DATABASE_NAME);
    db.collection(BOARDS_LIST).insertMany(boardsList, function(err, res) {
      if (err) throw err;
      console.log("baoardsList inserted:", res.ops);
      client.close();
      callback(res);
    });
  },

  dbGetAllBoards: async (callback, limit = 40) => {
    // connect to your cluster
    const client = await conectToDB();
    // specify the DB's name
    const db = client.db(DATABASE_NAME);
    db.collection(BOARDS_LIST)
      .find()
      .limit(limit)
      .toArray((err, res) => {
        if (err) throw err;
        console.log("getAllbaoards:", res);
        client.close();
        callback(res);
      });
  },

  dbGetBoardsdOptions: async (callback, limit = 40) => {
    // connect to your cluster
    const client = await conectToDB();
    // specify the DB's name
    const db = client.db(DATABASE_NAME);
    db.collection(board_options)
      .find()
      .limit(limit)
      .toArray((err, res) => {
        if (err) throw err;
        console.log("dbGetBoarsdOptions:", res[0]);
        client.close();
        callback(res[0]);
      });
  },

  dbGetBoardById: async (id, callback, limit = 1) => {
    console.log("ID:", id);
    // connect to your cluster
    const client = await conectToDB();
    // specify the DB's name
    const db = client.db(DATABASE_NAME);
    db.collection(BOARDS_LIST)
      .find(ObjectId(id))
      .limit(limit)
      .toArray((err, res) => {
        if (err) throw err;
        console.log("dbGetBoardById:", res);
        client.close();
        callback(res[0]);
      });
  },

  dbGetBoardsByUserId: async (userId, callback, limit = 40) => {
    console.log("userId:", userId);

    // connect to your cluster
    const client = await conectToDB();
    // specify the DB's name
    const db = client.db(DATABASE_NAME);
    db.collection(BOARDS_LIST)
      .find({ userId: userId })
      .limit(limit)
      .toArray((err, res) => {
        if (err) throw err;
        console.log("dbGetBoardsByUserId:", res);
        client.close();
        callback(res);
      });
  },

  dbUpdateById: async (id, callback, limit = 40) => {
    // connect to your cluster
    const client = await conectToDB();
    // specify the DB's name
    const db = client.db(DATABASE_NAME);
    const col = db.collection(BOARDS_LIST);
    // Update a single document
    col.updateOne({ "_id": ObjectId(id)},{ $set: { name: "Gal's Board 8" } }, (err,res) => {
      if (err) throw err;
      console.log("dbUpdateById:", res);
      client.close();
      callback(res);
    });
  },
  dbUDeleteById: async (id, callback) => {
    // connect to your cluster
    const client = await conectToDB();
    // specify the DB's name
    const db = client.db(DATABASE_NAME);
    const col = db.collection(BOARDS_LIST);
    // Update a single document
    col.deleteOne({ "_id": ObjectId(id)}, (err,res) => {
      if (err) throw err;
      console.log("dbUpdateById:", res);
      client.close();
      callback(res);
    });
  },
};

const log = (response) => console.log("LOGER:", response);
controller.dbUDeleteById("5ed7a569e40bf64eb49975f0", log);

module.exports = controller;
