var caixa;

function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,20,20)
}

function draw() 
{
  background("blue");
  
  if(keyDown("UP_ARROW")){
    caixa.velocityY = -2
  }
  
  if(keyDown("DOWN_ARROW")){
    caixa.velocityY = 2
  }
 
  if(keyDown("RIGHT_ARROW")){
    caixa.velocityX = 2
  }
 
  if(keyDown("LEFT_ARROW")){
    caixa.velocityX = -2
  }
  drawSprites();
}




