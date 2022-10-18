const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle,  ground, cannon;

var astronautIdle, astronautRun;


function preload() {
  backgroundImg = loadImage("./assets/baclground.gif");

  astronautIdle=loadAnimation("Astronaut_Idle1.png" , "Astronaut_Idle2.png" , "Astronaut_Idle3.png" , "Astronaut_Idle4.png" , "Astronaut_Idle5.png" , "Astronaut_Idle6.png");
  astronautRun=loadAnimation("Astronaut_Run1.png","Astronaut_Run2.png","Astronaut_Run3.png","Astronaut_Run4.png","Astronaut_Run5.png","Astronaut_Run6.png");
}
 

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  astronaut=createSprite(300,300,50,50);
  astronaut.addAnimation("astronaut", astronautIdle);
  astronaut.scale=3;

  cannon = new Cannon(900, 380, 500, 500, angle);

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  
  cannon.display();
  drawSprites();
  
}



