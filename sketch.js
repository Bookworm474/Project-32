const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declare variables
var engine, world;
var slot1, slot2, slot3, slot4, slot5;
var ball, sling, slingState;
var score = 0;
var gameState;

function setup() {
  createCanvas(800,600);

  	//create engine and world
	engine = Engine.create();
	world = engine.world;

	//set the game state and sling state
	slingState = "onSling";
	gameState = "play";

	//create slots
  	slot1 = new Slot(275,300,"blue");
	slot2 = new Slot(400,450,"red");
	slot3 = new Slot(500,200,"green");
	slot4 = new Slot(600,375,"purple");
	slot5 = new Slot(700,500,"yellow");
	//create ball
	ball = new Ball(200,300);
	//create sling
	sling = new Sling(ball.body,{x:100,y:200});
}

function draw() {
	//refresh background
	background(0);
	//update engine
	Engine.update(engine);

	if (gameState === "play"){
		//increase points when ball falls into slot
		if (ball.body.speed < 1 && slingState === "launched"){
			if (ball.body.position.x > 207.5 && ball.body.position.x < 347.5
					&& ball.body.position.y > 252.5 && ball.body.position.y < 302.5
					&& slot1.counter === 0){
				for (var i = 0; i < 50; i++){
					score += 1;
				}
				slot1.counter = 1;
			}
			if (ball.body.position.x > 332.5 && ball.body.position.x < 472.5
					&& ball.body.position.y > 402.5 && ball.body.position.y < 452.5
					&& slot2.counter === 0){
				for (var i = 0; i < 100; i++){
					score += 1;
				}
				slot2.counter = 1;
			}
			if (ball.body.position.x > 432.5 && ball.body.position.x < 572.5
					&& ball.body.position.y > 152.5 && ball.body.position.y < 202.5
					&& slot3.counter === 0){
				for (var i = 0; i < 75; i++){
					score += 1;
				}
				slot3.counter = 1;
			}
			if (ball.body.position.x > 532.5 && ball.body.position.x < 672.5
					&& ball.body.position.y > 327.5 && ball.body.position.y < 377.5
					&& slot4.counter === 0){
				for (var i = 0; i < 150; i++){
					score += 1;
				}
				slot4.counter = 1;
			}
			if (ball.body.position.x > 632.5 && ball.body.position.x < 772.5
					&& ball.body.position.y > 452.5 && ball.body.position.y < 502.5
					&& slot5.counter === 0){
				for (var i = 0; i < 125; i++){
					score += 1;
				}
				slot5.counter = 1;
			}
		}
		//display slots
		slot1.display();
		slot2.display();
		slot3.display();
		slot4.display();
		slot5.display();
		//display ball
		ball.display();
		//display sling
		sling.display();

		//display intructions, score and points
		fill("white");
		textSize(20);
		textFont("verdana");
		text("DRAG THE BALL TO THROW INTO THE SLOTS",10,20);
		text("CLICK SPACE FOR ANOTHER CHANCE. YOU GET FIVE CHANCES.",10,40);
		text("YOU GET POINTS WHEN THE BALL FALLS IN A SLOT.",10,60);
		text("THE NUMBER OF POINTS DEPENDS ON THE SLOT IT FALLS IN.",10,80);
		fill("violet");
		text("SCORE: "+score,675,50);
		fill("lightblue");
		text(50,262.5,275);
		text(100,381.25,425);
		text(75,487.5,175);
		text(150,581.25,350);
		text(125,681.25,475);
	}

	if (gameState === "end"){
		//display game over text
		textSize(50);
		textFont("verdana")
		fill("white");
		text("GAME OVER",250,300);
		textSize(30);
		fill("violet");
		text("SCORE: "+score,325,400)
	}
}

function mouseDragged(){
	//move the ball when mouse is dragged
	if(slingState != "launched"){
	  	Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
	}
}
  
function mouseReleased(){
	//release the ball when mouse is released
	if (slingState != "launched" && gameState === "play"){
		sling.fly();
		for (var i = 0; i > 0; i++){
			sling.counter += 1;
		}
		slingState = "launched";
	}
}
  
function keyPressed(){
	//return the ball to sling
	if (keyCode === 32 && slingState === "launched"){
	  	sling.attach(ball.body);
		slingState = "onSling";
		slot1.counter = 0;
		slot2.counter = 0;
		slot3.counter = 0;
		slot4.counter = 0;
		slot5.counter = 0;
		
		//end game
		if (sling.counter === 5){
			gameState = "end";
		} 
	}
}