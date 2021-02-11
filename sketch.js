const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var gameState= 'Start'
var chances=1;
var score=0;
var form;

function preload(){
    ball=loadImage("ball.png")
    lane=loadImage("lane.jpg")
    hand=loadImage("hand.png")
    sound=loadSound("sound.mp3")
}

function setup(){
    var canvas = createCanvas(300,700);
    engine = Engine.create();
    world = engine.world;

    sound.loop();

    form= new Form()
    ballBody = Bodies.circle(150 , 100 , 25 , {restitution:0.5, isStatic:false, density:1.5,friction:0.8});
    World.add(world, ballBody);
    leftBody = Bodies.rectangle(0,250,10,500,{isStatic:true})
	World.add(world,leftBody);
	rightBody = Bodies.rectangle(300,250,10,500,{isStatic:true})
	World.add(world,rightBody);

    box1 = new Box(200,672,20,50);
    box2 = new Box(180,672,20,50);
    box3 = new Box(160,672,20,50);
    box4 = new Box(140,672,20,50);
    box5 = new Box(120,672,20,50);
    box6 = new Box(100,672,20,50);
    box12 = new Box(180,622,20,50);
    box7 = new Box(160,622,20,50);
    box8 = new Box(140,622,20,50);
    box9 = new Box(120,622,20,50);
    box10 = new Box(160,572,20,50);
    box11 = new Box(140,572,20,50);
    ground = new Ground(150,height,300,10)
    sling = new SlingShot(ballBody,{x:150,y:100});
}

function draw(){
    background(0);
    if (gameState === 'Start'){
        form.display();
        form.button.mousePressed(()=>{
            gameState='Attached'
            form.name.hide();
            form.button.hide();
            form.title.hide();
            form.greeting.position(50,200)
            form.greeting.html("Welcome"+" Press S to Start")
            
        })
    }
    else if (gameState === 'Attached' && keyIsDown("s")){
        Engine.update(engine);
        image(lane, 150, 300, 300, 800)
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
        box11.display();
        box12.display();
        ground.display();
        sling.display();
        
        rectMode(CENTER)
        noStroke()
        fill("#86866F")
        rect(leftBody.position.x,leftBody.position.y,10,700)
        rect(rightBody.position.x,rightBody.position.y,10,700)
        imageMode(CENTER)
        image(ball,ballBody.position.x,ballBody.position.y,50,50)
        image(hand,mouseX,mouseY,50,50)
        strokeWeight(5)
        stroke("#86867F")
        line(50,530,245,530)
            //ballBody.position.x=mouseX

        fill("aquamarine")
        textSize(15)
        text("Chances Taken:"+ chances,100,20)

        fill("lightpink")
        text("Score : "+score,120,50)

        fill("lightgrey")
        textSize(12)
        text("Press Space For Another Chance",60,350)
        box1.score()
        box2.score()
        box3.score()
        box4.score()
        box5.score()
        box6.score()
        box7.score()
        box8.score()
        box9.score()
        box12.score()
        box10.score()
        box11.score()
    }
}

function mouseDragged(){
     if (gameState !== 'launched' && gameState === 'Attached'){
        Matter.Body.setPosition(ballBody,{x:mouseX,y:mouseY})  
  }
}
function mouseReleased(){
    sling.fly();
    gameState = 'launched'
}
function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(ballBody,{x:150,y:150})  
        sling.attach(ballBody);
        chances+=1;
        gameState = 'Attached'
    }
} 