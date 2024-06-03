import {ctx, grn} from './util.js';
export class Car{
   img = new Image();

   constructor(isPlayer = true){
      this.isPlayer = isPlayer;
      this.x  = this.isPlayer ? 810 : 550;
      this.y = this.isPlayer ? innerHeight - 150 : 50;
      this.w = 70;
      this.h = 105;

      if(this.isPlayer){
        this.img.src = "../images/main.png"
      } else{
        this.img.src = `../images/c0.png`;
      }
      this.img.onload = ()=> ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
   }

   draw(){
     this.img.onload();
   }
   move(){
    this.draw();
    this.y += 2.5;

    if(this.y >= innerHeight){
        this.y = - 20;
        this.x = grn(900, innerWidth/3);
        this.img.src = `../images/c${grn(3,1)}.png`;
    }
   }
   moveRight(){
     if(this.x < 880){
        this.x += 20;
     }
   }
   moveLeft(){
    if(this.x > 470){
        this.x -= 20;
    }
   }
   moveUp(){
    if(this.y > 20){
        this.y -= 20;
    }
   }
   moveDown(){
    if(this.y < innerHeight-140){
        this.y += 20;
    }
   }
}

