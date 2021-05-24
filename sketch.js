var bullet, wall;
var thickness, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  wall = createSprite(1200, 200, thickness, height);
  wall.shapeColor = "grey";
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  


  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw() {
  background(0);  
  textSize(25);
  fill(255);
  text("Speed of the bullet = "+speed, 500, 25);
  text("Weight of the bullet = "+weight, 500, 55);
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    if(damage<10){
      wall.shapeColor = "green";
      text("Quality of the wall = ",500,200);
      fill("green");
      textSize(30);
      text("Very Good", 730, 200);
    }
  
    else if(damage>10){
      wall.shapeColor = "red";
      text("Quality of the wall = ",500,200);
      fill("red");
      textSize(30);
      text("Very Bad", 730, 200);
    }
  }
  
    
  drawSprites();
}
