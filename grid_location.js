
 const n = parseInt(input());
 const moves = input().split();
 
 // Process each move in the sequence
 for (const move of moves) {
   if (move === "ts") {
     x = Math.max(x - 1, 0);  // Move left, but don't go out of bounds
   } else if (move === "boom") {
     x = Math.min(x + 1, FLOOR_WIDTH - 1);  // Move right, but don't go out of bounds
   } else if (move === "ding") {
     y = Math.max(y - 1, 0);  // Move up, but don't go out of bounds
   } else if (move === "bing") {
     y = Math.min(y + 1, FLOOR_HEIGHT - 1);  // Move down, but don't go out of bounds
   } else {
     // Handle unknown moves
     console.error(`Unknown move '${move}'`);
   }
 }
 
 // Print Nokk's final position
 console.log(`${x} ${y}`);
