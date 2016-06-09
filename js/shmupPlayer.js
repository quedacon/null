//====================================================
// create player attributes and movement methods
//====================================================
game.createPlayer = function() {
  
  // get player sprite graphic
  var ship = game.graphics.ship;  
  
  // create player entity
  game.entities.player = new game.Entity("Vic", ship, 32, 32);
  
  // player shortcut reference
  var player = game.entities.player;
  
  // player attributes
  player.speed = 100;
  player.weapon = game.weapons.peashooter;
  
  // player movement commands
  player.moveLeft = function(time_multiplier) {
    player.x -= player.speed * time_multiplier;
  }
  player.moveRight = function(time_multiplier) {
    player.x += player.speed * time_multiplier;
  }
  player.moveDown = function(time_multiplier) {
    player.y += player.speed * time_multiplier;
  }
  player.moveUp = function(time_multiplier) {
    player.y -= player.speed * time_multiplier;
  }
  
  //player shooting commands
  player.shoot = function() {
    var shot = new Bullet(player.weapon.shot_type);
  }
  
}

game.updatePlayer = function() {
  
  var player = game.entities.player;
  
  // detect if player is moving
  player.moving_left = (player.x < player.x_prev) ? true : false
  player.moving_right = (player.x > player.x_prev) ? true : false
  player.moving_up = (player.y < player.y_prev) ? true : false
  player.moving_down = (player.y < player.y_prev) ? true : false
  
  // update previous coordinates
  player.x_prev = player.x;
  player.y_prev = player.y;
  
}

//====================================================
// player keyboard controls
//====================================================
game.processInput = function(time_multiplier) {
  var player = game.entities.player;
  var key = game.keyBinds;

  if (key.leftA in game.keysDown ||
      key.leftB in game.keysDown) {
    player.moveLeft(time_multiplier);
  }
  
  if (key.rightA in game.keysDown ||
      key.rightB in game.keysDown) {
    player.moveRight(time_multiplier);
  }
      
  if (key.downA in game.keysDown ||
      key.downB in game.keysDown) {
    player.moveDown(time_multiplier);
  }
  
  if (key.upA in game.keysDown ||
      key.upB in game.keysDown) {
    player.moveUp(time_multiplier);
  }
  
  if (key.shootA in game.keysDown ||
      key.shootB in game.keysDown ||
      key.shootC in game.keysDown) {
        player.shoot();
      }
  
}
