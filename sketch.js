var moving, fixed;

function setup() {
  createCanvas(400,400);
  moving= createSprite(300, 200, 50, 80);
  moving.shapeColor= "pink";

  fixed= createSprite(200,200,50,50);
  fixed.shapeColor= "pink"; 
}

function draw() {
  background(0);
  
  moving.y= mouseY;
  moving.x=mouseX;

  if ((moving.x-fixed.x<moving.width/2+fixed.width/2)&&(fixed.x-moving.x<moving.width/2+fixed.width/2)&&(moving.y-fixed.y<moving.height/2+fixed.height/2)&&(fixed.y-moving.y<fixed.height/2+moving.height/2))
  {
    moving.shapeColor= "purple"; 
    fixed.shapeColor= "purple"; 
  }

  else{
    moving.shapeColor="pink";
    fixed.shapeColor="pink";
  }

  drawSprites();
}