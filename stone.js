class Stone{
    constructor(x,y){
        var options = { 
            isStatic: false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        var radius = 25;
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("Plucking_mangoes/stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}