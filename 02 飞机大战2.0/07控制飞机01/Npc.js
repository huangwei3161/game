class Npc {
  constructor(width, height) {
    this.KEY_UP = 119;
    this.KEY_DOWN = 115;
    this.KEY_LEFT = 97;
    this.KEY_RIGHT = 100;
    this.swidth = width;
    this.sheight = height;
    this.initPlay();
  }
  initPlay() {
    //创建一个飞机对象
    this.play = new Image();
    //设置图片资源
    this.play.src = "../img/player.png";
    //设置飞机尺寸;
    this.play.pwidth = this.swidth / 8;
    this.play.pheight = (this.play.pwidth / 3) * 2;
    //设置飞机坐标
    this.play.pX = (this.swidth - this.play.pwidth) / 2; //设置飞机处于中间位置
    this.play.pY = this.sheight - this.play.pheight;
  }
  run(paint) {
    paint.drawImage(
      this.play,
      this.play.pX,
      this.play.pY,
      this.play.pwidth,
      this.play.pheight
    );
  }

  onkeypress(keyCode) {
    switch (keyCode) {
      case this.KEY_UP:
        this.play.pY = this.play.pY - 20;
        break;
      case this.KEY_DOWN:
        this.play.pY = this.play.pY + 20;
        break;
      case this.KEY_LEFT:
        this.play.pX = this.play.pX - 20;
        break;
      case this.KEY_RIGHT:
        this.play.pX = this.play.pX + 20;
        break;
    }
  }
}
