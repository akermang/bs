const express = require("express");
const router = express.Router();
const Sequelize = require("Sequelize");
const db = require("../getDb.js");
const allBoards = require("../mock/surfboards.json");
const BoardImages = require("../mock/images.json");
const BoardsOptions = require("../mock/BoardsOptions.json");

db.sync();
// db.sync({force: true});

const ImagePath = db.define("imagePath", {
  path: {
    type: Sequelize.STRING
  }
});

const Board = db.define("board", {
  brand: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  model: {
    type: Sequelize.STRING
  },
  length: {
    type: Sequelize.STRING
  },
  thickness: {
    type: Sequelize.STRING
  },
  // width: {
  //   type: Sequelize.STRING
  // },
  volume: {
    type: Sequelize.STRING
  },
  finSetUp: {
    type: Sequelize.STRING
  },
  tail: {
    type: Sequelize.STRING
  },
  finSconstruction: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.STRING
  }
});

Board.hasMany(ImagePath, { as: "Images" });

/**
 * Api routes
 */

// Create new board
router.post("/", (req, res) => {
  const {
    brand,
    type,
    model,
    length,
    thickness,
    width,
    volume,
    finSetUp,
    tail,
    construction,
    location,
    userId,
    images
  } = req.body;
  Board.findAll().then(() => {
    return Board.create({
      brand,
      location,
      type,
      model,
      length,
      thickness,
      width,
      volume,
      finSetUp,
      tail,
      construction,
      userId,
      images
    }).then(board => {
      if (images) {
        ImagePath.create({ path: images }).then(imgs => {
          board.setImages(imgs);
        });
      }
      res.status(200).send(JSON.stringify(board));
    });
  });
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

// Get boards by Id
router.get("/byUserId/:id", (req, res) => {
  const { id } = req.params;
  let boards = allBoards.filter((obj)=>{
    return obj.userId == id
  })
  res.status(200).send(JSON.stringify(boards));
});

module.exports = router;
