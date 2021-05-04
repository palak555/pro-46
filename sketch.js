var PLAY=1
var END=0
var gameState=1

var LEVEL=1


var bg,bgImage;
var player , playerImage; 
var pillar;
var score=0; 
var food=0;


function preload(){
pillarImg=loadImage("pillar..png")
RpillarImg=loadImage("Rpillar.png")
bgImage=loadImage("bg..png")
playerImage=loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png");
gr=loadImage("ground.png")
gm=loadImage("gameOver.png");
fruit1_img=loadImage("melon2.png")
fruit2_img=loadImage("orange2.png")
fruit3_img=loadImage("pineapple2.png")
fruit4_img=loadImage("apple2.png")
fruit5_img=loadImage("banana2.png")
}


function setup(){
  createCanvas(1400,600);
  

  ground=createSprite(5000,600,1200,3)

  bk=createSprite(800,290,400,200)
  bk.addImage(bgImage);
  bg=createSprite(800,290,400,200)
  bg.addImage(bgImage);
  bg.scale=1                     
  bg.velocityX=-4
  bg.x = bg.width /2;

  player=createSprite(100,100,20,50)
  player.addAnimation("running",playerImage)
  player.scale=0.3                                                                       
  player.collide(ground)
  player.setCollider("rectangle",0,0,50,player.height);
  player.debug = false


  go=createSprite(1000,600,20,20)
  go.addImage(gr)
  ground=createSprite(1600,600,20,20)
  ground.addImage(gr)
  ground.scale=1
  ground.velocityX=-4;
  ground.x=ground.width/2

  obstaclesGroup=new Group();
  obstacleGroup=new Group();
  fruitGroup=new Group();
  
  
  
}

function draw(){
  background(bgImage);
  
  textSize(30)
  text("LEVEL 1",680,50)

if(gameState===PLAY){


   if (bg.x < 0){
    bg.x = bg.width/2;
  }

  
  


  if (ground.x < 0){
    ground.x = ground.width/2;
  }


  createPillars();
  createPillar();
  createFruits();
 // createRpillars();
  //createRpillar();

  if(keyDown("space")&& player.y >= 100) {
    player.velocityY = -6;
    }


player.velocityY = player.velocityY + 0.8

if(player.isTouching(obstaclesGroup)||player.isTouching(obstacleGroup)||player.isTouching(ground)){
  gameState=END;
}
}



if(gameState===END){
   bg.velocityX=0;
   obstacleGroup.destroyEach();
   obstaclesGroup.destroyEach();
   ground.velocityX=0;
   player.destroy();
   fruitGroup.destroyEach(); 
  gameover=createSprite(700,300,10,10)
  gameover.addImage(gm)
}
 




  drawSprites();

  fill(0)
  textSize(20)
  
  text("Score: "+score,1250,50)
  text("Food: "+food,1150,50)
 

  



}
    


function createPillars(){
  if(frameCount%200===0){
    var pillar=createSprite(900,30,40,10);
    pillar.y = Math.round(random(0,70));
    pillar.addImage(pillarImg);
    pillar.velocityX=-4;
    pillar.scale=1.6

    pillar.lifetime=220;
    obstaclesGroup.add(pillar)
   

  }
}
//sjhgdhmzcvnb
function createPillar(){
  if(frameCount%200===0){
    var p=createSprite(900,550,40,10);
    p.y = Math.round(random(570,550));
    p.addImage(pillarImg);
    p.velocityX=-4;
    p.scale=1.6

    p.lifetime=220;
    obstacleGroup.add(p)

  }
}



function createFruits(){
if (frameCount % 300 === 0) {
  fruits = createSprite(1000,random(200, 500),  100, 100);
  fruits.velocityX= -6;
  var rand = Math.round(random(1,5));
  switch(rand){
      case 1: fruits.addImage("fruit1",fruit1_img);
      break;
      case 2: fruits.addImage("fruit1", fruit2_img);
      break;
      case 3: fruits.addImage("fruit1", fruit3_img);
      break;
      case 4: fruits.addImage("fruit1", fruit4_img);
      break;
      case 5: fruits.addImage("fruit1", fruit5_img);
      break;
  }
  fruits.scale=0.8  
  fruitGroup.add(fruits);
  
}
}
























