class Npc {
  constructor(width, height) {
    this.KEY_UP = 119;
    this.KEY_DOWN = 115;
    this.KEY_LEFT = 97;
    this.KEY_RIGHT = 100;
    this.swidth = width;
    this.sheight = height;
    this.initPlay();
    this.initBullet();
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

  initBullet() {
    //设置宽度和高度
    let bulletW = this.play.pwidth / 6;
    let bulletH = bulletW * 2;
    //设置坐标
    let bulletX = this.play.pX + (this.play.pwidth - bulletW) / 2;
    let bulletY = this.play.pY - bulletH;
    this.bullet = new Bullet(
      "../img/bullet.png",
      bulletX,
      bulletY,
      bulletW,
      bulletH
    );
  }
  run(paint) {
    paint.drawImage(
      this.play,
      this.play.pX,
      this.play.pY,
      this.play.pwidth,
      this.play.pheight
    );
    //运行子弹
    this.bullet.run(paint);
  }

  onkeypress(keyCode) {
    switch (keyCode) {
      case this.KEY_UP:
        //如果飞机上面的纵坐标小于0，就设置为0
        if (this.play.pY <= 0) this.play.pY = 0;
        this.play.pY = this.play.pY - 20;
        break;
      case this.KEY_DOWN:
        //如果飞机的纵坐标从下面飞出屏幕，就设置屏幕下方
        if (this.play.pY >= this.sheight - this.play.pheight)
          this.play.pY = this.sheight - this.play.pheight;
        this.play.pY = this.play.pY + 20;
        break;
      case this.KEY_LEFT:
        //如果飞到最左边，就设置在最左边
        if (this.play.pX <= 0) this.play.pX = 0;
        this.play.pX = this.play.pX - 20;
        break;
      case this.KEY_RIGHT:
        //如果飞机飞到最右边，就设置在最右边
        if (this.play.pX >= this.swidth - this.play.pwidth)
          this.play.pX = this.swidth - this.play.pwidth;
        this.play.pX = this.play.pX + 20;
        break;
    }
  }
}
