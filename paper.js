class Paper{
    constructor(x,y){
        
        //this.pointB = pointB
        /*this.body.x=x;
        this.body.y=y;*/
        //const Constraint = Matter.Constraint;
        this.body=Bodies.circle(x,y,10);
        
        World.add(world,this.body);

    }
    display(){
       
        var pos=this.body.position;
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10);
    }
}