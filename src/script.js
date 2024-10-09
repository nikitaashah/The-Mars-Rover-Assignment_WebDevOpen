//=======================================================//
//                                                       //
//               THE MARS ROVER ASSIGNMENT               //
//   (WebDevOpen JavaScript Fundamentals Assignment 1)   //
//                    By Nikita Shah                     //
//                                                       //
//=======================================================//

//=================================//
//          Rover Objects          //
//=================================//

// Default direction of the rovers is always going to be North.

const rover1 = {
  roverNumber: 1,
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

const rover2 = {
  roverNumber: 2,
  direction: "N",
  x: 7,
  y: 4,
  travelLog: []
}

const marsRovers = [rover1, rover2];

//=============================//
//          Mars Grid          //
//=============================//

// Starting position of the rover is at [0, 0].
// Obstacles are represented by "X" in the grid and are present at the position [4, 1].

let marsGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, "X", 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//======================================================//
//          Rover's Current Direction Function          //
//======================================================//

function roverCurrentDirection(roverDirection) {
  if (roverDirection === "N") {
    return "NORTH";
  } else if (roverDirection === "S") {
    return "SOUTH";
  } else if (roverDirection === "E") {
    return "EAST";
  } else if (roverDirection === "W") {
    return "WEST";
  }
}

//==========================================//
//          Turning the Rover Left          //
//==========================================//

function turnLeft(rover) {
  
  console.log("========== TURN LEFT COMMAND called! ==========");
  
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  
  let currentDirection = roverCurrentDirection(rover.direction);
  
  console.log("The rover has TURNED LEFT and is pointing towards the " + currentDirection + " direction!");
}

//===========================================//
//          Turning the Rover Right          //
//===========================================//

function turnRight(rover) {
  
  console.log("========== TURN RIGHT COMMAND called! ==========");
  
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  
  let currentDirection = roverCurrentDirection(rover.direction);
  
  console.log("The rover has TURNED RIGHT and is pointing towards the " + currentDirection + " direction!");
}

//============================================//
//          Moving the Rover Forward          //
//============================================//

function moveForward(rover) {
  
  console.log("========== MOVE FORWARD COMMAND called! ==========");
  
  let mfX = rover.x;
  let mfY = rover.y;
  
  switch(rover.direction) {
    case "N":
      mfY--;
      break;
    case "E":
      mfX++;
      break;
    case "S":
      mfY++;
      break;
    case "W":
      mfX--;
      break;
  }
  
  if (mfX >= 0 && mfX < 10 && mfY >= 0 && mfY < 10) {
    
    if (marsRovers.find(r => r.roverNumber !== rover.roverNumber && r.x === mfX && r.y === mfY)) {
      
      console.log("COLLISION ALERT!!! \nThe rover is going to run into another rover and therefore, cannot move forward!");
      
    } else if (marsGrid[mfX][mfY] === 0) {
      
      rover.travelLog.push("[" + rover.x + ", " + rover.y + "]");
      
      rover.x = mfX;
      rover.y = mfY;
      
      let currentDirection = roverCurrentDirection(rover.direction);
      
      console.log("The rover has MOVED FORWARD in the " + currentDirection + " direction, and, it's current position is at: [" + rover.x + ", " + rover.y + "].");
      
    } else if (marsGrid[mfX][mfY] === "X") {
      
      console.log("OBSTACLE ENCOUNTERED!!! \nThe rover cannot move forward!");
      
    }
    
  } else {
    
    console.log("!!!!!!!!!! ALERT !!!!!!!!!! \nThe rover is moving off the grid! \nMovement forbidden!");
    
  }
}

//=============================================//
//          Moving the Rover Backward          //
//=============================================//

function moveBackward(rover) {
  
  console.log("========== MOVE BACKWARD COMMAND called! ==========");
  
  let mbX = rover.x;
  let mbY = rover.y;
  
  switch(rover.direction) {
    case "N":
      mbY++;
      break;
    case "E":
      mbX--;
      break;
    case "S":
      mbY--;
      break;
    case "W":
      mbX++;
      break;
  }
  
  if (mbX >= 0 && mbX < 10 && mbY >= 0 && mbY < 10) {
    
    if (marsRovers.find(r => r.roverNumber !== rover.roverNumber && r.x === mbX && r.y === mbY)) {
      
      console.log("COLLISION ALERT!!! \nThe rover is going to run into another rover and therefore, cannot move backward!");
      
    } else if (marsGrid[mbX][mbY] === 0) {
      
      rover.travelLog.push("[" + rover.x + ", " + rover.y + "]");
      
      rover.x = mbX;
      rover.y = mbY;
      
      let currentDirection = roverCurrentDirection(rover.direction);
      
      console.log("The rover has MOVED BACKWARD from the " + currentDirection + " direction, and, it's current position is at: [" + rover.x + ", " + rover.y + "].");
      
    } else if (marsGrid[mbX][mbY] === "X") {
      
      console.log("OBSTACLE ENCOUNTERED!!! \nThe rover cannot move forward!");
      
    }
  
  } else {
    
    console.log("!!!!!!!!!! ALERT !!!!!!!!!! \nThe rover is moving off the grid! \nMovement forbidden!");
    
  }
}

//===========================================//
//          Rover Commands Function          //
//===========================================//

function roverCommands(rover, listOfCommands) {
  
  console.log("Travel commands for rover are as follows: " + listOfCommands);
  
  console.log("The initial position of the rover is: [" + rover.x + ", " + rover.y + "].")
  
  console.log("The rover has started moving!");
  
  const validRoverCommands = ["l", "r", "f", "b"];
  
  for (let i = 0; i < listOfCommands.length; i++) {
    
    if (validRoverCommands.includes(listOfCommands[i])) {
      
      console.log("Valid input command passed!!! ---> " + listOfCommands[i]);
      
      switch (listOfCommands[i]) {
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
    }
      
   } else {
     
     console.log("Invalid input command passed!!! Ignoring ---> " + listOfCommands[i]);
     
   }
    
  }
  
  console.log("Command execution completed, the rover's coming to a halt!");
  
  rover.travelLog.push("[" + rover.x + ", " + rover.y + "]");
  
  let roverTravelLog = rover.travelLog.join(', ');
  
  console.log("Here's a travel log for all the places the Mars Rover has travelled over: \n" + roverTravelLog);
  
}

//======================================//
//          Run the Mars Rover          //
//======================================//

console.log("Executing the commands to move the Mars Rover...");

// Check for the default input given in the problem statement.
//roverCommands(rover1, "rffrfflfrff");

//console.log("\n======================================================================\n");

// Check for the backward movement of the rover.
//roverCommands(rover1, "rfffrffflbbrb");

//console.log("\n======================================================================\n");

// Check for the rover moving off the grid.
//roverCommands(rover1, "rffffrb");

//console.log("\n======================================================================\n");

// Check for invalid input commands.
//roverCommands(rover1, "rffrfqlzb");

//console.log("\n======================================================================\n");

// Check for encountering obstacles in the grid.
//roverCommands(rover1, "rffffrffrbb");

//console.log("\n======================================================================\n");

// Check when the rover is going to collide into another rover while moving forward.
//roverCommands(rover1, "rfffffffrffff");

//console.log("\n======================================================================\n");

// Check when the rover is going to collide into another rover while moving backward.
//roverCommands(rover1, "rffffffrffffrb");

//console.log("\n======================================================================\n");

// Final input which executes all of the above usecases together.
roverCommands(rover1, "rffffrfmlffffffabbrwffffplffrflbb");