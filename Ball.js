class Ball {

	constructor(x, y, radius){

		var options = {

            isStatic : false,
            restitution : 1,
            friction : 0.5,
            density : 2			
			
		}

		this.x = x;
		this.y = y;
		this.radius = radius;

		this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);

		this.x = x;
		this.y = y;
		this.radius = radius;

	}
	display(){
				
		var Pos = this.body.position;		
		
		push()
		translate(Pos.x, Pos.y);
		ellipseMode(RADIUS)

		fill("red");
		ellipse(0, 0, this.radius, this.radius);
		pop()
		
	}

}