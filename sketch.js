const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var bg, hour;
var Score = 0;

function preload() {
    getBackgroundImage();
}



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(850, 305, 300, 10);

    //base
    box1 = new Box(800,250,70,70);
    box2 = new Box(830,250,70,70);
    box3 = new Box(860,250,70,70);
    box4 = new Box(890,250,70,70);

    //first floor
    box5 = new Box(815,230,70,70);
    box6 = new Box(845,230,70,70);
    box7 = new Box(875,230,70,70);

    //second floor
    box8 = new Box(830,210,70,70);
    box9 = new Box(860,210,70,70);

    //top
    box10 = new Box(845,190,70,70);
 

    

    
   

    bird = new Bird(200,250);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    imageMode(CENTER);
    background("lightblue");
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    
    text("Score : "+Score,750,40);

    

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
    
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
   if (keyCode === 32) {
       Matter.Body.setPosition(bird.body,{x: 200 , y: 250})
    slingshot.attach(bird.body);
   }

  }
  async function getBackgroundImage() {

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime =  responseJSON.datetime;
     hour = datetime.slice(11,13);
     console.log(responseJSON);
     console.log(responseJSON.datetime);
    console.log(hour);
    
    
    if (hour >= 06 && hour >= 18) {
        bg = "lightblue";
    }
    else {
        bg = "darkblue";
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}