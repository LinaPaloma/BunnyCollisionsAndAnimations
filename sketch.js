const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;

var bg_img, food, rabbit;
var button;
//Add the variables to blink and eat

//Add the variable for sad


function preload()
{
  bg_img = loadImage('assets/background.png');
  food = loadImage('assets/melon.png');
  rabbit = loadImage('assets/Rabbit-01.png');;
  //Load the files to create animations for blinking and eating
  

  //Load the files for the sad animation
  
  
  //Establish the blink and eat animation as true, so they will play
 
 
  //Configure the playing function as true for the sad animation
 
  //Avoid playing the sad animation over and over by defining the loop function as false
 
  //Avoid playing the eat animation over and over by defining the loop function as false
 
  

function setup() {
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  
  button = createImg('assets/cut_btn.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);
  
  //Use frameDelay to reduce the speed of the animation
 
 
  //Reduce the speed of the sad animation
 
  
  bunny = createSprite(230,620,100,100);
  bunny.scale = 0.2;

  //Add the eat and blink animation to the bunny to be able to make the change
  
  
  
  //Add the sad animation
  
  
  rope = new Rope(7,{x:245,y:30});
  ground = new Ground(200,690,600,20);
  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
  image(bg_img,width/2,height/2,490,690);

  //Add a condition to only display the image of the fruit has not been removed from the world
 
  image(food,fruit.position.x,fruit.position.y,70,70);
 

  rope.show();
  Engine.update(engine);
  ground.show();

  //Use a condition to change the animation accordingly if the collision with the bunny occurs
  
  


  //Use a condition to change the animation accordingly if the collision with the ground occurs
  
  



  drawSprites();
}

function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}

//Define a function to detect the collision between the fruit and the bunny
//Use parameters for body and sprite

  //Add a condition to only check distance if the image of the fruit has not been removed from the world

    //Use a variable to store the distance between body and sprite
  
    //Add a condition that will execute if distance is less than 80
  
      //If the condition applies remove the fruit from the world
    
      //Make the fruit variable null
    
      //Return a true value
    
    
      //If condition doesn't apply return false
    
      

      