class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.004,
            length : 10
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    attach(){
        bodyA = Matter.body;
    }

    display(){
        if(!this.launcher.bodyA == 1){
            return
        } else { 
            var pointA = this.launcher.bodyA.position;
            var pointB = this.launcher.pointB;
            strokeWeight(4);
        }
    }
}