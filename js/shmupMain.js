//====================================================
// SHMUP. A spacey shoot 'em up game
// made with HTML5 and JavaScript.
//----------------------------------------------------
// updated June 5 2016
// by Cody Williams
// @quedacon
// quedacon@gmail.com
//====================================================

//====================================================
// render a game entity
//====================================================
game.renderEntity = function(entity) {
  // is the image ready?
  if (entity.sprite.image.ready) {
    // is it visible right now?
    if (entity.visible) {

      if (entity.animated) {
        entity.updateAnimation();
      }
    
      // get the image
      var img = entity.sprite.image;
      // sprite source coordinates
      var sx = entity.animation.sx;
      var sy = entity.animation.sy;
      var sw = entity.animation.sw;
      var sh = entity.animation.sh;
      // destination on screen
      var dx = entity.x;
      var dy = entity.y;
      var dw = entity.w;
      var dh = entity.h;
      // draw it!
      game.mid_context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
      //game.mid_context.drawImage(e.sprite.image, a.sx, a.sy, a.sw, a.sh, e.x, e.y, e.w, e.h);
      // update the animation

    }
  }
}

//====================================================
// update
//====================================================
game.update = function(time_multiplier) {
  game.processInput(time_multiplier);
  game.updatePlayer();
  game.checkForCollisions();
}

//====================================================
// render
//====================================================
game.render = function() {
  for (var i in game.entities) {
    if ( Array.isArray(game.entities[i]) )
      for (var j in game.entities[i]) {
        game.renderEntity(game.entities[i][j]);
      }
    else
      game.renderEntity(game.entities[i]);
  }
}

//====================================================
// main loop
//====================================================
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

//====================================================
// run the game
//====================================================
// create container div
game.createContainerDiv();
// create canvas layers
game.createCanvas("back");
game.createCanvas("mid");
game.createCanvas("fore");
// create graphics and controls
game.createKeyboardListener();
game.createGraphics();
// create game objects
game.createEntities();
game.createPlayer();
// create time
game.then = Date.now();
// debug message
if (game.debug) { console.log("game start") }
// run the game
game.main();