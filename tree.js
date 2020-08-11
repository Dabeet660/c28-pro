
class Tree{
    constructor(x,y){
        var options = { 
            isStatic : true
        }
        var width = 270;
        var heeight = 350;
        this.body =  Bodies.rectangle(x,y,width,heeight,options);
        this.width = width;
        this.height = heeight;
        this.image = loadImage("Plucking_mangoes/tree.png");
        World.add(world, this.body)
        
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height)
    }
}