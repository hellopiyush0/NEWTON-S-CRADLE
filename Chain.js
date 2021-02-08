class Chain{

    constructor(body1, body2, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {

            bodyA : body1,
            bodyB : body2,
            pointB : {x : this.offsetX, y : this.offsetY}
            //stiffeness : 0.1,
            //length : 3

        }

        this.body = Constraint.create(options);

        World.add(world, this.body);

    }

    display(){

        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;

        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;

        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointB.y+this.offsetY;

        strokeWeight(5);

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);


    }

}