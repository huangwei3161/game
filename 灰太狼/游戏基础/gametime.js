class Gametime {
    constructor() {
        this.grade=0;
        this.width = 180;
        this.height = 16;
        this.logic();
        this.run();
    }

    logic() {
        this.gametime = new Image();
        this.gametime.src = "../img/progress.png";
        this.end = new Image();
        this.end.src = "../img/hhh.jpg";

    }
    run() {
        if (this.width > 0)
            this.width -= 2;
            // if(){
                
            // }
    }
    draw(paint) {
        
        if (this.width > 0) {
            
            paint.drawImage(
                this.gametime,
                63,
                66,
                this.width,
                this.height);
            this.run();
        } else {
            paint.drawImage(this.end, 0, 0, 320, 480)
        }
    }
}