const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = require("./DB_config");

const DATABASE_NAME = "boardsList";
const BOARDS_LIST = "BOARDS_LIST";
const board_options = "board_options";

const client = new MongoClient(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let boaedsOptions;
let boards;

client.connect((err) => {
  if (err) throw err;
  console.log("DB Conected")
  boaedsOptions = client.db(DATABASE_NAME).collection(board_options);
  boards = client.db(DATABASE_NAME).collection(BOARDS_LIST);
});

const controller = {
  addNewBoard: (newBoard, callback) => {
    boards.insertOne(newBoard, (err, res) => {
      if (err) throw err;
      callback(res);
    });
  },

  addManyBoards: (boardsList, callback) => {
    boards.insertMany(boardsList, function(err, res) {
      if (err) throw err;
      callback(res);
    });
  },

  getAllBoards: (callback, limit = 40) => {
    boards
      .find()
      .limit(limit)
      .toArray((err, res) => {
        if (err) throw err;
        callback(res);
      });
  },

  getBoardsdOptions: (callback, limit = 40) => {
    boaedsOptions
      .find()
      .limit(limit)
      .toArray((err, res) => {
        if (err) throw err;
        callback(res[0]);
      });
  },

  getBoardById: (id, callback, limit = 1) => {
    boards
      .find(ObjectId(id))
      .limit(limit)
      .toArray((err, res) => {
        if (err) throw err;
        callback(res[0]);
      });
  },

  getBoardsByUserId: (userId, callback, limit = 40) => {
    boards
      .find({ userId: userId })
      .limit(limit)
      .toArray((err, res) => {
        if (err) throw err;
        callback(res);
      });
  },

  updateBoardById: (id, dataObject, callback, limit = 40) => {
    console.log('updateBoardById:', dataObject)
    const data = dataObject.data;
    boards
    .updateOne(
      { _id: ObjectId(id) },
      { $set: data },
      (err, res) => {
        if (err) throw err;
        callback(res);
      }
    );
  },

  dbUDeleteBoardById: (id, callback) => {
    boards.deleteOne({ _id: ObjectId(id) }, (err, res) => {
      if (err) throw err;
      callback(res);
    });
  },
};

const log = (response) => console.log("LOGER:", response);
// controller.dbUpdateById("5ed784cb0b3bc11ac00a2fa4", log);

module.exports = controller;
