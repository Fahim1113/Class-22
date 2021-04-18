//constants
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//variables
var engine, world;

function setup() {
  createCanvas(400,400);
  //physics engine
  engine=Engine.create();
  //creating the world
  world=engine.world;
  //creating options for the ball
  var object_options={
    restitution:1.0
  }
  //creating the body
  object=Bodies.circle(200,100,50,object_options);
  //adding it to the world
  World.add(world,object);
  //to display it to the console
  console.log(object);
  //create ground options
  var ground_options={
    isStatic:true
  }
  //making the ground and addng it to the world
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
}

function draw() {
  background(0);
  //updating the engine
  Engine.update(engine);
  //making the position shift to the center  
  rectMode(CENTER);
  //displaying the ground as a rectangle
  rect(ground.position.x,ground.position.y,400,20);
  //making the position shift to the center
  ellipseMode(RADIUS)
  //create a circle
  ellipse(object.position.x,object.position.y,50,50)
  console.log(object.position.y);
}