class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.25,
            length: 67.5
        }
        
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        this.counter = 0;

        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
        this.counter+=1;
    }

    attach(bodyA){
        this.sling.bodyA = bodyA;
    }

    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3);
            stroke(255);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}