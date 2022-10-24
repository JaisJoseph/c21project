const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball,groundObj,leftSide,rightSide;
 var world;
 var radius = 40;	



function setup() {
	createCanvas(600, 530);

var ball_options={
	isStatic:false,
	restitutuion:0.3,
	friction:0,
	density:1.2	
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,100,20,ball_options);
	World.add(world,ball);
	ellipseMode(RADIUS);

	groundObj = new Ground(300,520,600,20);
	leftSide = new Ground(400,500,20,100);
	rightSide = new Ground(500,500,20,100);
	rectMode(CENTER);
	
	
	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 40, y: -50});
};
	}



function draw() {
  
  background(0);

  ellipse(ball.position.x,ball.position.y,20);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}



