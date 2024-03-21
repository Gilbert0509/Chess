let prompt = require("prompt-sync")();
console.log("");
let whiteTurn = true;
//Github initalised
let jack = "¶";

let lette;
let numb;
//ChessBoard

const squareBlack = "□";

const squareWhite = "■";

//Black Pieces

const pawnBlack = "♙";

const knightBlack = "♘";

const kingBlack = "♔";

const queenBlack = "♕";

const rookBlack = "♖";

const bishopBlack = "♗";

//White Pieces

const bishopWhite = "♝";

const rookWhite = "♜";

const queenWhite = "♛";

const knightWhite = "♞";

const pawnWhite = "♟";

const kingWhite = "♚";

function whatMove(piece) {
  switch (piece) {
    case kingWhite:
      kingMovementOne()
      kingMovementTwo()
      break;
    case queenWhite:
      diagMove();
      straightMove();
      break;
    case bishopWhite:
      diagMove();
      break;
    case knightWhite:
      //knight move;
      break;
    case rookWhite:
      straightMove;
      break;
    case pawnWhite:
      pawnMove();
      break;
    case kingBlack:
      kingMovementOne()
      kingMovementTwo()
      break;
    case queenBlack:
      diagMove();
      straightMove();
      break;
    case bishopBlack:
      diagMove();
      break;
    case knightBlack:
      //knight movement;
      break;
    case rookBlack:
      straightMove();
      break;
    case pawnBlack:
      pawnMove();
    default:
      return false;
  }
}

let moveFromL;
let moveFromN;
let moveFromP;
let movetoL;
let movetoN;
function input(input) {
  moveFromL = prompt("What was the letter the piece is on:");
  moveFromN = prompt("What was the number the piece is on:");
  movetoL = prompt("What letter are you moving it to?:");
  movetoN = prompt("What number are you moving it to?:");
  translateMove(moveFromL, moveFromN);
  whatMove(displayBoard[moveFromN][moveFromL][0]);
}

let num = moveFromN;
let lete = moveFromL;
function display() {
  console.log("   " + "a" + "  " + "b" + "  " + "c" + "  " + "d" + "  " + "e" + "  " + "f" + "  " + "g" + "  " + "h");
  displayBoard.forEach((index, i) => {
    let counter = 9 - i
    if (i != 0) {
      console.log(
       counter + "  " +
          index[1][0] +
          "  " +
          index[2][0] +
          "  " +
          index[3][0] +
          "  " +
          index[4][0] +
          "  " +
          index[5][0] +
          "  " +
          index[6][0] +
          "  " +
          index[7][0] +
          "  " +
          index[8][0] +
          "  "
      );
    }
  });
  console.log("White turn = " + whiteTurn);
}
function Reversedisplay() {
  console.log("   " + "h" + "  " + "g" + "  " + "f" + "  " + "e" + "  " + "d" + "  " + "c" + "  " + "b" + "  " + "a");
  for (let i = 8; i > 0; i--) {
    let reverseCounter = 9 - i
    if (i != 0) {
      console.log(
      reverseCounter +  "  " +
          displayBoard[i][8][0] +
          "  " +
          displayBoard[i][7][0] +
          "  " +
          displayBoard[i][6][0] +
          "  " +
          displayBoard[i][5][0] +
          "  " +
          displayBoard[i][4][0] +
          "  " +
          displayBoard[i][3][0] +
          "  " +
          displayBoard[i][2][0] +
          "  " +
          displayBoard[i][1][0] +
          "  "
      );
    }
  }
  console.log("White turn = " + whiteTurn);
}
let boardArrayRep = [
  [],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 12, 22, 32, 42, 52, 62, 72, 82],
  [0, 13, 23, 33, 43, 53, 63, 73, 83],
  [0, 14, 24, 34, 44, 54, 64, 74, 84],
  [0, 15, 25, 35, 45, 55, 65, 75, 85],
  [0, 16, 26, 36, 46, 56, 66, 76, 86],
  [0, 17, 27, 37, 47, 57, 67, 77, 87],
  [0, 18, 28, 38, 48, 58, 68, 78, 88],
];
let displayBoard = [
  [],
  [
    0,
    [rookBlack, squareWhite],
    [knightBlack, squareBlack],
    [bishopBlack, squareWhite],
    [queenBlack, squareBlack],
    [kingBlack, squareWhite],
    [bishopBlack, squareBlack],
    [knightBlack, squareWhite],
    [rookBlack, squareBlack],
  ],
  [
    0,
    [pawnBlack, squareBlack, true],
    [pawnBlack, squareWhite, true],
    [pawnBlack, squareBlack, true],
    [pawnBlack, squareWhite, true],
    [pawnBlack, squareBlack, true],
    [pawnBlack, squareWhite, true],
    [pawnBlack, squareBlack, true],
    [pawnBlack, squareWhite, true],
  ],
  [
    0,
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
  ],
  [
    0,
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
  ],
  [
    0,
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
  ],
  [
    0,
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
    [squareBlack, squareBlack],
    [squareWhite, squareWhite],
  ],
  [
    0,
    [pawnWhite, squareWhite, true],
    [pawnWhite, squareBlack, true],
    [pawnWhite, squareWhite, true],
    [pawnWhite, squareBlack, true],
    [pawnWhite, squareWhite, true],
    [pawnWhite, squareBlack, true],
    [pawnWhite, squareWhite, true],
    [pawnWhite, squareBlack, true],
  ],
  [
    0,
    [rookWhite, squareBlack],
    [knightWhite, squareWhite],
    [bishopWhite, squareBlack],
    [queenWhite, squareWhite],
    [kingWhite, squareBlack],
    [bishopWhite, squareWhite],
    [knightWhite, squareBlack],
    [rookWhite, squareWhite],
  ],
];
let Ogsquare;
let MoveToSquare;
let cluniesMum;
function marisaCurls(curls) {
  if (whiteTurn == true) {
    switch (curls) {
      case kingWhite:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      case queenWhite:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      case bishopWhite:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      case knightWhite:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      case rookWhite:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      case pawnWhite:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      default:
        possibleMove = true;
        break;
    }
  }
  if (whiteTurn == false) {
    switch (curls) {
      case kingBlack:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      case queenBlack:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      case bishopBlack:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      case knightBlack:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      case rookBlack:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      case pawnBlack:
        console.log("You cant move it here dumbass");
        possibleMove = false;
        break;
      default:
        possibleMove = true;
        break;
    }
  }
}
function translateMove(moveFroml, moveFromn) {
  //letter Translate
  switch (moveFroml) {
    case "a":
      moveFromL = 1;
      break;
    case "b":
      moveFromL = 2;
      break;
    case "c":
      moveFromL = 3;
      break;
    case "d":
      moveFromL = 4;
      break;
    case "e":
      moveFromL = 5;
      break;
    case "f":
      moveFromL = 6;
      break;
    case "g":
      moveFromL = 7;
      break;
    case "h":
      moveFromL = 8;
      break;
    default:
      console.log("Clunie");
      break;
  }
  lette = moveFromL;
  //Number translate
  switch (moveFromn) {
    case "1":
      moveFromN = 8;
      break;
    case "2":
      moveFromN = 7;
      break;
    case "3":
      moveFromN = 6;
      break;
    case "4":
      moveFromN = 5;
      break;
    case "5":
      moveFromN = 4;
      break;
    case "6":
      moveFromN = 3;
      break;
    case "7":
      moveFromN = 2;
      break;
    case "8":
      moveFromN = 1;
      break;
    default:
      console.log("Josh");
      break;
  }
  numb = moveFromN;
  switch (movetoL) {
    case "a":
      movetoL = 1;
      break;
    case "b":
      movetoL = 2;
      break;
    case "c":
      movetoL = 3;
      break;
    case "d":
      movetoL = 4;
      break;
    case "e":
      movetoL = 5;
      break;
    case "f":
      movetoL = 6;
      break;
    case "g":
      movetoL = 7;
      break;
    case "h":
      movetoL = 8;
      break;
    default:
      console.log("Clunie");
      break;
  }
  //Number translate
  switch (movetoN) {
    case "1":
      movetoN = 8;
      break;
    case "2":
      movetoN = 7;
      break;
    case "3":
      movetoN = 6;
      break;
    case "4":
      movetoN = 5;
      break;
    case "5":
      movetoN = 4;
      break;
    case "6":
      movetoN = 3;
      break;
    case "7":
      movetoN = 2;
      break;
    case "8":
      moveFromN = 1;
      break;
    default:
      console.log("Josh");
      break;
  }
}
let possibleMove = true;
function executeMove() {
  boardArrayRep.forEach((item, index) => {
    item.forEach((square, i) => {
      if (square == MoveToSquare) {
        possibleMove = true
      }
    });
  });
  if (possibleMove == true) {
    boardArrayRep.forEach((item, index) => {
      item.forEach((square, i) => {
        if (square == Ogsquare) {
          cluniesMum = displayBoard[index][i][0];
          displayBoard[index][i][0] = displayBoard[index][i][1];
        }
      });
    });
    boardArrayRep.forEach((item, index) => {
      item.forEach((square, i) => {
        if (square == MoveToSquare) {
          displayBoard[index][i][0] = cluniesMum;
        }
      });
    });
  } else {
    turn();
  }
}
function pawnMove() {
  if (whiteTurn == true) {
    Ogsquare = boardArrayRep[moveFromN][moveFromL];
    MoveToSquare = boardArrayRep[movetoN][movetoL];
    moveFromN = moveFromN - 1;
    if (MoveToSquare == boardArrayRep[moveFromN][moveFromL]) {
      executeMove();
      whiteTurn = false;
    } else {
      console.log("You cannot move it here dumbass");
      input();
    }
  } else if (whiteTurn == false) {
    Ogsquare = boardArrayRep[moveFromN][moveFromL];
    MoveToSquare = boardArrayRep[movetoN][movetoL];
    moveFromN = moveFromN + 1;
    if (MoveToSquare == boardArrayRep[moveFromN][moveFromL]) {
      console.log("Success");
      executeMove();
      whiteTurn = true;
    } else {
      console.log("You cannot move that here");
      input();
    }
  }
}
let alive = true;
let n;

function turn() {
  if (whiteTurn == true) {
  display();
  } else {
    Reversedisplay()
  }
  input();
}
while ((alive = true)) {
  turn();
}

function diagMove() {
  numb = moveFromN;
  lette = moveFromL;
  let equalsquare = false;
  let edgeOfBoard = false;
  Ogsquare = boardArrayRep[numb][lette];
  MoveToSquare = boardArrayRep[movetoN][movetoL];
  for (let item = 1; item < boardArrayRep.length; item++) {
    for (let square = 1; square < boardArrayRep[item].length; square++) {
      if ((boardArrayRep[item][square] = Ogsquare)) {
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is jacked");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb--;
            lette--;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          // up and right
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is handsome");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb++;
            lette--;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is buetiful");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb--;
            lette++;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is amazing");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb++;
            lette++;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
      }
    }
  }
}

function checkPie(spot) {
  switch (spot) {
    case kingWhite:
      return false;
    case queenWhite:
      return false;
    case bishopWhite:
      return false;
    case knightWhite:
      return false;
    case rookWhite:
      return false;
    case pawnWhite:
      return false;
    case kingBlack:
      return false;
    case queenBlack:
      return false;
    case bishopBlack:
      return false;
    case knightBlack:
      return false;
    case rookBlack:
      return false;
    case pawnBlack:
      return false;
    default:
      return true;
  }
}

function straightMove() {
  numb = moveFromN;
  lette = moveFromL;
  let equalsquare = false;
  let edgeOfBoard = false;
  Ogsquare = boardArrayRep[numb][lette];
  MoveToSquare = boardArrayRep[movetoN][movetoL];
  for (let item = 1; item < boardArrayRep.length; item++) {
    for (let square = 1; square < boardArrayRep[item].length; square++) {
      if ((boardArrayRep[item][square] = Ogsquare)) {
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is great");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            lette--;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          // up and right
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is sexy");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            lette++;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is hot");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb--;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is smart");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb++;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
      }
    }
  }
}

function kingMovementOne() {
  numb = moveFromN;
  lette = moveFromL;
  let equalsquare = false;
  let edgeOfBoard = false;
  Ogsquare = boardArrayRep[numb][lette];
  MoveToSquare = boardArrayRep[movetoN][movetoL];
  for (let item = 1; item < 2; item++) {
    for (let square = 1; square < 2; square++) {
      if ((boardArrayRep[item][square] = Ogsquare)) {
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is jacked");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb--;
            lette--;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          // up and right
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is handsome");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb++;
            lette--;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is buetiful");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb--;
            lette++;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is amazing");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb++;
            lette++;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
      }
    }
  }
}
function kingMovementTwo() {
  numb = moveFromN;
  lette = moveFromL;
  let equalsquare = false;
  let edgeOfBoard = false;
  Ogsquare = boardArrayRep[numb][lette];
  MoveToSquare = boardArrayRep[movetoN][movetoL];
  for (let item = 1; item < 2; item++) {
    for (let square = 1; square < 2; square++) {
      if ((boardArrayRep[item][square] = Ogsquare)) {
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is great");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            lette--;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          // up and right
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is sexy");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            lette++;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is hot");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb--;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is smart");
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            executeMove();
            return;
          } else {
            numb++;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
      }
    }
  }
}

function knightMovement() {
  numb = moveFromN
  lette = moveFromL
  
}


// // king movement prototype
// let yes = 1
// while (yes == 1) {
//   if (numb + 1 == 9 || lette + 1 == 9) {
//     edgeOfBoard = true;
//     return;
//   } else if (MoveToSquare == boardArrayRep[numb + 1][lette + 1]) {
//     equalsquare = true;
//     edgeOfBoard = true;
//     console.log("Clunie is not gay");
//     if (whiteTurn == true) {
//       whiteTurn = false;
//     } else {
//       whiteTurn = true;
//     }
//     executeMove();
//     return;
//   } else {
//     yes++
//   }
// }
// if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
//   edgeOfBoard = true;
//   return;
// }