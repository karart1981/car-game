import {ctx, canvas} from './util.js';
export class Road{
   x = innerWidth / 3;
   y = 0;
   w = 520;
   h = innerHeight;
   lines = new Array(Math.ceil(innerHeight / 90)).fill(null).map((elm,index)=>({x:700, y:90 * index, w:10, h:70}));

   draw(){
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.w, this.h)
     this.lines.forEach(ln=>{
        ctx.fillStyle = "white";
        ctx.fillRect(ln.x,ln.y,ln.w,ln.h);
     })
   }
   move(){
     this.draw();
     this.lines.forEach(ln => {
        ln.y += 4;
        if(ln.y >= innerHeight){
            ln.y = -20;
        }
     })
   }
}

//   #2b2a29