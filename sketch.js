var moving , fixed;
var a, b;

function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
  moving.shapeColor = "red";
  fixed = createSprite(300,100,50,50);
  fixed.shapeColor = "blue";
  a = createSprite(200,300,20,20);
  a.velocityX = 4;
  b = createSprite(500,300,20,20);
  b.velocityX = -5;
}


function draw() {
  background(0);  
  drawSprites();
  moving.x = mouseX;
  moving.y = mouseY;
 
  if(isTouching(moving,fixed))
  {
    moving.shapeColor="green";
    fixed.shapeColor="yellow";
  }
  else
  {
    moving.shapeColor="red";
    fixed.shapeColor="blue";
  }
  bounceOff(a,b);
}

function isTouching(object1, object2)
{
 if(object1.x-object2.x<=object1.width/2+object2.width/2
  &&object2.x-object1.x<=object1.width/2+object2.width/2
  &&object1.y-object2.y<=object1.height/2+object2.height/2
  &&object2.y-object1.y<=object1.height/2+object2.height/2)
 {
  return true;
 }
 else
 {
  return false;
 }
}

function bounceOff(object1, object2)
{
  if(object1.x-object2.x<=object1.width/2+object2.width/2
    &&object2.x-object1.x<=object1.width/2+object2.width/2)
    {
      object1.velocityX = -1*object1.velocityX;
      object2.velocityX = -1*object2.velocityX; 
    }
   if(object1.y-object2.y<=object1.height/2+object2.height/2
      &&object2.y-object1.y<=object1.height/2+object2.height/2)
    {
      object1.velocityY = -1*object1.velocityY;
      object2.velocityY = -1*object2.velocityY;
    }
}