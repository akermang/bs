const express = require("express");
const router = express.Router();
const controller = require("../database.dev");
const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL =
  "mongodb+srv://akermang:LaG9872817@share-sc50x.gcp.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "boardsList";

const allBoards = require("../mock/surfboards.json");
const defaultBoard = [allBoards[0]];
const BoardImages = require("../mock/images.json");
const BOARDS_LIST = "boardsList";
const BoardsOptions = require("../mock/BoardsOptions.json");

/**
 * Api routes
 */

// Create new board
router.post("/", (req, res) => {
  let { newBoard } = req.body;
  console.log("req.body:", req.body);
  controller.addNewBoard(newBoard, (respose) => {
    newBoard = respose.ops[0];
    newBoard.id = newBoard._id;
    allBoards.push(newBoard);
    res.status(200).send(JSON.stringify(newBoard));
  });
});

// Get all boards
router.get("/", (req, res) => {
  controller.getAllBoards((allboards) => {
    res.status(200).send(JSON.stringify(allboards));
  });
});

//post boards by selection dates and location
router.post("/bySelection", (req, res) => {
  if (
    req.body.userSelections.dates != "" &&
    req.body.userSelections.location != ""
  ) {
    controller.getAllBoards((allboards) => {
      res.status(200).send(JSON.stringify(allboards));
    });
  } else {
    res.status(200).send([]);
  }
});

//get boards options
router.get("/options", (req, res) => {
  controller.getBoardsdOptions((BoardsOptions) => {
    res.status(200).send(JSON.stringify(BoardsOptions));
  });
});

// Get board by Id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  controller.getBoardById(id, (board) => {
    res.status(200).send(JSON.stringify(board));
  });
});

// Get boards by user Id
router.get("/byUserId/:id", (req, res) => {
  const { id } = req.params;
  controller.getBoardsByUserId(id, (board) => {
    res.status(200).send(JSON.stringify(board));
  });
});

module.exports = router;
