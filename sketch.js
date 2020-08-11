const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var lstone,lmango;
var tree;
var ground;
var boy;
var stone;
var mango,mango1,mango2,mango3,mango4,mango5;
var launcher;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(670,200);
    ground = new Ground(700,370,1800,10);
    boy = new Boy(100,320);
    stone = new Stone(30,60);
    mango = new Mango(670,100);
    mango1 = new Mango(670,150);
	  mango2 = new Mango(640,70);
	  mango3 = new Mango(700,70);
	  mango4 = new Mango(620,150);
    mango5 = new Mango(720,150);

	launcher = new Launcher(stone.body,{x:700,y:200});


	Engine.run(engine);
  
}


function draw() {

  background(255);
  
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  launcher.display();

  detectCollision(stone,mango);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function detectCollision(lstone,lmango){
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance <= lmango.r + lstone.r){
      Matter.Body.setStatic(lmango.body,false);
    }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    launcher.attach(stone.body);
  }
}