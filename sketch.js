//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//to create the sprite objects
var treeObj;
var groundObject;
var launcherObject;
var world;
var boy;

//to preload the images
function preload(){

	boy = loadImage("images/boy.png");

	treeObj = loadImage("images/tree.png");

  }

function setup() {

	//to create the canvas
	createCanvas(1300, 600);

	//to create the engine and world
	engine = Engine.create();
	world = engine.world;

	//to create the game objects
	mangoObj1 = new mango(1140, 130, 30);
	mangoObj2 = new mango(1050, 175, 30);
	mangoObj3 = new mango(1170, 200, 30);
	mangoObj4 = new mango(970, 255, 30);
	mangoObj5 = new mango(1100, 240, 30);
	mangoObj6 = new mango(1030, 290, 30);
	mangoObj7 = new mango(1215, 240, 30);
  mangoObj8 = new mango(1155, 290, 30);
  mangoObj9 = new mango(1245, 300, 30);

	stone = new Stone();

	groundObject = new ground(width/2,600,width,20);

	chain = new Chain(stone.body,{x:245, y:445});
	
	//to run the engine
	Engine.run(engine);

}

function draw() {

  //to give the background
  background(230);

  //to display the game objects
  image(boy, 200, 375, 200, 300);
  image(treeObj, 900, 80, 400, 550);
  
  mangoObj1.display();
  mangoObj2.display();
  mangoObj3.display();
  mangoObj4.display();
  mangoObj5.display();
  mangoObj6.display();
  mangoObj7.display();
  mangoObj8.display();
  mangoObj9.display();

  stone.display();

  chain.display();

  groundObject.display();

  //to detect collision 
  detectCollision(stone ,mangoObj1);
  detectCollision(stone ,mangoObj2);
  detectCollision(stone ,mangoObj3);
  detectCollision(stone ,mangoObj4);
  detectCollision(stone ,mangoObj5);
  detectCollision(stone ,mangoObj6);
  detectCollision(stone ,mangoObj7);
  detectCollision(stone ,mangoObj8);
  detectCollision(stone ,mangoObj9);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    chain.fly();
}

function detectCollision(stone, mango){

	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= mango.r + stone.r)
{
    Matter.Body.setStatic(mango.body, false);
    //text("Press Space to get a second Chance to Play!!", 100, 20);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:245, y:445});
		launcherObject.attach(stone.body);
	}
}