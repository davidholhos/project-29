class Sling{
    
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.4,
                length: 10
            }
        
            this.pointB = pointB
            this.sling = Constraint.create(options);
            World.add(world, this.sling);
        }
    
        fly(){
            this.sling.bodyA = null;
        }
    
        attached(body){
            this.sling.bodyA = body;
        }
    
        display(){
            
            if(this.sling.bodyA){
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB;
                push();
                
                stroke(48,22,8);
                if(pointA.x < 220) {
                    strokeWeight(7);
                    
                    line(pointA.x, pointA.y, pointB.x + 30, pointB.y - 3);
                    
                }
                
                    
                
               
                
                pop();
            }
        }
        
    }

