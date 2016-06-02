game = {
  //==================================================
  // debug enabled?
  //==================================================
  debug: true, // enable for special console messages
  
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
  // create canvas
  //==================================================
  createCanvas: function() {
    game.canvas = document.createElement("canvas");
    game.context = game.canvas.getContext("2d");
    game.canvas.width = game.window_width;
    game.canvas.height = game.window_height;
    document.body.appendChild(game.canvas);
    // debug message
    if (game.debug) { console.log("canvas created") };
    // center canvas in window and add border
    game.canvas.style.display = "block";
    game.canvas.style.margin = "0 auto";
    game.canvas.style.border = "1px solid black";
  },
  
  //==================================================
  // game entitiy constructor
  //==================================================
  Entity: function(name, image, x, y, w, h) {
    // basic properties
    this.name = name;
    this.image = image;
    this.x = x;
    this.y = y;
    this.w = w || 32;
    this.h = h || 32;
    // collision?
    this.collide = false;
    // debug message
    if (game.debug) {
      console.log(this.name + " entity created");
    }
  },
  
  //==================================================
  // image asset constructor
  //==================================================
  Image: function(name, path) {
    this.name = name;
    this.ready = false;
    // creates image from path
    this.image = new Image();
    this.image.src = path;
    // debug message
    if (game.debug) {
      console.log(this.name + " image created");
    }
    // checks if image is loaded
    this.image.onload = function() {
      this.ready = true;
      console.log(name + " image ready")      
    }
  },
  
  //==================================================
  // create graphics
  //==================================================
  createGraphics: function() {
    game.graphics.ship = new game.Image("ship", "images/hero.png");
  },

  //==================================================
  // create game entities
  //==================================================
  createEntities: function() {
    
    // graphics shortcuts
    var ship = game.graphics.ship;
    
    // create enemy entities
    game.entities.enemies = new Array();
    
    for (i = 0; i < 100; i++) {
      var rx = Math.random() * 400;
      var ry = Math.random() * 400;
      game.entities.enemies[i] = new game.Entity("test", ship, rx, ry );
    }
    
    // create player entity
    game.entities.ship = new game.Entity("ship", ship, 32, 32);
    
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
    if (game.debug) {
      console.log("keyboard listener created")
    }
  },
  
  //==================================================
  // axis aligned bounding box collision
  //==================================================  
  boxHit: function(box1, box2) {
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
  },
  
  
  
}