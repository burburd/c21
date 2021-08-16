const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var b1
var b2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 var ball_options ={
   restitution: 0.60
 }
 ball = Bodies.circle(200,100,7,ball_options)
 World.add(world,ball)
 b1=createImg("right.png")
 b2=createImg("up.png")
 b1.position(200,50)
 b2.position(50,50)
 b1.mouseClicked(hForce)
 b2.mouseClicked(vForce)
b1.size(50,50)
b2.size(50,50)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0005,y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.0005})
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,7);
  Engine.update(engine);

}

