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
  
  // render each game entity
  for (var i in game.entities) {
    
    // if it's an array of entities, render each
    if ( Array.isArray(game.entities[i]) ) {
      
      for (var j in game.entities[i]) {
        if (game.entities[i][j].image.image.ready) {
          
          //game.context.drawImage(e[j].image.image, e[j].x, e[j].y);
        }
      }
    }
    
    // render non-array entities
    else if (game.entities.image.image.ready) {
      var e = game.entities;
      game.context.drawImage(e.image.image, e.x, e.y);
    }
    
  }
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