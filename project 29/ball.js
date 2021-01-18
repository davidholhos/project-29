class Poligon{
    constructor(x,y,r){
     var options = {
            restitution:1.0,
            friction:1.0,
            density:3.0,
            isStatic:false
            

        }
        this.x = x;
        this.y = y;
        this.r = r;
        

        this.body = Bodies.circle(this.x, this.y, this.r,options);
        
        World.add(world,this.body);
       
    }
    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y);
        fill(255,255,255);
        //rectMode(CENTER)
        ellipse(0,0,this.r, this.r);
        pop()
    }
}