var player, playerImage, bg, bgimage;
var score = 0;

function preload(){
  bgimage = loadImage("Images/SkyBlue.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight - 111);

  //bg = createSprite(displayWidth/2, displayHeight/2 - 100, displayWidth, displayHeight);
  
 
  player = createSprite(displayWidth/3 - 250, displayHeight/2 + 100, 50, 50);

}

function draw() {
  background(255,255,255);
  image(bgimage, 0, -displayHeight*2, displayWidth*2, displayHeight*3);

  //score 
  textSize(35);
  text("Score: "+score, player.x + 900, player.y - 400);

  //camera
  camera.position.x = player.x + 500;
  camera.position.y = player.y - 100;
  
  //jump and gravity
  if(keyIsDown(32)){
    player.velocityY = -10;
    player.velocityX = 5;
  }

  player.velocityY = player.velocityY + 0.3;

  //

  drawSprites();
}

