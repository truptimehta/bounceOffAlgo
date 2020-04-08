var fixedRect,movingRect



function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(800, 200, 50, 80);
  movingRect=createSprite(800, 700, 80, 30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(255,255,255);  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  console.log(fixedRect.x);
  console.log(movingRect.x);
  if(movingRect.x-fixedRect.x< (fixedRect.width/2) +(movingRect.width/2)&& 
  fixedRect.x-movingRect.x<(fixedRect.width/2) +(movingRect.width/2))
  {
    movingRect.velocityX=movingRect.velocityX * -1;
    fixedRect.velocityX=fixedRect.velocityX * -1;
  }
  
 
 if( fixedRect.y-movingRect.y<(fixedRect.height/2) +(movingRect.height/2) &&
  movingRect.y-fixedRect.y<(fixedRect.height/2) +(movingRect.height/2)  )
  {
    movingRect.velocityY=movingRect.velocityY * -1;
    fixedRect.velocityY=fixedRect.velocityY* -1;
  }
 
  drawSprites();
}