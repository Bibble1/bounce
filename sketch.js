


//Create namespace for Engine
const Engine=Matter.Engine

//Create namespace for World
const World=Matter.World

//Create namespace for Bodies
const  Bodies=Matter.Bodies

//Create namespace for Body
const Body=Matter.Body



function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  myEngine=Engine.create()

  myWorld=myEngine.world
  
   var ball_options = {
    restitution: 0.85,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world
ground=Bodies.rectangle(200,390,400,40,ground_options)
World.add(myWorld,ground)
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(myWorld,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("green");
  Engine.update(myEngine);
  
  

  ellipse(ball.position.x,ball.position.y,20);

  //write a rectangle function to display ground.

  rect(ground.position.x,ground.position.y,400,40)
stroke("blue")
fill("orange")

  
  
}

