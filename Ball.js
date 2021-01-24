class Ball{
    constructor(x,y,r,ballColor){
        var opitions = {
            restitution: 1,
            friction: 0.5,
            density: 1,
        } 
        this.Ball = Bodies.circle(x,y,r)
        this.radius = r
        this.color = ballColor
        World.add(world,this.Ball)
    }
    display(){
        var position = this.Ball.position;
        push()
       // fill("Blue")
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(position.x,position.y,this.radius,this.radius)
    
        pop()
    }
}