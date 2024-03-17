let prompt = require("prompt-sync")();
console.log("");
let whiteTurn = true
//Github initalised 

//ChessBoard

const squareBlack = "□"

const squareWhite = "■"

//Black Pieces

const pawnBlack = "♙"

const knightBlack = "♘"

const kingBlack = "♔"

const queenBlack = "♕"

const rookBlack = "♖"

const bishopBlack = "♗"

//White Pieces

const bishopWhite = "♝"

const rookWhite = "♜"

const queenWhite = "♛"

const knightWhite = "♞"

const pawnWhite = "♟"

const kingWhite = "♚"

//column a
let a1 = rookBlack;
let a2 = "";
let a3 = "";
let a4 = "";
let a5 = "";
let a6 = "";
let a7 = "";
let a8 = "";

//column b
let b1 = "";
let b2 = "";
let b3 = "";
let b4 = "";
let b5 = "";
let b6 = "";
let b7 = "";
let b8 = "";

//comumn c
let c1 = "";
let c2 = "";
let c3 = "";
let c4 = "";
let c5 = "";
let c6 = "";
let c7 = "";
let c8 = "";

//column d
let d1 = "";
let d2 = "";
let d3 = "";
let d4 = "";
let d5 = "";
let d6 = "";
let d7 = "";
let d8 = "";

//comumn e
let e1 = "";
let e2 = "";
let e3 = "";
let e4 = "";
let e5 = "";
let e6 = "";
let e7 = "";
let e8 = "";

//column f
let f1 = "";
let f2 = "";
let f3 = "";
let f4 = "";
let f5 = "";
let f6 = "";
let f7 = "";
let f8 = "";

//column g
let g1 = "";
let g2 = "";
let g3 = "";
let g4 = "";
let g5 = "";
let g6 = "";
let g7 = "";
let g8 = "";

//column h
let h1 = "";
let h2 = "";
let h3 = "";
let h4 = "";
let h5 = "";
let h6 = "";
let h7 = "";
let h8 = "";


let moveFromL;
let moveFromN;
let moveFromP;
let movetoL;
let movetoN;
function input(input) {
  moveFromL = prompt("What was the letter the piece is on")
  moveFromN = prompt("What was the number the piece is on")
  moveFromP = prompt("What is the piece")
  movetoL = prompt("What letter are you moving it to?")
  movetoN = prompt("What number are you moving it to?")
  translateMove(moveFromL, moveFromN)
}

function display() {
  console.log("|" + a1 + "|" + b1 + "|" + c1 + "|" + d1 + "|" + e1 + "|" + f1 + "|" + g1 + "|" + h1 + "|")
  console.log("|" + a2 + "|" + b2 + "|" + c2 + "|" + d2 + "|" + e2 + "|" + f2 + "|" + g2 + "|" + h2 + "|") 
  console.log("|" + a3 + "|" + b3 + "|" + c3 + "|" + d3 + "|" + e3 + "|" + f3 + "|" + g3 + "|" + h3 + "|")
  console.log("|" + a4 + "|" + b4 + "|" + c4 + "|" + d4 + "|" + e4 + "|" + f4 + "|" + g4 + "|" + h4 + "|")
  console.log("|" + a5 + "|" + b5 + "|" + c5 + "|" + d5 + "|" + e5 + "|" + f5 + "|" + g5 + "|" + h5 + "|")
  console.log("|" + a6 + "|" + b6 + "|" + c6 + "|" + d6 + "|" + e6 + "|" + f6 + "|" + g6 + "|" + h6 + "|")
  console.log("|" + a7 + "|" + b7 + "|" + c7 + "|" + d7 + "|" + e7 + "|" + f7 + "|" + g7 + "|" + h7 + "|")
  console.log("|" + a8 + "|" + b8 + "|" + c8 + "|" + d8 + "|" + e8 + "|" + f8 + "|" + g8 + "|" + h8 + "|")
}

let boardArrayRep = [[],
[0, 1, 2, 3, 4, 5, 6, 7, 8],
[0, 12, 22, 32, 42, 52, 62, 72, 82],
[0, 13, 23, 33, 43, 53, 63, 73, 83],
[0, 14, 24, 34, 44, 54, 64, 74, 84],
[0, 15, 25, 35, 45, 55, 65, 75, 85],
[0, 16, 26, 36, 46, 56, 66, 76, 86],
[0, 17, 27, 37, 47, 57, 67, 77, 87],
[0, 18, 28, 38, 48, 58, 68, 78, 88],
]
let Ogsquare
let MoveToSquare
function translateMove(moveFroml, moveFromn) {
  //letter Translate
  switch(moveFroml) {
    case "a":
    moveFromL = 1
    break;
    case "b":
    moveFromL = 2
    break;
    case "c":
    moveFromL = 3
    break;
    case "d":
    moveFromL = 4
    break;
    case "e":
    moveFromL = 5
    break;
    case "f":
    moveFromL = 6
    break;
    case "g":
    moveFromL = 7
    break;
    case "h":
    moveFromL = 8
    break;
    default:
    console.log("Clunie")
    break;
  }
  //Number translate
  switch(moveFromn) {
    case "1":
    moveFromN = 8
    break;
    case "2":
    moveFromN = 7
    break;
    case "3":
    moveFromN = 6
    break;
    case "4":
    moveFromN = 5
    break;
    case "5":
    moveFromN = 4
    break;
    case "6":
    moveFromN = 3
    break;
    case "7":
    moveFromN = 2
    break;
    case "8":
    moveFromN = 1
    break;
    default:
    console.log("Josh")
    break;
  }
  switch(movetoL) {
    case "a":
      movetoL = 1
    break;
    case "b":
      movetoL = 2
    break;
    case "c":
      movetoL = 3
    break;
    case "d":
      movetoL = 4
    break;
    case "e":
      movetoL = 5
    break;
    case "f":
      movetoL = 6
    break;
    case "g":
      movetoL = 7
    break;
    case "h":
      movetoL = 8
    break;
    default:
    console.log("Clunie")
    break;
  }
  //Number translate
  switch(movetoN) {
    case "1":
      movetoN = 8
    break;
    case "2":
      movetoN = 7
    break;
    case "3":
      movetoN = 6
    break;
    case "4":
      movetoN = 5
    break;
    case "5":
      movetoN = 4
    break;
    case "6":
      movetoN = 3
    break;
    case "7":
      movetoN = 2
    break;
    case "8":
    moveFromN = 1
    break;
    default:
    console.log("Josh")
    break;
  }
}
function pawnMove() {
  if (whiteTurn == true) {
    MoveToSquare = boardArrayRep[movetoN][movetoL];
    moveFromN = (moveFromN - 1)
    if (MoveToSquare = boardArrayRep[moveFromN][moveFromL]) {
      console.log("Success")
    } else {
      console.log("Failure")
    }
  }
}

input()
pawnMove()