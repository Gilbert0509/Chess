//BEFOREHAND KNOWLEDGE
/*here is the main idea for the structure of the code.
Basically we have two arrays, one is used for representing the board to the computer, it will use this to check if moves are possible. The other is used to display the 
pieces to the board. The idea is you enter what square youre moving from, too. Then the system will do a couple things, 1st it will check what piece you want to move. Then 
it will check if the move is therefore possible using one of the movement functions. Then using executeMove() it will try to execute the current move, it will check a few 
things before doing so that the rest of the code doesnt check for. After this it will execute the move and move on with the game. Things that do not exist -
en passant - i tried it (you can see it in the pawn movement function). This was roughly the time i gave up on the project so last i remember it did kinda work and kinda not
castling - I simply forgot and instead of doing this again i would like to test my knowledge of C and try it in C

Please be nice i did this ages ago and am noticing millions of ineficiencies. I did NOT plan this out and just kinda winged it so a lot of stuff doesnt mix well but pointers would be nice*/

let ask = require("prompt-sync")();
//checks if the user wants to concede
function prompt(words) {
  let skibidi = ask(words)
  if (skibidi.toLowerCase() == "concede") {
    alive = false
    if (whiteTurn == true) {
      console.log("Damn Black is goated")
    } else if (whiteTurn == false) {
      console.log("BRO IS TRAAAASH")
    }
  } else {
    return skibidi;
  }
}

console.log("");
let whiteTurn = true;
//Github initalised
let jack = "¶";

let thisMove = true

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

//checks the piece youve selected depending on where you said youre moving from, and runs the functions to check if you can execute the move
function whatMove(piece) {
  console.log("here 1")
  if (marisaCurls(piece) == false) {
  thisMove = true
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
      knightMovement();
      break;
    case rookWhite:
      straightMove();
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
      knightMovement()
      break;
    case rookBlack:
      straightMove();
      break;
    case pawnBlack:
      pawnMove();
    default:
      return false;
  }
} else {
  input()
}}


let moveFromL;
let moveFromN;
let movetoL;
let movetoN;
//takes the input
function input() {
  moveFromL = prompt("What was the letter the piece is on:");
  if (alive == false) {
    return;
  }
  moveFromN = prompt("What was the number the piece is on:");
  if (alive == false) {
    return;
  }
  movetoL = prompt("What letter are you moving it to?:");
  if (alive == false) {
    return;
  }
  movetoN = prompt("What number are you moving it to?:");
  if (alive == false) {
    return;
  }
  let check = translateMove(moveFromL, moveFromN);
  if (check == false) {
    console.log("Incorrect Input")
    input()
  } else {
  console.log(moveFromL, moveFromN, movetoL, movetoN)
  console.log(displayBoard[moveFromN][moveFromL][0])
  whatMove(displayBoard[moveFromN][moveFromL][0]);
  }
}
//these display board for black and white
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

function toggleTurn() {
  if (whiteTurn == true) {
    whiteTurn = false;
  } else {
    whiteTurn = true;
  }
}

//what the code uses to check if there are possible moves
let boardArrayRep = [
  [],
  [0, 1,  2,  3,  4,  5,  6,  7,  8 ],
  [0, 12, 22, 32, 42, 52, 62, 72, 82],
  [0, 13, 23, 33, 43, 53, 63, 73, 83],
  [0, 14, 24, 34, 44, 54, 64, 74, 84],
  [0, 15, 25, 35, 45, 55, 65, 75, 85],
  [0, 16, 26, 36, 46, 56, 66, 76, 86],
  [0, 17, 27, 37, 47, 57, 67, 77, 87],
  [0, 18, 28, 38, 48, 58, 68, 78, 88],
];

function promotion() {
  moveFromN = ogN 
  if (whiteTurn == true) {
    console.log(displayBoard[moveFromL][moveFromN][0])
    if (movetoN == 1) {
      let promotionPiece = prompt("What piece are you promoting to?:")
      switch(promotionPiece) {
        case "knight":
          displayBoard[movetoL][movetoN][0] = knightWhite;
          displayBoard[moveFromL][moveFromN][0] = displayBoard[moveFromL][moveFromN][1];
          return;
        case "queen":
          displayBoard[movetoL][movetoN][0] = queenWhite;
          displayBoard[moveFromL][moveFromN][0] = displayBoard[moveFromL][moveFromN][1];
          return;
        case "rook":
          displayBoard[movetoL][movetoN][0] = rookWhite;
          displayBoard[moveFromL][moveFromN][0] = displayBoard[moveFromL][moveFromN][1];
          return;
        case "bishop":
          displayBoard[movetoL][movetoN][0] = bishopWhite;
          displayBoard[moveFromL][moveFromN][0] = displayBoard[moveFromL][moveFromN][1];
          return;
        default:
          promotion()
          return;
      }
    }
  } else {
    if (movetoN == 8) {
      let promotionPiece = prompt("What piece are you promoting to?:")
      switch(promotionPiece) {
        case "knight":
          displayBoard[movetoL][movetoN][0] = knightBlack;
          displayBoard[moveFromL][moveFromN][0] = displayBoard[moveFromL][moveFromN][1];          
          return;
        case "queen":
          displayBoard[movetoL][movetoN][0] = queenBlack;
          displayBoard[moveFromL][moveFromN][0] = displayBoard[moveFromL][moveFromN][1];
          return;
        case "rook":
          displayBoard[movetoL][movetoN][0] = rookBlack;
          displayBoard[moveFromL][moveFromN][0] = displayBoard[moveFromL][moveFromN][1];
          return;
        case "bishop":
          displayBoard[movetoL][movetoN][0] = bishopBlack;
          displayBoard[moveFromL][moveFromN][0] = displayBoard[moveFromL][moveFromN][1];
          return;
        default:
          promotion();
          return;
      }
    }
  }
  console.log(displayBoard[moveFromL][moveFromN][0])
  return false;
}
//what the code uses to represent the board
let displayBoard = [
  [],
  [
    0,
    [rookBlack, squareWhite, false],
    [knightBlack, squareBlack, false],
    [bishopBlack, squareWhite, false],
    [queenBlack, squareBlack, false],
    [kingBlack, squareWhite, false],
    [bishopBlack, squareBlack, false],
    [knightBlack, squareWhite, false],
    [rookBlack, squareBlack, false],
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
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
  ],
  [
    0,
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
  ],
  [
    0,
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
  ],
  [
    0,
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
    [squareBlack, squareBlack, false],
    [squareWhite, squareWhite, false],
  ],
  [
    0,
    [pawnWhite, squareWhite, true],
    [pawnWhite, squareBlack, true],
    [pawnWhite, squareWhite, true],
    [pawnWhite, squareBlack, true],
    [pawnWhite, squareWhite, true],
    [pawnWhite, squareBlack, true],
    [pawnBlack, squareWhite, true],
    [pawnWhite, squareBlack, true],
  ],
  [
    0,
    [rookWhite, squareBlack, false],
    [knightWhite, squareWhite, false],
    [bishopWhite, squareBlack, false],
    [queenWhite, squareWhite, false],
    [kingWhite, squareBlack, false],
    [bishopWhite, squareWhite, false],
    [knightWhite, squareBlack, false],
    [rookWhite, squareWhite, false],
  ],
];

let Ogsquare;
let MoveToSquare;
let cluniesMum;
//(ignore the variable name) this checks if youre trying to take one of your own pieces
function marisaCurls(curls) {
  if (whiteTurn == true) {
    switch (curls) {
      case kingWhite:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      case queenWhite:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      case bishopWhite:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      case knightWhite:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      case rookWhite:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      case pawnWhite:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      default:
        possibleMove = true;
        return true;
    }
  } if (whiteTurn == false) {
    switch (curls) {
      case kingBlack:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      case queenBlack:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      case bishopBlack:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      case knightBlack:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      case rookBlack:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      case pawnBlack:
        console.log("nuh uh");
        possibleMove = false;
        return false;
      default:
        possibleMove = true;
        return true;
    }
  }
}

//need to redo this function at some point, it takes what youve entered and changes it into index numbers for the computer to use. Also if it is not possible to do this it returns false
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
      console.log("Here1")
      return false
  }
  lette = moveFromL; //woah i dont thing i use this ever again
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
      return false
  }
  numb = moveFromN; //neither this
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
      return false
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
      movetoN = 1;
      break;
    default:
      return false
  }
}

let possibleMove = true;
//executes the move while checking a couple small general things as well
function executeMove() {
  boardArrayRep.forEach((item, index) => {
    item.forEach((square, i) => {
      if (square == MoveToSquare) {//i realise now how inefective this whole function is mainly but at the time i hadnt coded all the individual functions to move pieces
        marisaCurls(displayBoard[index][i][0]);
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
          if (displayBoard[index][i][0] == kingBlack) {
            alive = false
            console.log("black lost")
          } if (displayBoard[index][i][0] == kingWhite) {
            alive = false
            console.log("white lost")
          }
          displayBoard[index][i][0] = cluniesMum; //again ignore variable name there was some beef at the time
        }
      });
    });
    toggleTurn()
  }
}

let ogN;
//i dont even remember half of whats going on here. The pawn can do a lot of things i realised very quick
function pawnMove() {
  ogN = moveFromN
  if (whiteTurn == true) {
    Ogsquare = boardArrayRep[moveFromN][moveFromL];
    MoveToSquare = boardArrayRep[movetoN][movetoL];
    if (displayBoard[moveFromN][moveFromL][2] == true) {
      if (MoveToSquare == boardArrayRep[moveFromN - 2][moveFromL]) {
        if (checkPie(displayBoard[moveFromN - 2][movetoL][0]) == true) {
          displayBoard[moveFromN][movetoL][2] = false
          displayBoard[moveFromN - 1][movetoL][2] = true
          executeMove();
          return;
        } else {
          console.log("You cannot move it here dumbass");
        }
      }
    }
    moveFromN = moveFromN - 1;
    if (MoveToSquare == boardArrayRep[moveFromN][moveFromL]) {
       if (checkPie(displayBoard[moveFromN][movetoL][0]) == true) {
        //here
         if (promotion() == false) {
         executeMove();
        } else {
          toggleTurn()
          return
        }
         return;
       } else {
         console.log("You cannot move it here dumbass");
       }
    } else if (MoveToSquare == boardArrayRep[moveFromN][moveFromL + 1] || MoveToSquare == boardArrayRep[moveFromN][moveFromL - 1]) {
         if (checkPie(displayBoard[movetoN][movetoL][0]) == false) {
          // here
          if (promotion() == false) {
            executeMove();
           } else {
            toggleTurn()
          return
          }
         return;
        }
    } else if (displayBoard[moveFromN][moveFromL+1][2] == true) {
      executeMove()
      displayBoard[moveFromN][moveFromL+1][2] = false
      displayBoard[moveFromN + 1][moveFromL+1][0] = displayBoard[moveFromN + 1][moveFromL+1][1]
    } else if (displayBoard[moveFromN][moveFromL-1][2] == true) {
      executeMove()
      displayBoard[moveFromN][moveFromL-1][2] = false
      displayBoard[moveFromN + 1][moveFromL-1][0] = displayBoard[moveFromN + 1][moveFromL-1][1]
    } else {
      console.log("You cannot move it here ");
      input();
    }
    
  } else if (whiteTurn == false) {  //checks for blacks pawns
    Ogsquare = boardArrayRep[moveFromN][moveFromL];
    MoveToSquare = boardArrayRep[movetoN][movetoL];
    if (moveFromN != 7) {
    if (displayBoard[moveFromN][moveFromL][2] == true) {
      if (MoveToSquare == boardArrayRep[moveFromN + 2][moveFromL]) {
        if (checkPie(displayBoard[moveFromN + 2][movetoL][0]) == true) {
          displayBoard[moveFromN][movetoL][2] = false
          displayBoard[moveFromN + 1][movetoL][2] = true
          executeMove();
          return;
        } else {
          console.log("You cannot move it here ");
        }
      }
    }}
    moveFromN = moveFromN + 1;
    if (MoveToSquare == boardArrayRep[moveFromN][moveFromL]) {
      if (checkPie(displayBoard[moveFromN][movetoL][0]) == true) {
        //here
        if (promotion() == false) {
          executeMove();
         } else {
          toggleTurn()
          return
        }
         return;
       } else {
         console.log("You cannot move it here ");
       }
    } else if (MoveToSquare == boardArrayRep[moveFromN][moveFromL + 1] || MoveToSquare == boardArrayRep[moveFromN][moveFromL - 1]) {
      if (checkPie(displayBoard[movetoN][movetoL][0]) == false) {
        //here
        if (promotion() == false) {
          executeMove();
         } else {
          toggleTurn()
          return;
        }
         return;
       }
    } else if (displayBoard[moveFromN][moveFromL+1][2] == true) {
      executeMove()
      displayBoard[moveFromN][moveFromL+1][2] = false
      displayBoard[moveFromN - 1][moveFromL+1][0] = displayBoard[moveFromN - 1][moveFromL+1][1]
    } else if (displayBoard[moveFromN][moveFromL-1][2] == true) {
      executeMove()
      displayBoard[moveFromN][moveFromL-1][2] = false
      displayBoard[moveFromN - 1][moveFromL-1][0] = displayBoard[moveFromN - 1][moveFromL-1][1]
    }  else {
      console.log("You cannot move that here");
      input();
    }
  }
}

let alive = true;
let n;

let equalsquare = false;
let edgeOfBoard = false;


//if youre wondering why i am redefining board array rep it was cause of an old bug that im pretty sure refedined it for some reason
function turn() {
  boardArrayRep = [
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
  if (whiteTurn == true) {
  display();
  } else {
    Reversedisplay()
  }
  input();
}

let antiDissapear;

while ((alive == true)) {
  turn();
}

//diagonal movement. Basically raytraces (in its own really special way) in each direction it can. It does this for all of the movement function going forward
function diagMove() {
  numb = moveFromN;
  lette = moveFromL;
  equalsquare = false;
  edgeOfBoard = false;
  Ogsquare = boardArrayRep[numb][lette];
  MoveToSquare = boardArrayRep[movetoN][movetoL];
  for (let item = 1; item < boardArrayRep.length; item++) {
    for (let square = 1; square < boardArrayRep[item].length; square++) {
      if (boardArrayRep[item][square] == Ogsquare) {
        numb--;
        lette--;
        while (edgeOfBoard == false) {
          console.log(MoveToSquare)
          console.log(boardArrayRep[numb][lette])
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
            //console.log("could be issue1")
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            equalsquare = true;
            edgeOfBoard = true;
            //console.log("Clunie is jacked diag");
            executeMove();
            return;
          } else if(checkPie(displayBoard[numb][lette][0]) == false) {
            edgeOfBoard = true
            //console.log("could be issue with me")
           // console.log(displayBoard[numb][lette][0])
          }  else {
            numb--;
            lette--;
            console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        numb++;
        lette--;
        while (edgeOfBoard == false) {
         // console.log(MoveToSquare)
         // console.log(boardArrayRep[numb][lette])
          // up and right
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
            console.log("could be issue2")
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
           // console.log("Clunie is handsome diag");
            executeMove();
            return;
          } else if(checkPie(displayBoard[numb][lette][0]) == false) {
            edgeOfBoard = true
           // console.log("could be issue with me")
          //  console.log(displayBoard[numb][lette][0])
          }  else {
            numb++;
            lette--;
           // console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        numb--;
        lette++;
        while (edgeOfBoard == false) {
          console.log(MoveToSquare)
          console.log(boardArrayRep[numb][lette])
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
         //   console.log("could be issue3")
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
         //   console.log("Clunie is buetiful diag");
            executeMove();
            return;
          } else if(checkPie(displayBoard[numb][lette][0]) == false) {
            edgeOfBoard = true
        //    console.log("could be issue with me")
        //    console.log(displayBoard[numb][lette][0])
          }  else {
            numb--;
            lette++;
         //   console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        numb++;
        lette++;
        while (edgeOfBoard == false) {
        //  console.log(MoveToSquare)
        //  console.log(boardArrayRep[numb][lette])
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          //  console.log("could be issue4")
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
          //  console.log("Clunie is amazing diag");
            executeMove();
            return;
          } else if(checkPie(displayBoard[numb][lette][0]) == false) {
            edgeOfBoard = true
          //  console.log(displayBoard[numb][lette][0])
          //  console.log("could be issue with me?")
          } else {
            numb++;
            lette++;
          //  console.log(numb, lette);
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        let thisMove = false
      //  console.log("ok so reaching here is a very very bad thing")
        return;
      }
    }
  }
}

//just checks if the space is occupied
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
   if (displayBoard[1][1][0] == rookBlack) {
     antiDissapear = true
   } else {
     antiDissapear = false
   }
  numb = moveFromN;
  lette = moveFromL;
  let equalsquare = false;
  let edgeOfBoard = false;
  Ogsquare = boardArrayRep[numb][lette];
  MoveToSquare = boardArrayRep[movetoN][movetoL];
  for (let item = 1; item < boardArrayRep.length; item++) {
    for (let square = 1; square < boardArrayRep[item].length; square++) {
      if (boardArrayRep[item][square] == Ogsquare) {
        numb--;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            //console.log("Clunie is jacked");
            executeMove();
            if (antiDissapear == true) {
              if (Ogsquare != 1) {
              displayBoard[1][1][0] = rookBlack
              }
            }
            //console.log(displayBoard[1][1][0])
            return;
          } else if(checkPie(displayBoard[numb][lette][0]) == false) {
            edgeOfBoard = true
          }  else {
            numb--;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        numb++;
        while (edgeOfBoard == false) {
          // up and right
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            //console.log("Clunie is handsome");
            executeMove();
            if (antiDissapear == true) {
              if (Ogsquare != 1) {
              displayBoard[1][1][0] = rookBlack
              }
            }
          } else if(checkPie(displayBoard[numb][lette][0]) == false) {
            edgeOfBoard = true
          }  else {
            numb++;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        lette++;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            //console.log("Clunie is buetiful");
            executeMove();
            if (whiteTurn == true) {
              whiteTurn = false;
            } else {
              whiteTurn = true;
            }
            return;
          } else if(checkPie(displayBoard[numb][lette][0]) == false) {
            edgeOfBoard = true
          }  else {
            lette++;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        lette--;
        while (edgeOfBoard == false) {
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            //console.log("Clunie is amazing");
            executeMove();
            if (antiDissapear == true) {
              if (Ogsquare != 1) {
              displayBoard[1][1][0] = rookBlack
              }
            }
            return;
          } else if(checkPie(displayBoard[numb][lette][0]) == false) {
            edgeOfBoard = true
          }  else {
            lette--;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
      }
    }
  }
}

//the reason it is in two functions is pure lazyness
function kingMovementOne() {
  numb = moveFromN;
  lette = moveFromL;
  let equalsquare = false;
  let edgeOfBoard = false;
  Ogsquare = boardArrayRep[numb][lette];
  MoveToSquare = boardArrayRep[movetoN][movetoL];
  for (let item = 1; item < 2; item++) {
    for (let square = 1; square < 2; square++) {
      if (boardArrayRep[item][square] == Ogsquare) {
        if (edgeOfBoard == false) {
          numb--;
          lette--;
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is jacked");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb++;
          lette--;
          // up and right
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is handsome");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb--;
          lette++;
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is buetiful");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb++;
          lette++;
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is amazing");
            executeMove();
            return;
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
      if (boardArrayRep[item][square] == Ogsquare) {
        if (edgeOfBoard == false) {
          lette--;
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is great");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          lette++;
          // up and right
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is sexy");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb--;
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is hot");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb++;
          if (numb == 9 || numb == 0 || lette == 0 || lette == 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is smart");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
      }
    }
  }
}
//do not know i even did this and was supprised when i realised i had. I havent looked over it in a while.
function knightMovement() {
  numb = moveFromN;
  lette = moveFromL;
  let equalsquare = false;
  let edgeOfBoard = false;
  Ogsquare = boardArrayRep[numb][lette];
  MoveToSquare = boardArrayRep[movetoN][movetoL];
  for (let item = 1; item < 2; item++) {
    for (let square = 1; square < 2; square++) {
      if (boardArrayRep[item][square] == Ogsquare) {
        if (edgeOfBoard == false) {
          numb--;
          numb--;
          lette--;
          if (numb >= 9 || numb <= 0 || lette <= 0 || lette >= 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is 1");
            executeMove();
            return;
          }
        } 
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb++;
          numb++;
          lette--;
          // up and right
          if (numb >= 9 || numb <= 0 || lette <= 0 || lette >= 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is 2");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb--;
          numb--;
          lette++;
          if (numb >= 9 || numb <= 0 || lette <= 0 || lette >= 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is 3");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb++;
          numb++;
          lette++;
          if (numb >= 9 || numb <= 0 || lette <= 0 || lette >= 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is 4");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb--;
          lette--;
          lette--;
          if (numb >= 9 || numb <= 0 || lette <= 0 || lette >= 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is 5");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb++;
          lette--;
          lette--;
          // up and right
          if (numb >= 9 || numb <= 0 || lette <= 0 || lette >= 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is 6");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb--;
          lette++;
          lette++;
          if (numb >= 9 || numb <= 0 || lette <= 0 || lette >= 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is 7");
            executeMove();
            return;
          }
        }
        numb = moveFromN;
        lette = moveFromL;
        edgeOfBoard = false;
        if (edgeOfBoard == false) {
          numb++;
          lette++;
          lette++;
          if (numb >= 9 || numb <= 0 || lette <= 0 || lette >= 9) {
            edgeOfBoard = true;
          } else if (MoveToSquare == boardArrayRep[numb][lette]) {
            //fix needed
            equalsquare = true;
            edgeOfBoard = true;
            console.log("Clunie is 8");
            executeMove();
            return;
          }
        }
      }
    }
  }
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