const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;
function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    groundobject = new Ground();
    dustbin = createSprite(964,520,20,20);
    dustbin.addImage(binImg);
    dustbin.scale = 0.45;
    crumpledPaper = new Paper(); 
    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
}
function draw(){
    background(0);
    Engine.update(engine);    
    groundobject.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display();
    drawSprites();
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}