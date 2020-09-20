
var ground;
var stand1,stand2;
var polygon;

function preload(){
}


function setup() {
  createCanvas(800,400);

  ground = new Ground(650, 590, 1600, 20);

}

function draw() {
  background(255,255,255);  
  ground.display();
  drawSprites();
}