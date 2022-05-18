/* Game opdracht
yoyoyo
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
const LEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_UP = 38
const KEY_DOWN = 40

  
var speler1X = 600; // x-positie van speler
var speler1Y = 600; // y-positie van speler

var speler2X = 610;
var speler2Y = 640;


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  if (keyIsDown(LEFT_ARROW)) {
speler1X = speler1X -1
  }
  if (keyIsDown(RIGHT_ARROW)) {
speler1X = speler1X +1
  }
  if (keyIsDown(DOWN_ARROW)) {
speler1Y = speler1Y +1
  }
  if (keyIsDown(UP_ARROW)) {
speler1Y = speler1Y -1
  }
  // vijand (speler2)
  if (keyIsDown(65)) {
speler2X = speler2X -1
  }
  if (keyIsDown(68)) {
speler2X = speler2X +1
  }
  if (keyIsDown(83)) {
speler2Y = speler2Y +1
  }
  if (keyIsDown(87)) {
speler2Y = speler2Y -1
  }
  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if (speler1X - speler2X <50 &&
    speler1X - speler2X > -50 &&
   speler1Y - speler2Y <50 &&
   speler1Y - speler2Y > -50) {
  console.log ("botsing");
  spelstatus = GAMEOVER
}
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
fill("blue");
rect(0,0,1280,720);
  // vijand
fill("red");
rect(speler2X-25,speler2Y-25,50,50);
    fill("black");
  ellipse(speler2X, speler2Y, 10, 10);
  // kogel

  // speler
  fill("green");
  ellipse(speler1X, speler1Y, 50, 50);
  fill("black");
  ellipse(speler1X, speler1Y, 10, 10);
  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
