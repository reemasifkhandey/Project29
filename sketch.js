const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var block,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,
block15,block16,block17,block18,block19,block20,stand,ground,polyImg;
var world,engine;

function setup() {
	createCanvas(800, 750);
	engine = Engine.create();
	world = engine.world;

	stand = new Stand(400,600,400,40);

	ground = new Ground(600,height,1200,20);

	ball=new Ball(200,200,50,50); 

	block = new Block(550,550,60,60);
    block2 = new Block(500,550,60,60);
	block3 = new Block(450,550,60,60);
	block4= new Block(400,550,60,60);
	block5= new Block(350,550,60,60);
	block6= new Block(300,550,60,60);
    block7= new Block(250,550,60,60);

	
	//block9= new Block(300,500,60,60);
	block10= new Block(330,500,60,60);
	block11= new Block(360,500,60,60);
	block12= new Block(390,500,60,60);
	block13= new Block(420,500,60,60);
    block14= new Block(460,500,60,60);

	block15= new Block(350,450,60,60);
	block16= new Block(390,450,60,60);
	block17= new Block(440,450,60,60);

	block18= new Block(380,400,60,60);
	block19= new Block(400,400,60,60);

	block20= new Block(390,350,60,60);





	slingshot= new SlingShot(ball.body,{x:50,y:300});

	
	
	Engine.run(engine);

}
function preload() {
    polyImg= loadImage("polygon.png");
}

function draw() {
  background("brown");

  stand.display();

  ground.display();

  ball.display();
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  


  slingshot.display();


  drawSprites();
  
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

