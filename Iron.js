class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.9
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 80;
      World.add(world, this.body);
    }
    display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x,ironpos.y);
			fill("green");
            rectMode(CENTER)
            rect(0, 0, this.width, this.height);
			pop()
	}

}