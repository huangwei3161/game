class Npc {
  constructor(width, height) {
    this.KEY_UP = 119;
    this.KEY_DOWN = 115;
    this.KEY_LEFT = 97;
    this.KEY_RIGHT = 100;
    //创建一个时间帧
    this.time = 0;
    //创建子弹时间间隔
    this.bulletTime = 20;
    //创建一给弹仓
    this.bulletBox = [];

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

  initBullet() {
    //设置宽度和高度
    let bulletW = this.play.pwidth / 6;
    let bulletH = bulletW * 2;
    //设置坐标
    let bulletX = this.play.pX + (this.play.pwidth - bulletW) / 2;
    let bulletY = this.play.pY - bulletH;
    let bullet = new Bullet(
      "../img/bullet.png",
      bulletX,
      bulletY,
      bulletW,
      bulletH
    );

    this.bulletBox.push(bullet);
  }
  run(paint) {
    this.time++;
    this.logic(paint);
    this.draw(paint);
  }

  logic(paint) {
    //每隔一定时间创建一颗子弹
    if (this.time % this.bulletTime == 0) {
      this.initBullet();
    }

    //运行子弹
    for (let i = 0; i < this.bulletBox.length; i++) {
      //如果当前的子弹飞出屏幕
      if (this.bulletBox[i].state == this.bulletBox[i].STATE_DEAD) {
        //当前的元素置空

        this.bulletBox[i].destroy();
        //删除当前的数组元素
        this.bulletBox.splice(i, 1);
      } else {
        this.bulletBox[i].run(paint);
      }
    }
  }

  draw(paint) {
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
