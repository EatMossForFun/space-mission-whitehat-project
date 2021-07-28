var iss, issimg;
var rocket,img1,img2,img3;
var space,spaceimg;
var obj
gameState=0


function preload() {

spaceimg = loadImage("spacebg.jpg");
img1 = loadImage("spacecraft1.png");
img2 = loadImage("spacecraft2.png");
img3 = loadImage("spacecraft3.png");
img4 = loadImage("spacecraft4.png");
issimg = loadImage("iss.png")
}

function setup() {
  createCanvas(1366,650);


  iss = createSprite(660 ,240, 50, 50);
 iss.addImage(issimg)
 iss.scale = 1.1;


 rocket = createSprite(860,540,10,10);
 rocket.addImage(img1);
 rocket.scale = 0.25

 
obj = createSprite(590,270,3,3);
}

function draw() {
  background(spaceimg); 




  if(gameState===0){

if(keyDown(LEFT_ARROW)){

  rocket.x = rocket.x - 3;
  rocket.addImage(img3)
}

if(keyDown(RIGHT_ARROW)){

  rocket.x = rocket.x + 3;
  rocket.addImage(img4)
}

if(keyDown(UP_ARROW)){

  rocket.y = rocket.y - 3;
  rocket.addImage(img2)
}

if(keyDown(DOWN_ARROW)){

  rocket.y = rocket.y + 3;
  rocket.addImage(img1)

}
  
}



if(rocket.isTouching(obj)){
  gameState = 1

 
}
if(gameState===1){
 rocket.velocityX = -4
  iss.velocityX = -4
}


iss.display();
rocket.display();
if(gameState===1){
  text("succesfully Docked!",600,500)
  textSize(50)
}
  
}

 
