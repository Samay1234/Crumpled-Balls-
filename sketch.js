const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	 	
}

function setup() 
{
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,700,width,20)
	D1= new Dustbin(1200,680,200,20);
	D2=new Dustbin(1100,615,20,150);
    D3=new Dustbin(1300,615,20,150);

   
	paper= new Paper (200, 450, 70);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(255);

  
  
  drawSprites();
 paper.display();
 ground.display();
 D1.display();
 D2.display();
 D3.display();
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});

	}



}