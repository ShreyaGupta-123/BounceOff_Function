var car,car2,wall,wall2,wall3,wall4;



function setup() {
  createCanvas(400,400);
  car=createSprite(30,200,20,20);


  car.shapeColor="red"

  car2=createSprite(80,200,20,20);
  car2.shapeColor="yellow"

  wall=createSprite(350,200,5,170);
  wall.shapeColor="blue"

  wall2=createSprite(20,200,5,170);
  wall2.shapeColor="blue"


  wall3=createSprite(200,20,170,5);
  wall3.shapeColor="blue"


  wall4=createSprite(200,350,170,5);
  wall4.shapeColor="blue"



  car.velocityX=4
  car.velocityY=-4

  car2.velocityX=-4
  car2.velocityY=4

}

function draw() {
  background("Black"); 
  
  
  car.bounceOff(wall);
  car.bounceOff(wall2);
  car.bounceOff(wall3);
  car.bounceOff(wall4);
  

  car2.bounceOff(wall);
  car2.bounceOff(wall2);
  car2.bounceOff(wall3);
  car2.bounceOff(wall4);
  

  car.bounceOff(car2);
  car2.bounceOff(car);


  drawSprites();
}