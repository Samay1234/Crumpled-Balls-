class Paper 
{
  constructor(x, y,radius) 
  {
    var options = 
    {
        isStatic:false, 
        'restitution':0.3,
        'friction':1.0,
        'density':1.2,
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = loadImage("Paper1.png")
    this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2 , options);
   
    
    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
  
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    fill(255,0,255);
    imageMode(CENTER)
    image(this.image, 0, 0, this.radius, this.radius);
    //ellipseMode(CENTER);
    //strokeWeight(4);
    //stroke("blue");
    //fill(255);
    //ellipse(0, 0, this.radius);
    pop();
  }
};