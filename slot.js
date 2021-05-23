class Slot{
	constructor(x,y,colour){
		this.x=x;
		this.y=y;
		this.dustbinWidth=150;
		this.dustbinHeight=50;
		this.wallThickness=10;
		this.colour = colour;
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
		
		this.counter = 0;

		World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);

	}
	
	display(){
		var posBottom=this.bottomBody.position;
		var posLeft=this.leftWallBody.position;
		var posRight=this.rightWallBody.position;

		push();
		translate(posLeft.x, posLeft.y);
		rectMode(CENTER);
		strokeWeight(0);
		angleMode(RADIANS);
		fill(this.colour);
		rect(0,0,this.wallThickness, this.dustbinHeight);
		pop();

		push();
		translate(posRight.x, posRight.y);
		rectMode(CENTER);
		strokeWeight(0);
		angleMode(RADIANS);
		fill(this.colour);
		rect(0,0,this.wallThickness, this.dustbinHeight);
		pop();

		push();
		translate(posBottom.x, posBottom.y+5);
		rectMode(CENTER);
		strokeWeight(0);
		angleMode(RADIANS);
		fill(this.colour);
		rect(0,0,this.dustbinWidth+10, this.wallThickness);
		pop();
		
	}

}