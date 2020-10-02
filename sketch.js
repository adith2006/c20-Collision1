var movingRect, fixedRect;



function setup() {
  createCanvas(800,400);
movingRect =  createSprite(400, 200, 50, 50);
fixedRect = createSprite(150,200,100,20);
}

function draw() {
  background(255,255,255);  

movingRect.y = World.mouseY;
movingRect.x = World.mouseX;

if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2)  {
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";

}

 else  {
movingRect.shapeColor = "blue";
fixedRect.shapeColor = "blue";
}

  drawSprites();



}