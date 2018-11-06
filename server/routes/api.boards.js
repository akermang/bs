const express = require("express");
const router = express.Router();
const Sequelize = require("Sequelize");
const db = require("../getDb.js");
const BoardImages = require("../mock/images.json");
console.log("BoardImages.images:", BoardImages.images);
const imgData = [
  "https://www.haydenshapes.com/wp-content/uploads/2017/08/HSSTUDiO_Home.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDWs4i_CMbON7eCMEGHnFpB8zaKNmZcDYeyTp8t3nlnlQUxWgww",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMifmGSN85hcY8wwfIixNZFAVqBYmN7Sdt1i4rdGoE3QUjDjKP"
];
console.log("imgData:", imgData)
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

// const boardsArrayWithImages = [];

// Board.findAll().then(boardsArray => {
//   boardsArray.forEach(element => {
//     let id = element.dataValues.id;
//     aadImagesToBoard(id);
//   });
// });

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

const aadImagesToBoard = id => {
  Board.findOne({ where: id }).then(r => {
    r.getImages().then(imgs => {
      let board = r.dataValues;
      if (imgs && imgs[0] && imgs[0].dataValues.path) {
        board["images"] = imgs[0].dataValues.path;
        boardsArrayWithImages.push(board);
        console.log("IIIIIIIIIMMMAAAGGGG  AAD");
      } else {
        r.dataValues["images"] = [
          "https://i.pinimg.com/736x/2f/56/bd/2f56bd2ca239bdd0c739a7ad7c21361f--surfboard-art-surf-boards.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhUKLd_CkTdE-oJMaK3wt09r_md6caBOzbs_M92jI3sIgXuEL",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMifmGSN85hcY8wwfIixNZFAVqBYmN7Sdt1i4rdGoE3QUjDjKP"
        ];
        boardsArrayWithImages.push(r.dataValues);
      }
    });
  });
};

// Get all boards
router.get("/", (req, res) => {
  Board.findAll()
    .then(boardsArray => {
      // async function someFunction() {
      //   const j = boardsArray.length;
      //   for (let i = 0; i < j - 1; i++) {
      //     let id = boardsArray[i].dataValues.id;
      //     // wait for the promise to resolve before advancing the for loop
      //     await aadImagesToBoard(id);
      //     console.log(i);
      //   }
      //   console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
      // }
      // someFunction();
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
      console.log("SSSSEEEENNNND 200");
    });
});

// Get board by Id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Board.findOne({ where: { Id: id } }).then(r => {
    if (r) {
      r
        .getImages()
        .then(imgs => {
          return imgs;
        })
        .then(imgs => {
          let board = r.dataValues;
          if (imgs && imgs[0] && imgs[0].dataValues.path) {
            board["images"] = imgs[0].dataValues.path;
          }
          res.status(200).send(JSON.stringify(board));
        });
    } else {
      res.status(200).send(JSON.stringify({}));
    }
  });
});

module.exports = router;
