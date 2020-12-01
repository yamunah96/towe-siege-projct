class Box extends BaseClass {
  constructor(x, y, ){
    super(x,y,35,35);
    this.image = loadImage("block.png");
    this.Visiblity = 255;
  }

  score() {
    if (this.Visiblity < 0 && this.Visiblity >= 105) {
      
    
      text("Score : "+Score,750,40);
    }
  }
  display() {
  
    if(this.body.speed < 5){
      super.display();
     }
     else{
       World.remove(world, this.body);
    
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 35, 35);
       Score++;
       pop();
     }
  }

};
