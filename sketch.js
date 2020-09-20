var  bananaImage,obstacleImage,stone,monkey,backGround,backImage,score, player_running,player, obstacleGroup,bananaGroup,fruit,obstacle,IG,ground;

function preload(){
  backImage = loadImage("jungle.jpg");
                        
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
  
}


function setup() {
  createCanvas(400, 400);
  
  backGround = createSprite(200,200,400,400);
  backGround.addImage(backImage);
  backGround.x = backGround.width/2;
   backGround.velocityX = -3;
  
  monkey = createSprite(50,350,20,20);
  monkey.addAnimation("Monkey_01.png", "Monkey_02.png" ,"Monkey_03.png","Monkey_04.png","Monkey_05.png", 
"Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  monkey.scale = 0.12;
  
  IG= createSprite(200,385,400,25);
    IG.visible = false;
  bananaGroup = createGroup();
  
  obstacleGroup = createGroup();

  
  score = 0;
}

function draw() {
  background("white");
  
   backGround.velocityX = -3 ;
    if (backGround.x < 0){
      backGround.x = backGround.width/2;
    }
  
  
  if (World.frameCount % 80 === 0){
     fruit = createSprite(400,random(130,200),20,30);
    fruit.addImage(bananaImage);
    
    fruit.scale = 0.06;
    fruit.velocityX = -5;
    fruit.lifetime = 100;
    
    bananaGroup.add(fruit);
  }
  
   if (World.frameCount % 300 === 0){
     obstacle = createSprite(400,360,10,40);
    obstacle.addImage(obstacleImage);
    
    obstacle.velocityX = -6;
    obstacle.lifetime = 100;
    
    obstacle.scale = 0.25;
    
    
    obstacleGroup.add(obstacle);
  }
   
  monkey.collide(IG);
   monkey.velocityY = monkey.velocityY + 0.8; 
  
   if (keyDown("space")&& monkey.y<359){
    monkey.velocityY = -13;
    
  }
  
  if (bananaGroup.isTouching(monkey)){
      score = score + 2;
      fruit.destroy();
      }
  
  switch (score){
    case 10 : monkey.scale= 0.14;
      break;
      case 20 :monkey.scale= 0.16;
      break;
      case 30 : monkey.scale= 0.18;
      break;
      case 40 : monkey.scale= 0.20;
      break;
      default: break;
  }
  
  if (obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.12;
  }
  
  drawSprites();
  
  stroke("red");
  textSize(20);
  fill("red");
  text("Score: " + score , 300,50);
}

