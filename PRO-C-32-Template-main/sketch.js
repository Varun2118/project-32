const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time
var bg ;

function preload() {
     getBackgroundImg( ) }

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg)


    Engine.update(engine);
    fill("cyan")
   textSize(40)
   text("Time:"+time,100,100)
    


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    //change the data in JSON format
    if(hour>=0600 && hour<=1800){
        bg = "sunrise1.png";
    }
    else{
        bg = "sunset11.png";
    }

    backgroundImg = loadImage(bg);
    // write code slice the datetime

if(hour >= 12){
    time=hour%12
}
else{
    time=hour 
}
    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
