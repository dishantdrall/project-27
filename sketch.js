
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;


var ball,ball2,ball3,ball4;
var body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball= new Paper(200,200,ball,200);
	ball2= new Paper(220,200,ball,200);
	ball3= new Paper(240,200,ball,200);
	ball4= new Paper(260,200,ball,200);

	body=new Rect();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  body.display();
  drawSprites();
 
}



