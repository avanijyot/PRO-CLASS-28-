class Stone {
    constructor(r){
      var options={
          isStatic : false,
          restitution : 0,
          friction : 1,
          density : 1.2
      }
      this.x = 245;
      this.y = 455;
      this.r = 25;
      this.image = loadImage("images/stone.png");
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      World.add(world, this.body);
    }
  
    display() {
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          imageMode(CENTER);
          image(this.image, 0, 0, this.r*2, this.r*2);
          pop();
      }
  }