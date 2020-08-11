class Boy{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        var width = 190
        var height = 190
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking_Mangoes/boy.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y,this.width,this.height);
    }
}