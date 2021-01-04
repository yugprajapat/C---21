var fixedRect, movingRect,car,stone;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(600, 200, 50, 50);
  car.velocityX = -2;
   stone = createSprite(400,200,80,80);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(car,stone)){
  car.velocityX = 0;
  stone.shapeColor = "red";
 }

  drawSprites();
}





