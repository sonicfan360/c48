const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Survivor;
var Asteroids = [];
var Arrcount = 0;

var Lives = 10;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  Survivor = new Ball(200,200,10,"Blue")

// for(var i = 0; i<100;i++)
// {
//  Asteroids.push(new Ball(random(0,400), 0,5,"Red"))
// }
  var options={
    isStatic: true
  }
 
  ground = Bodies.rectangle(200,390,width,10,options)
  World.add(world,ground)
}

function draw() {
  background(220,255,255);  
  Engine.update(engine);

  textSize(20);
  text("Lives " + Lives, 100,20)
  Survivor.display();
  
  if (keyIsDown(RIGHT_ARROW)) {
    Matter.Body.setPosition(Survivor.Ball,{x:Survivor.Ball.position.x+3,y:Survivor.Ball.position.y})
  
  }

   if (keyIsDown(LEFT_ARROW)) {
    Matter.Body.setPosition(Survivor.Ball,{x:Survivor.Ball.position.x-3,y:Survivor.Ball.position.y})
  
  }
  if (keyIsDown(UP_ARROW)) {
    console.log("Jump")
   // Matter.Body.setPosition(Survivor.Ball,{x:Survivor.Ball.position.x,y:Survivor.Ball.position.y+6})
  // Matter.Body.applyForce(Survivor.Ball,Survivor.Ball.position,{x:3,y:-3})
  }

  
  // for(var i=0; i< Asteroids.length;i++)
  //  { 
  // Asteroids[i].display();
  // }
  if(frameCount%30===0)
  {
    Asteroids[Arrcount] = new Ball(random(50,width-100),0,15,"Red");
  Arrcount++;
  }
  for (var k=0;k<Asteroids.length;k++)
  {
    Asteroids[k].display();
    //detectCollission(Survivor,Asteroids[k])
  }
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,10);
  
}

function detectCollission(SObject,AObject)
{
	var SurvivorPosition = SObject.body.position;
  var AsteroidPosition = AObject.body.position;
  
	var distance = dist(SurvivorPosition.x,SurvivorPosition.y,AsteroidPosition.x,AsteroidPosition.y )
	
	if(distance <= SObject.radius + MObject.radius)
	{
    console.log("Inside less");
    Lives--;
		//Matter.Body.setStatic(mObject.body,false);
	}

}
// function spawnObstacles(){
  
// }