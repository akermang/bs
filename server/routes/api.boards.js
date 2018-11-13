const express = require("express");
const router = express.Router();
const Sequelize = require("Sequelize");
const db = require("../getDb.js");
const allBoards = require("../mock/surfboards.json");
const BoardImages = require("../mock/images.json");
const BoardsOptions = require("../mock/BoardsOptions.json");

/**
 * Api routes
 */

// Create new board
router.post("/", (req, res) => {
  const { newBoard } = req.body;
  let id = allBoards.length + 10
  newBoard["id"] = id;
  allBoards.push(newBoard);
  res.status(200).send(JSON.stringify(newBoard));
});

// Get all boards
router.get("/", (req, res) => {
  res.status(200).send(allBoards);
});

//post boards by selection
router.post("/bySelection", (req, res) => {
  res.status(200).send(allBoards);
  console.log("req.body:", req.body);
  console.log("req.params:", req.params);
});

//get boards options
router.get("/options", (req, res) => {
  res.status(200).send(BoardsOptions);
});

// Get board by Id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let board = allBoards[id - 1];
  res.status(200).send(JSON.stringify(board));
});

// Get boards by user Id
router.get("/byUserId/:id", (req, res) => {
  const { id } = req.params;
  let boards = allBoards.filter(obj => {
    return obj.userId == id;
  });
  res.status(200).send(JSON.stringify(boards));
});

module.exports = router;
