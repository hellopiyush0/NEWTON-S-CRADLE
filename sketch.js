
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup(){

	createCanvas(1350, 620);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1350/2, 100, 600, 40);

	ball1 = new Ball(660, 500, 40);
	rope1 = new Chain(ball1.body, ground.body, -ball1.radius*1, 0)

	ball2 = new Ball(575, 500, 40);
	rope2 = new Chain(ball2.body, ground.body, -ball2.radius*2 - 20, 0)

	ball3 = new Ball(700, 500, 40);
	rope3 = new Chain(ball3.body, ground.body, ball3.radius*2 - 60, 0)

	ball4 = new Ball(475, 500, 40);
	rope4 = new Chain(ball4.body, ground.body, -160, 0)

	ball5 = new Ball(800, 500, 40);
	rope5 = new Chain(ball5.body, ground.body, 80, 0)

}


function draw(){

	rectMode(CENTER);
  	background("white");

	Engine.update(engine);

	ground.display();
	
	rope1.display();
	ball1.display();

	rope2.display();
	ball2.display();

	rope3.display();
	ball3.display();

	rope4.display();
	ball4.display();

	rope5.display();
	ball5.display();

	if(keyDown("UP_ARROW")){

	  Matter.Body.applyForce(ball4.body, ball4.body.position, {x : -860,y : -855})
	  
	}

  	drawSprites();
 
}