class Gamemap {
    constructor() {
        this.initimage()
    }
    initimage() {
        this.background = new Image();
        this.background.src = "../img/game_bg.jpg";

    }

    draw(paint) {
        paint.drawImage(this.background, 0, 0);
    }

}