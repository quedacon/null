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
  
  // shortcut
  var e = game.entities
  
  // for each entity
  for (i in e) {

    // is the entity actually an array?
    if ( Array.isArray(e[i]) ) {
      // then for each entity in the array
      for (j in i) {
        // is the image ready?
        if (e[i][j].sprite.image.ready) {
          // render the entity!
          game.context.drawImage(e[i][j].sprite.image, e[i][j].x, e[i][j].y);
        }
      }
    }
  
    // is the image ready?
    else if (e[i].sprite.image.ready) {
      // render the entity!
      game.context.drawImage(e[i].sprite.image, e[i].x, e[i].y);
    }
    
  } // end loop
  
} // end render

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