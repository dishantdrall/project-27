class Rect{
    constructor(){
        this.rect=Bodies.rectangle(200,200,100,10);
        World.add(world,this.rect);
    }
    display(){
        rectMode(CENTER);
        rect(200,200,140,10);
    }
}