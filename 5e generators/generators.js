`use strict`;

//--------------------------------------------------
// A bunch of generators for Dungeons and Dragons
// written in ES6 by Cody `qued` Williams
//--------------------------------------------------

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getTrait(list) {
  return list[getRandomInt(0,list.length-1)];
}

var roll = {}
roll.d4 =  function(diceCount) {
  var diceCount = diceCount || 1
  var total = 0;
  for (i = 1; i <= diceCount; i++) {
    total += getRandomInt(1,4);
  }
  return total;
}
roll.d6 =  function(diceCount) {
  var diceCount = diceCount || 1
  var total = 0;
  for (i = 1; i <= diceCount; i++) {
    total += getRandomInt(1,6);
  }
  return total;
}
roll.d8 =  function(diceCount) {
  var diceCount = diceCount || 1
  var total = 0;
  for (i = 1; i <= diceCount; i++) {
    total += getRandomInt(1,8);
  }
  return total;
}
roll.d10 =  function(diceCount) {
  var diceCount = diceCount || 1
  var total = 0;
  for (i = 1; i <= diceCount; i++) {
    total += getRandomInt(1,10);
  }
  return total;
}
roll.d12 =  function(diceCount) {
  var diceCount = diceCount || 1
  var total = 0;
  for (i = 1; i <= diceCount; i++) {
    total += getRandomInt(1,12);
  }
  return total;
}
roll.d20 =  function(diceCount) {
  var diceCount = diceCount || 1
  var total = 0;
  for (i = 1; i <= diceCount; i++) {
    total += getRandomInt(1,20);
  }
  return total;
}

function createDisplay() {
  var display = document.createElement(`div`);
  display.id = `display`;
  document.body.appendChild(display);
}
function clearDisplay() {
  if (typeof display !== 'undefined') {
    document.body.removeChild(display);
  }
}
function displayExists() {
  if (typeof display !== 'undefined') {
    return true;
  } else {
    return false;
  }
}
function refreshDisplay() {
  if (displayExists()) {
    clearDisplay();
    createDisplay();
  } else {
    createDisplay();
  }
}
function print(text) {
  var element = document.createElement(`p`);
  var textNode = document.createTextNode(text);
  element.appendChild(textNode);
  display.appendChild(element);
}

class RandomNPC {
  constructor() {
    this.name = this.getName();
    this.gender = this.getGender();
    this.race = getTrait(gen.npc.race);
    this.appearance = getTrait(gen.npc.appearance);
    this.talent = getTrait(gen.npc.talent);
    this.mannerism = getTrait(gen.npc.mannerism);
    this.personality = getTrait(gen.npc.personality);
    this.ideal = getTrait(gen.npc.ideal);
    this.bond = getTrait(gen.npc.bond);
    this.flaw = getTrait(gen.npc.flaw);
    // ability scores
    this.str = this.getAttribute();
    this.dex = this.getAttribute();
    this.con = this.getAttribute();
    this.int = this.getAttribute();
    this.wis = this.getAttribute();
    this.cha = this.getAttribute();
  }
  show() {
    refreshDisplay();
    print(`== CHARACTER ==`);
    print(`Name : ${this.name}`);
    print(`Gender : ${this.gender}`);
    print(`Race : ${this.race}`);
    print(`Appearance : ${this.appearance}`);
    print(`Talent : ${this.talent}`);
    print(`Mannerism : ${this.mannerism}`);
    print(`Personality : ${this.personality}`);
    print(`Ideal : ${this.ideal}`);
    print(`Bond : ${this.bond}`);
    print(`Flaw : ${this.flaw}`);
    print(`== ABILITY SCORES ==`);
    print(`Strength : ${this.str}`);
    print(`Dexterity : ${this.dex}`);
    print(`Constitution : ${this.con}`);
    print(`Intelligence : ${this.int}`);
    print(`Wisdom : ${this.wis}`);
    print(`Charisma : ${this.cha}`);
  }
  getName() { return `bob lolol` }
  getGender() {
    if (getRandomInt(1,2) == 1) {
      return `Male`;
    }
    else {
      return `Female`;
    }
  }
  getAttribute() {
    return getRandomInt(1,6) + getRandomInt(1,6) + getRandomInt(1,6);
  }
}
class RandomMagicItem {
  constructor() {
    this.type = getTrait(gen.item.type);
    this.origin = getTrait(gen.item.origin);
    this.history = getTrait(gen.item.history);
    this.property = getTrait(gen.item.property);
    this.quirk = getTrait(gen.item.quirk);
  }
  show() {
    refreshDisplay();
    print(this.type);
    print(this.origin);
    print(this.history);
    print(this.property);
    print(this.quirk);
  }
}
class RandomCoins {
  constructor() {
    var cr = document.getElementById("coinsCR").value;
    var result = getRandomInt(1,100);
    if (cr == "cr0_4") {
      if (result >= 1 && result <= 30) {
        this.number1 = roll.d6() + roll.d6() + roll.d6() + roll.d6() + roll.d6()
        this.type1 = "CP"
      }
      if (result >= 31 && result <= 60) {
        this.number1 = roll.d6() + roll.d6() + roll.d6() + roll.d6()
        this.type1 = "SP"
      }
      if (result >= 61 && result <= 70) {
        this.number1 = roll.d6() + roll.d6() + roll.d6()
        this.type1 = "EP"
      }
      if (result >= 71 && result <= 95) {
        this.number1 = roll.d6() + roll.d6()
        this.type1 = "GP"
      }
      if (result >= 96 && result <= 100) {
        this.number1 = roll.d6()
        this.type1 = "PP";
      }
    }
    if (cr == "cr5_10") {
      if (result >= 1 && result <= 30) {
        this.number1 = ( roll.d6() + roll.d6() + roll.d6() + roll.d6() )*100;
        this.type1 = "CP";
        this.number2 = roll.d6()*10;
        this.type2 = "EP";
      }
      if (result >= 31 && result <= 60) {
        this.number1 = ( roll.d6()+roll.d6()+roll.d6()+roll.d6()+roll.d6()+roll.d6() )*10
        this.type1 = "SP"
        this.number2 = ( roll.d6()+roll.d6() )*10
        this.type2 = "GP"
      }
      if (result >= 61 && result <= 70) {
        this.number1 = ( roll.d6()+roll.d6()+roll.d6() )*10
        this.type1 = "EP"
        this.number2 = ( roll.d6()+roll.d6() )*10
        this.type2 = "GP"
      }
      if (result >= 71 && result <= 95) {
        this.number1 = ( roll.d6()+roll.d6()+roll.d6()+roll.d6() )*10
        this.type1 = "GP"
      }
      if (result >= 96 && result <= 100) {
        this.number1 = ( roll.d6()+roll.d6() )*10
        this.type1 = "GP"
        this.number1 = ( roll.d6()+roll.d6()+roll.d6() )
        this.type1 = "PP"
      }
    }
    if (cr == "cr11_16") {
      if (result >= 1 && result <= 20) {
        this.number1 = ( roll.d6() + roll.d6() + roll.d6() + roll.d6() )*100;
        this.type1 = "SP";
        this.number2 = roll.d6()*100;
        this.type2 = "GP";
      }
      if (result >= 21 && result <= 35) {
        this.number1 = ( roll.d6() )*100
        this.type1 = "EP"
        this.number2 = ( roll.d6() )*100
        this.type2 = "GP"
      }
      if (result >= 36 && result <= 75) {
        this.number1 = ( roll.d6()+roll.d6() )*100
        this.type1 = "GP"
        this.number2 = ( roll.d6() )*10
        this.type2 = "PP"
      }
      if (result >= 76 && result <= 100) {
        this.number1 = ( roll.d6()+roll.d6() )*100
        this.type1 = "GP"
        this.number2 = ( roll.d6()+roll.d6() )*10
        this.type2 = "PP"
      }
    }
    if (cr == "cr17_") {
      if (result >= 1 && result <= 15) {
        this.number1 = ( roll.d6()+roll.d6() )*1000
        this.type1 = "EP"
        this.number2 = ( roll.d6()+roll.d6()+roll.d6()+roll.d6()+roll.d6()+roll.d6()+roll.d6()+roll.d6() )*100
        this.type2 = "GP"
      }
      if (result >= 16 && result <= 55) {
        this.number1 = ( roll.d6() )*1000
        this.type1 = "GP"
        this.number2 = ( roll.d6() )*100
        this.type2 = "PP"
      }
      if (result >= 56 && result <= 100) {
        this.number1 = ( roll.d6() )*1000
        this.type1 = "GP"
        this.number2 = ( roll.d6()+roll.d6() )*100
        this.type2 = "PP"
      }
    }
  }
  show() {
    refreshDisplay();
    print(this.number1 + " " + this.type1);
    if (this.number2 != undefined) {
      print(this.number2 + " " + this.type2);
    }
  }
}
class RandomGem {
  constructor(gemNumber, gemValue) {
    var gemNumber = gemNumber || 1;
    if (gemValue == undefined) {
      var gemValue = document.getElementById("gemValue").value;
      this.type = getTrait(gen.gem[gemValue]);
    } else {
      this.type = getTrait(gen.gem[gemValue]);
    }
    switch(gemValue) {
      case "gp10":
        this.value = "10 GP"
        break;
      case "gp50":
        this.value = "50 GP"
        break;
      case "gp100":
        this.value = "100 GP"
        break;
      case "gp500":
        this.value = "500 GP"
        break;
      case "gp1000":
        this.value = "1000 GP"
        break;
      case "gp5000":
        this.value = "5000 GP"
        break;
    }
  }
  show() {
    refreshDisplay();
    print(this.type);
  }
}
class RandomArtObject {
  constructor(artValue) {
    if (artValue == undefined) {
      var artValue = document.getElementById("artValue").value;
      this.type = getTrait(gen.art[artValue]);
    } else {
      this.type = getTrait(gen.art[artValue]);
    }
    switch(artValue) {
      case "gp25":
        this.value = "25 GP"
        break;
      case "gp250":
        this.value = "250 GP"
        break;
      case "gp750":
        this.value = "750 GP"
        break;
      case "gp2500":
        this.value = "2500 GP"
        break;
      case "gp7500":
        this.value = "7500 GP"
        break;
    }
  }
  show() {
    refreshDisplay();
    print(`${this.type} (worth ${this.value})`);
  }
}
class RandomHorde {
  constructor() {
    var cr = document.getElementById("hordeCR").value;
    var result = getRandomInt(1,100);

    // finish these tables here

    if (cr == "cr0_4") {
      this.cp = roll.d6(6) * 100;
      this.sp = roll.d6(2) * 100;
      this.gp = roll.d6(2) * 10;
      this.gems = [];
      this.arts = [];
      this.items = [];
      if (result >= 1 && result <= 6)   {}
      if (result >= 7 && result <= 16)  {
        for (var i = 1; i < roll.d6(2); i++) {
          this.gems[i] = getTrait(gen.gem.gp10);
        }
      }
      if (result >= 17 && result <= 26) {
        for (var i=1; i < roll.d4(2); i++) {
          this.arts[i] = getTrait(gen.art.gp25);
        }
      }
      if (result >= 27 && result <= 36) {}
      if (result >= 37 && result <= 44) {}
      if (result >= 45 && result <= 52) {}
      if (result >= 53 && result <= 60) {}
      if (result >= 61 && result <= 65) {}
      if (result >= 66 && result <= 70) {}
      if (result >= 71 && result <= 75) {}
      if (result >= 76 && result <= 78) {}
      if (result >= 79 && result <= 80) {}
      if (result >= 81 && result <= 85) {}
      if (result >= 86 && result <= 92) {}
      if (result >= 93 && result <= 97) {}
      if (result >= 98 && result <= 99) {}
      if (result == 100) {}
    }
    if (cr == "cr5_10") {
      this.cp = roll.d6(2) * 100;
      this.sp = roll.d6(2) * 1000;
      this.gp = roll.d6(6) * 100;
      this.pp = roll.d6(3) * 10;
      if (result >= 1 && result <= 4) {}
    }
    if (cr == "cr11_16") {
      this.gp = roll.d6(4) * 1000;
      this.pp = roll.d6(5) * 100;
      if (result >= 1 && result <= 3) {}
    }
    if (cr == "cr17_") {
      this.gp = roll.d6(4) * 1000;
      this.pp = roll.d6(5) * 100;

      if (result >= 1 && result <= 2) {}
      if (result >= 3 && result <= 5) {}
      if (result >= 6 && result <= 8) {}
      if (result >= 9 && result <= 11) {}
      if (result >= 12 && result <= 14) {}
      if (result >= 15 && result <= 22) {}
      if (result >= 23 && result <= 30) {}
      if (result >= 31 && result <= 38) {}
      if (result >= 39 && result <= 46) {}
      if (result >= 47 && result <= 52) {}
      if (result >= 53 && result <= 58) {}
      if (result >= 59 && result <= 63) {}
      if (result >= 64 && result <= 68) {}
      if (result == 69) {}
      if (result == 70) {}
      if (result == 71) {}
      if (result == 72) {}
      if (result >= 73 && result <= 74) {}
      if (result >= 75 && result <= 76) {}
      if (result >= 77 && result <= 78) {}
      if (result >= 79 && result <= 80) {}
      if (result >= 81 && result <= 85) {}
      if (result >= 86 && result <= 90) {}
      if (result >= 91 && result <= 95) {}
      if (result >= 96 && result <= 100) {}
    }




  }
  getRandomMagicItem(table) {
    var result = getRandomInt(1,100);
    if (table == undefined) { console.log ("No table given!") }
    if (table == "a") {
      if (result >= 1 && result <= 50)  {  return gen.item.table.a[0]; }
      if (result >= 51 && result <= 60) {  return gen.item.table.a[1]; }
      if (result >= 61 && result <= 70) {  return gen.item.table.a[2]; }
      if (result >= 71 && result <= 90) {  return gen.item.table.a[3]; }
      if (result >= 91 && result <= 94) {  return gen.item.table.a[4]; }
      if (result >= 95 && result <= 98) {  return gen.item.table.a[5]; }
      if (result == 99)                 {  return gen.item.table.a[6]; }
      if (result == 100)                {  return gen.item.table.a[7]; }
    }
    if (table == "b") {
      if (result >= 1 && result <= 15)  {  return gen.item.table.b[0]; }
      if (result >= 16 && result <= 22) {  return gen.item.table.b[1]; }
      if (result >= 23 && result <= 29) {  return gen.item.table.b[2]; }
      if (result >= 30 && result <= 34) {  return gen.item.table.b[3]; }
      if (result >= 35 && result <= 39) {  return gen.item.table.b[4]; }
      if (result >= 40 && result <= 44) {  return gen.item.table.b[5]; }
      if (result >= 45 && result <= 49) {  return gen.item.table.b[6]; }
      if (result >= 50 && result <= 54) {  return gen.item.table.b[7]; }
      if (result >= 55 && result <= 59) {  return gen.item.table.b[8]; }
      if (result >= 60 && result <= 64) {  return gen.item.table.b[9]; }
      if (result >= 65 && result <= 67) {  return gen.item.table.b[10]; }
      if (result >= 68 && result <= 70) {  return gen.item.table.b[11]; }
      if (result >= 71 && result <= 73) {  return gen.item.table.b[12]; }
      if (result >= 74 && result <= 75) {  return gen.item.table.b[13]; }
      if (result >= 76 && result <= 77) {  return gen.item.table.b[14]; }
      if (result >= 78 && result <= 79) {  return gen.item.table.b[15]; }
      if (result >= 80 && result <= 81) {  return gen.item.table.b[16]; }
      if (result >= 82 && result <= 83) {  return gen.item.table.b[17]; }
      if (result == 84)                 {  return gen.item.table.b[18]; }
      if (result == 85)                 {  return gen.item.table.b[19]; }
      if (result == 86)                 {  return gen.item.table.b[20]; }
      if (result == 87)                 {  return gen.item.table.b[21]; }
      if (result == 88)                 {  return gen.item.table.b[22]; }
      if (result == 89)                 {  return gen.item.table.b[23]; }
      if (result == 90)                 {  return gen.item.table.b[24]; }
      if (result == 91)                 {  return gen.item.table.b[25]; }
      if (result == 92)                 {  return gen.item.table.b[26]; }
      if (result == 93)                 {  return gen.item.table.b[27]; }
      if (result == 94)                 {  return gen.item.table.b[28]; }
      if (result == 95)                 {  return gen.item.table.b[29]; }
      if (result == 96)                 {  return gen.item.table.b[30]; }
      if (result == 97)                 {  return gen.item.table.b[31]; }
      if (result == 98)                 {  return gen.item.table.b[32]; }
      if (result == 99)                 {  return gen.item.table.b[33]; }
      if (result == 100)                {  return gen.item.table.b[34]; }
    }
    if (table == "c") {
      if (result >= 1 && result <= 15)  {  return gen.item.table.c[0]; }
      if (result >= 16 && result <= 22) {  return gen.item.table.c[1]; }
      if (result >= 23 && result <= 27) {  return gen.item.table.c[2]; }
      if (result >= 28 && result <= 32) {  return gen.item.table.c[3]; }
      if (result >= 33 && result <= 37) {  return gen.item.table.c[4]; }
      if (result >= 38 && result <= 42) {  return gen.item.table.c[5]; }
      if (result >= 43 && result <= 42) {  return gen.item.table.c[6]; }
      if (result >= 48 && result <= 42) {  return gen.item.table.c[7]; }
      if (result >= 53 && result <= 42) {  return gen.item.table.c[8]; }
      if (result >= 58 && result <= 42) {  return gen.item.table.c[9]; }
      if (result >= 63 && result <= 42) {  return gen.item.table.c[10]; }
      if (result >= 68 && result <= 42) {  return gen.item.table.c[11]; }
      if (result >= 73 && result <= 42) {  return gen.item.table.c[12]; }
      if (result >= 76 && result <= 42) {  return gen.item.table.c[13]; }
      if (result >= 79 && result <= 42) {  return gen.item.table.c[14]; }
      if (result >= 82 && result <= 42) {  return gen.item.table.c[15]; }
      if (result >= 85 && result <= 42) {  return gen.item.table.c[16]; }
      if (result >= 88 && result <= 42) {  return gen.item.table.c[17]; }
      if (result >= 90 && result <= 42) {  return gen.item.table.c[18]; }
      if (result == 92)                 {  return gen.item.table.c[19]; }
      if (result == 93)                 {  return gen.item.table.c[20]; }
      if (result == 94)                 {  return gen.item.table.c[21]; }
      if (result == 95)                 {  return gen.item.table.c[22]; }
      if (result == 96)                 {  return gen.item.table.c[23]; }
      if (result == 97)                 {  return gen.item.table.c[24]; }
      if (result == 98)                 {  return gen.item.table.c[25]; }
      if (result == 99)                 {  return gen.item.table.c[26]; }
      if (result == 100)                {  return gen.item.table.c[27]; }
    }
    if (table == "d") {
      if (result >= 1 && result <= 20)  {  return gen.item.table.d[0]; }
      if (result >= 21 && result <= 30) {  return gen.item.table.d[1]; }
      if (result >= 31 && result <= 40) {  return gen.item.table.d[2]; }
      if (result >= 41 && result <= 50) {  return gen.item.table.d[3]; }
      if (result >= 51 && result <= 57) {  return gen.item.table.d[4]; }
      if (result >= 58 && result <= 62) {  return gen.item.table.d[5]; }
      if (result >= 63 && result <= 67) {  return gen.item.table.d[6]; }
      if (result >= 68 && result <= 72) {  return gen.item.table.d[7]; }
      if (result >= 73 && result <= 77) {  return gen.item.table.d[8]; }
      if (result >= 78 && result <= 82) {  return gen.item.table.d[9]; }
      if (result >= 83 && result <= 87) {  return gen.item.table.d[10]; }
      if (result >= 88 && result <= 92) {  return gen.item.table.d[11]; }
      if (result >= 93 && result <= 95) {  return gen.item.table.d[12]; }
      if (result >= 96 && result <= 98) {  return gen.item.table.d[13]; }
      if (result == 99)                 {  return gen.item.table.d[14]; }
      if (result == 100)                {  return gen.item.table.d[15]; }
    }
    if (table == "e") {
      if (result >= 1 && result <= 30)  {  return gen.item.table.e[0]; }
      if (result >= 31 && result <= 55) {  return gen.item.table.e[1]; }
      if (result >= 56 && result <= 70) {  return gen.item.table.e[2]; }
      if (result >= 71 && result <= 95) {  return gen.item.table.e[3]; }
      if (result >= 86 && result <= 93) {  return gen.item.table.e[4]; }
      if (result >= 94 && result <= 98) {  return gen.item.table.e[5]; }
      if (result >= 99 && result <= 100){  return gen.item.table.e[6]; }
    }
    if (table == "f") {
      if (result >= 1 && result <= 15)  {  return gen.item.table.f[0]; }
      if (result >= 16 && result <= 18) {  return gen.item.table.f[1]; }
      if (result >= 19 && result <= 21) {  return gen.item.table.f[2]; }
      if (result >= 22 && result <= 23) {  return gen.item.table.f[3]; }
      if (result >= 24 && result <= 25) {  return gen.item.table.f[4]; }
    }
    if (table == "g") {}
    if (table == "h") {}
    if (table == "i") {}
  }
  show() {
    refreshDisplay();
    if (this.cp != undefined) { print(this.cp + " CP"); }
    if (this.sp != undefined) { print(this.sp + " SP"); }
    if (this.ep != undefined) { print(this.ep + " EP"); }
    if (this.gp != undefined) { print(this.gp + " GP"); }
    if (this.pp != undefined) { print(this.pp + " PP"); }
    if (this.gems != undefined) {
      for (i=1; i<this.gems.length; i++) {
        this.gems[i] = new RandomGem();
        print(this.gems[i].type + " worth " + this.gems[i].value);
      }
    }
    if (this.arts != undefined) {
      for (i=1; i<this.arts.length; i++) {
        this.arts[i] = new RandomArtObject();
        print(this.arts[i].type + " worth " + this.arts[i].value);
      }
    }
    if (this.items != undefined) {
      for (i=1; i<this.items.length; i++) {
        //this.items[i] = new RandomGem();
        //print(this.items[i]);
      }
    }
  }
}

// functions run onclick
function newNPC() {
  var npc = new RandomNPC();
  npc.show();
}
function newMagicItem() {
  var item = new RandomMagicItem();
  item.show();
}
function newCoins() {
  var coins = new RandomCoins();
  coins.show();
}
function newGem() {
  var gem = new RandomGem();
  gem.show();
}
function newArtObject() {
  var art = new RandomArtObject();
  art.show();
}
function newHorde() {
  var horde = new RandomHorde();
  horde.show();
}
