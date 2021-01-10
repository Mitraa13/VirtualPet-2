
var database;
var dog, dogImg, happyDog;
var foodS = 20;
var lastFed = 0;
var foodObj = null;
var feedButton, addButton;

function preload()
{
  backgroundImg = loadImage("images/bg.png");
  dogImg = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
}


function setup() {

  createCanvas(800, 500);

   var greeting = createElement('h3');
   var greeting1 = createElement('h3');
  
  feedButton = createButton("Feed your dog");
  feedButton.position(700, 95);
  feedButton.mousePressed(feedDog);

  input = createInput ("Fill your Dog's Name"); 
  input.position (500, 95); 

  var name = input.value();

  input1 = createInput ("Fill opinion about your dog"); 
  input1.position (850, 470);
  var opinion = input1.value();

  var button = createButton("Submit");
  button.position(850, 500);
  
  addButton = createButton("Buy Milk Bottles");
  addButton.position(820, 95);
  addButton.mousePressed(addFood);

  button.mousePressed(function(){
    input.hide();
    addButton.hide();
    feedButton.hide();
    greeting.html("Thank you!!");
    greeting.position(800, 150);
    greeting1.html("Meet you soon");
    greeting1.position(805, 195);
 })


  foodObj = new Food();

  dog = createSprite(650, 280);
  dog.scale = 0.3;
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happyDog);

  
}


function draw() {  

  background(backgroundImg);

  fill("white");
  textSize(15);
  if(lastFed>=12){
    text("Last Fed (approx timing) : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Fed (approx timing) : 12 AM",350,30);
   }else{
     text("Last Fed (approx timing) : "+ lastFed + " AM", 350,30);
   }

  drawSprites();

  strokeWeight(3);
  stroke("black")
  fill("white");
  textSize(30);
  text("Milk bottles left in stock : " + foodS, 30, 475);

  strokeWeight(3);
  stroke("blue")
  fill("white");
  textSize(15);
  text("*To be filled only after you finshed playing the game ", 450, 410);

  foodObj.display();

}


function addFood(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  if(foodS > 0){
    dog.changeAnimation("dog2", happyDog);
    foodS--;
    foodObj.updateFoodStock(foodS);
    lastFed = hour();
    foodObj.updateLastFed(lastFed);
  }
}

