var car, carImg, wall, wallImg;
var speed, weight;

function preload(){
  carImg = loadImage("images (6).jpg");
  wallImg = loadImage("downwload (3).jpg");
}

function setup() {
  createCanvas(800,400);
  
  car = createSprite(50 , 200, 50, 50);
  car.addImage(carImg);
  wall = createSprite(1500, 200, 60, height/2);
  wall.addImage(wallImg);

  speed = random(55, 90);
  weight = random(400, 1500)
  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x - car.x < (car.weight+wall.weight)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation < 180 && deformation > 180){
      car.shapeColor = color(230,230,0);
    }

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}