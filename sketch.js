var canvas;
var music;
var box1,box2,box3,box4;
var edge;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     box1 = createSprite(100,580,100,30);
     box2 = createSprite(250,580,100,30);
    box3 = createSprite(400,580,100,30);
     box4 = createSprite(550,580,100,30);
     ball = createSprite(700,400,25,25);


    //create box sprite and give velocity
    ball.velocityY=10;
    ball.velocityX=-15;
    
}

function draw() {
    background(rgb(169,169,169));
    box1.shapeColor="red";
    box2.shapeColor="green";
    box3.shapeColor="blue";
    box4.shapeColor="brown";

    //create edgeSprite
    edge = createEdgeSprites();
    ball.bounceOff(edge);
    if(ball.isTouching(box1)&&ball.bounceOff(box1)){
        ball.shapeColor="red"
        music.play();
        
    }
    if(ball.isTouching(box2)&&ball.bounceOff(box2)){
        ball.shapeColor="green"
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;   
        
    }
    if(ball.isTouching(box3)&&ball.bounceOff(box3)){
        ball.shapeColor="blue"
        
    }
    if(ball.isTouching(box4)&&ball.bounceOff(box4)){
        ball.shapeColor="brown"
        music.play();
    }

        


  drawSprites();
    //add condition to check if box touching surface and make it box
}
