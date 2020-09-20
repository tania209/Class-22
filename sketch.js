const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
function setup() {
  createCanvas(600,600);
  engine= Engine.create();
  world = engine.world;

  var option ={
    isStatic : true
  }
  
  object = Bodies.rectangle(300,600,600,20,option);
  World.add(world,object);
  var option ={
    restitution : 1

  }

  Ball = Bodies.circle(300,100,20,option);
  World.add(world,Ball);
  
}

function draw() {
  background("red");
  Engine.update(engine);  
  rectMode(CENTER);
  rect(object.position.x,object.position.y,600,20);
  ellipseMode(RADIUS);
  ellipse(Ball.position.x,Ball.position.y,20,20)
  
}