//====================================================
// check for collisions between game entities
//====================================================
game.checkForCollisions = function() {
  
  // collision between player and enemy
  var player = game.entities.player;
  var enemies = game.entities.enemies;
  var enemies_length = enemies.length;
  
  for (var i = 0; i < enemies_length; i++) {
    if (enemies[i].collision) {
      if ( game.boxHit(player, enemies[i]) ) {
        // do stuff
        //enemies[i].destroy();
        console.log("player hit an enemy")
      }
    }
  }
  
  // collision between enemy and bullet
  
  // collision between player and terrain
  
  // collision between bullet and terrain
  

},
  
//====================================================
// axis aligned bounding box collision
//====================================================
game.boxHit = function(box1, box2) {
  if (box1.x < box2.x + box2.w &&
      box1.x + box1.w > box2.x &&
      box1.y < box2.y + box2.h &&
      box1.h + box1.y > box2.y) {
    // hit detected
    return true;
  }
  else {
    // no hit detected
    return false;
  }
}