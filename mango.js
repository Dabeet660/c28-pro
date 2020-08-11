class Mango{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        var radius = 40;
        this.body = Bodies.circle(x,y,radius,options);
        this.raidus = radius;
        this.image = loadImage("Plucking_mangoes/mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        imageMode(RADIUS);
        image(this.image, pos.x, pos.y,this.raidus,this.raidus)
    }
}