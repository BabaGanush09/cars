var canvas, backgroundImage;
var cars;
var car1, car1Image;
var car2, car2Image;
var car3, car3Image;
var car4, car4Image;
var track, trackImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function preload(){
car1Image=loadImage("car1.png");
car2Image=loadImage("car2.png");
car3Image=loadImage("car3.png");
car4Image=loadImage("car4.png");
trackImage=loadImage("track.jpg");
}



function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  car1 = createSprite(100,200);
  car1.addImage(car1Image);
  car2 = createSprite(300,200);
  car2.addImage(car2Image);
  car3 = createSprite(500,200);
 car3.addImage(car3Image);
  car4 = createSprite(700,200);
  car4.addImage(car4Image);
  

  cars = [car1, car2, car3, car4];
}


function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    image(trackImage,0,-displayHeight*4+1700,displayWidth,displayHeight*5);
    game.play();
    drawSprites();
  }
}
