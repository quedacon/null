
//====================================================
// Inheritance Function
//----------------------------------------------------
// Use this to easily inherit from
// a parent class or object
//====================================================
Function.prototype.inheritsFrom = function(parent) {
  if (parent.constructor == Function) {
    this.prototype = new parent;
    this.prototype.constructor = this;
    this.prototype.parent = parent.prototype;
  }
  else {
    this.prototype = parent;
    this.prototype.constructor = this;
    this.prototype.parent = parent;
  }
}


//====================================================
//var randomNumberMinMax = function(min, max)
//Math.floor(a + Math.random() * (b - a))

//====================================================
// everything else stuffed into the game namespace
//====================================================
game = {

  debug: true, // enable for special console messages
  debug_verbose: false, // even more messages
  
  //==================================================
  // game properties
  //==================================================
  window_width: 400,
  window_height: 400,
  
  //==================================================
  // game containers
  //==================================================  
  keysDown: {}, // holds keys pressed
  graphics: {}, // holds images
  entities: {}, // holds game objects
  
  //==================================================
  // keybinding assignments
  //==================================================
  keyBinds: {
    leftA:  37, // left arrow
    leftB:  65, // a key
    
    upA:    38, // up arrow
    upB:    87, // w key
    
    rightA: 39, // right arrow
    rightB: 68, // d key
    
    downA:  40, // down arrow
    downB:  83, // s key
    
    shootA: 16, // shift
    shootB: 17, // ctrl
    shootC: 96, // num0
  },
  
  //==================================================
  // create keyboard event listener
  //==================================================
  createKeyboardListener: function() {
    // detects if key is pressed
    addEventListener("keydown", function(e) {
      game.keysDown[e.keyCode] = true;
    });
    
    // removes keys when not pressed
    addEventListener("keyup", function(e) {
      delete game.keysDown[e.keyCode];
    });
    
    // debug message
    if (game.debug_verbose) {
      console.log("keyboard listener created")
    }
  },

  //==================================================
  // create container div
  //==================================================
  createContainerDiv: function() {
    game.container_div = document.createElement("div");
    document.body.appendChild(game.container_div);
    // center horizontally in window
    game.container_div.style.margin = "0 auto";
    game.container_div.style.width = String(game.window_width) + "px";
  },

  //==================================================
  // create canvas layers
  //==================================================
  createCanvas: function(canvas_name) {
    var canvas_name = canvas_name;
    game[canvas_name] = document.createElement("canvas");
    game[canvas_name + "_context"] = game[canvas_name].getContext("2d");
    
    if (game.debug_verbose) {
      console.log(canvas_name + " created")
    }
    
    game[canvas_name].width = game.window_width;
    game[canvas_name].height = game.window_height;
    // append new canvas to container div
    game.container_div.appendChild(game[canvas_name]); 
    game[canvas_name].style.position = "absolute";
  },
  
  //==================================================
  // Entity Constructor
  //--------------------------------------------------
  // Entities are generic game objects with position,
  // collision, a sprite, and animation.
  //==================================================
  Entity: function(name, sprite, x, y, w, h) {
    
    // basic properties
    this.name = name || "no name"
    this.sprite = sprite;
    
    // coordinates and dimension
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 32;
    this.h = h || 32;
    
    // animated?
    this.animated = true;
    // collision?
    this.collision = false;
    // visible?
    this.visible = true;    
    
    // initialize animation
    this.animation = {
      
      sw: this.w,
      sh: this.h,

      frame: 0, // bitmap column
      frame_max: 8, // max columns
      pose: 0, // bitmap row
      pose_max: 0, // max rows
      
      tick: 0, // counts frames til update
      tick_max: 14, // max frames til update
    }
    
    // update animation
    this.updateAnimation = function() {
      
      // update bitmap source locations
      this.animation.sx = this.animation.frame * this.w;
      this.animation.sy = this.animation.pose * this.h;
      
      // increment tick and frame
      this.animation.tick += 1;
      if (this.animation.tick >= this.animation.tick_max) {
        this.animation.tick = 0;
        this.animation.frame += 1;
      }
      
      // check if frame needs to be reset
      if (this.animation.frame >= this.animation.frame_max) {
        this.animation.frame = 0;
      }
    }
    
    // creation debug message
    if (game.debug_verbose) {
      console.log(this.name + " entity created");
    }    
  },
  
  //==================================================
  // Sprite Constructor
  //==================================================
  Sprite: function(name, path) {
    // initialize
    this.name = name;
    this.ready = false;
    
    // creates image from path
    this.image = new Image();
    this.image.src = path
    
    // debug message
    if (game.debug_verbose) { 
      console.log(this.name + " image created");
    }
    // checks if image is loaded
    this.image.onload = function() {
      this.ready = true;
      if (game.debug_verbose) {
        console.log(name + " image ready")      
      }
    }
  },
  
  //==================================================
  // create graphics
  //==================================================
  createGraphics: function() {
    game.graphics.ship = new game.Sprite("Viper", "images/ship.png");
    game.graphics.shot = new game.Sprite("Bullet", "images/hero.png");
  },

  //==================================================
  // create game entities
  //==================================================
  createEntities: function() {
    
    // create bullet pool
    var shot = game.graphics.shot;
    game.entities.bullets = new Array();
    for (var i = 0; i < 10; i++) {
      game.entities.bullets[i] = new game.Entity("Bullet", shot, -32, -32);
      game.entities.bullets[i].visible = false;
      game.entities.bullets[i].collision = false;
    }

    // create enemies
    var enemy = game.graphics.ship;  
    game.entities.enemies = new Array();
    for (var i = 0; i < 500; i++) {
      var x = Math.random() * 400;
      var y = Math.random() * 400;
      game.entities.enemies[i] = new game.Entity("test", enemy, x, y);
      game.entities.enemies[i].collision = true;
      game.entities.enemies[i].visible = true;
    }
    
  },
  
} // end