
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var time = 0


var PLAY = 1;
var END = 0;
var gameState = PLAY;


var ground

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
foodGroup = createGroup()
obstacleGroup = createGroup()
  
  
    monkey = createSprite(50,360,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(200,390,800,10)
  
  
}


function draw() {

  background(180)
  text("time = "+time,300,50)
  drawSprites()
  
  
  if(gameState == PLAY){
    
    ground.velocityX = -(4 + 3* time/100)
    
        time = time + Math.round(getFrameRate()/60);
    

    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
        if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
          
          
       
    }
        monkey.velocityY = monkey.velocityY +0.8
    
        if(obstacleGroup.isTouching(monkey)){
        //trex.velocityY = -12;
        
        gameState = END;
        
      
    }
   
  }
  spawnObstacles()
   if(gameState==END){
    ground.velocityX = 0
    obstacle.velocityX = 0
    
  }
}

function spawnObstacles() { 
  if(frameCount % 80 === 0) {
    obstacle = createSprite(800,360 ,10,40);
                                                        
                                                        obstacle.velocityX = -6;
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    //lifetime to the obstacle 
    obstacle.lifetime = 300; //add each obstacle to the group 
    obstacleGroup.add(obstacle); } }





