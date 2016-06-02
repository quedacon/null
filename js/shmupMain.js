//====================================================
// SHMUP. A spacey shoot 'em up game
// made with HTML5 and javascript.
//----------------------------------------------------
// updated 6.1.2016
// by Cody Williams
// @quedacon
// quedacon@gmail.com
//====================================================

//==================================================
// update
//==================================================
game.update = function() {
  game.processInput();
  game.checkForCollisions();
}

//==================================================
// render
//==================================================
game.render = function() {
  
  if (game.graphics.ship.image.ready) {
    var i = game.entities.ship
    game.context.drawImage(game.graphics.ship.image, i.x, i.y)
  }
  
  /*
  // render non-array entities
  if (game.graphics.ship.image.image.ready) {
    game.context.drawImage(game.graphics.ship.image.image,
                           game.entities.ship.x,
                           game.entities.ship.y);
  }
  */
  
}

//==================================================
// main loop
//==================================================
game.main = function() {

  // calculate time
  game.now = Date.now();
  game.delta = game.now - game.then;
  
  // update and render
  game.update(game.delta / 1000);
  game.render();
  
  // update time and request frame
  game.then = game.now;
  requestAnimationFrame(game.main);

}

//==================================================
// run the game
//==================================================

// create all the things
game.createCanvas();
game.createKeyboardListener();
game.createGraphics();
game.createEntities();
game.createPlayerControls();

// initialize then for updating
game.then = Date.now();

// run the game
if (game.debug) { console.log("game start") }
game.main();