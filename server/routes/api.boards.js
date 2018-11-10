const express = require("express");
const router = express.Router();
const Sequelize = require("Sequelize");
const db = require("../getDb.js");
const BoardImages = require("../mock/images.json");
const BoardsOptions =require("../mock/BoardsOptions.json");

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

let mockSurfboard = []
const surfboards = (()=> Board.findAll()
    .then(boardsArray => {
      let index = 0;
      boardsArray.forEach((element, i) => {
        index>9? index = 0: null;
        let imgArray =[BoardImages.images[index],BoardImages.images[index+1],BoardImages.images[index+2]]
        element.dataValues["images"] = imgArray;
        index++
      });
      mockSurfboard = boardsArray
      return boardsArray;
    }))()

   
   
    
    

// Get all boards
router.get("/", (req, res) => {
  Board.findAll()
    .then(boardsArray => {
      let index = 0;
      boardsArray.forEach((element, i) => {
        index>9? index = 0: null;
        let imgArray =[BoardImages.images[index],BoardImages.images[index+1],BoardImages.images[index+2]]
        element.dataValues["images"] = imgArray;
        index++
      });
      return boardsArray;
    })
    .then(boardsArray => {
      res.status(200).send(boardsArray);
    });
});

//post boards by selection
router.post("/bySelection", (req, res) => {
  res.status(200).send(mockSurfboard);
  console.log("req.body:", req.body)
  console.log("req.params:", req.params)
});

//get boards options
router.get("/options", (req, res) => {
  res.status(200).send(BoardsOptions);
});

// Get board by Id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let board = mockSurfboard[id-1]
  res.status(200).send(JSON.stringify(board));
});

module.exports = router;
