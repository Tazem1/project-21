var bullet,wall,damage
var speed,thickness,weight

function setup(){
createCanvas(800,200)

bullet = createSprite(100,100,50,15);
bullet.velocityX = 4

thickness = random(20,80)
weight = random(30,60)
speed = random(220,320)

wall = createSprite(600,100,thickness,height/2)
wall.shapeColor = "white";



}

function draw(){
background("black")

console.log(damage)

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  
  if(damage>10){
    bullet.shapeColor = "lime"
  }
  else if(damage<10){
    bullet.shapeColor = "red";
  }

}

 drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x+bullet.width
  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }

  return false;
}