var database,happydog,dog,foodS,foodStock;
var dogimg;

function preload()
{
	//load images here
	dogimg=loadImage("images/dogImg.png");
	happydog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(600, 600);
	database=firebase.database();
  dog=createSprite(250,350);
  dog.addImage(dogimg);
  dog.scale=0.3;
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

}


function draw() { 
	background(46,139,87);
	if(keyWentDown(UP_ARROW)){
		writeStock(foodS);
		dog.addImage(happydog);

	} 

  drawSprites();
textSize(18);
fill("white");
stroke("black");
text("PRESS UP_ARROW KEY TO FEED DRAGO,MILK",100,50);
text("FOOD LEFT : "+foodS,150,200);

}
function readStock(data){
	foodS=data.val();

}
function writeStock(x){
	if(x<=0){
		x = 0;
	}
	else{
		x = x-1;
	}
	database.ref("/").update({
		Food : x

	})
	
}


