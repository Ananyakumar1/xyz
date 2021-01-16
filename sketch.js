
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball, rop, top;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 topObject = new Roof(400,350,300,20);
	ball1 = new Bob(400,350,20,20);
     rope1= new Chain(ball1.body,topObject.body,-ball1.diameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("teal");
  
  drawSprites();
 ball1.display();
 topObject.display();
 rope1.display();
}



