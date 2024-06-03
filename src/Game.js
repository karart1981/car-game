import {ctx, canvas} from './util.js';
import {Road} from './Road.js';
import {Car} from './Car.js';

export class Game{
    
    bg = new Image();

    road  = new Road();

    car = new Car();

    another = new Car(false);

    constructor(){
        window.onkeydown = (e)=>{
            if(e.key == 'ArrowRight'){
                this.car.moveRight();
            } 
            else if(e.key == 'ArrowLeft'){
                this.car.moveLeft();
            }
            else if(e.key == 'ArrowUp'){
                this.car.moveUp();
            }
            else if(e.key == 'ArrowDown'){
                this.car.moveDown();
            }
        }
        this.bg.src= "https://media.istockphoto.com/id/968853036/photo/top-view-of-a-young-green-forest-in-spring-or-summer.jpg?s=612x612&w=0&k=20&c=hcvwY9NfJI86bMAGtBaUrQLqc0OqkaXHLHf2ZiI4DRs=";
        this.bg.onload = () => ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.id = requestAnimationFrame(()=> this.run());
    }

    run(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.bg.onload();
        this.id = requestAnimationFrame(() => this.run())
        this.road.move();
        this.car.draw();
        this.another.move();

        if(Math.abs(this.car.x - this.another.x) < 60 && Math.abs(this.car.y - this.another.y) < 95){
            cancelAnimationFrame(this.id);
        }
    }

}