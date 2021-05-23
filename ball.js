class Ball{
    constructor(x,y){
        var options = {
            restitution: 0.8,
            density: 1.5,
            friction: 0.4
        }

        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}