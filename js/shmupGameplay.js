//==================================================
// create player attributes and movement methods
//==================================================  
game.createPlayerControls = function() {
  var player = game.entities.player;
  
  player.speed = 4;
  
  player.moveLeft = function() {
    player.x -= player.speed;
  }
  player.moveRight = function() {
    player.x += player.speed;
  }
  player.moveDown = function() {
    player.y += player.speed;
  }
  player.moveUp = function() {
    player.y -= player.speed;
  }
}

//==================================================
// keybinding assignment and reassignment
//==================================================
game.keyBinds = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  
  setKeyLeft: function() {
    
  }
  
}

//==================================================
// player keyboard controls
//==================================================
game.processInput = function() {
  var player = game.entities.player;
  var key = game.keyBinds;

  if (key.left in game.keysDown) {
    player.moveLeft();
  }
  
  if (key.right in game.keysDown) {
    player.moveRight();
  }
      
  if (key.down in game.keysDown) {
    player.moveDown();
  }
  
  if (key.up in game.keysDown) {
    player.moveUp();
  }
  
}

//==================================================
// check for collisions between game entities
//==================================================
game.checkForCollisions = function() {
  /*
  var a = game.entities.ship;
  var b = game.entities.enemies;
  
  if ( game.boxHit(a,b) ) {
    if (game.debug) {
      console.log(a.name + " hit " + b.name);
    }
  }
  */

}