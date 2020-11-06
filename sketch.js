var bullet,wall;
var speed,weight,Thickness;

function setup() {
  createCanvas(600,400);
  bullet = createSprite(50, 200, 40, 10);
  Thickness = random(22,83);
  wall = createSprite(500,200,Thickness,300);
  bullet.velocityX = 8;
  bullet.shapeColor = "white";
  wall.shapeColor = (80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("black");  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/(Thickness*Thickness*Thickness);
   if(damage > 10){
     wall.shapeColor = "red";
   }
  
   if(damage<10){
     wall.shapeColor = "green";
   }
  }

  drawSprites();
}