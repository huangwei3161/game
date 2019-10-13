class EnemyBullet {
  constructor(url, bulletX, bulletY, bulletW, bulletH) {
    //保存相关参数
    this.bulletX = bulletX;
    this.bulletY = bulletY;
    this.bulletW = bulletW;
    this.bulletH = bulletH;
    this.randomSpeed();
    this.initImage(url);
  }

  randomSpeed() {
    //设置子弹的速度
    this.speedY = 8 + Math.floor(Math.random() * 5);
  }

  initImage(url) {
    //创建图片
    this.img = new Image();
    //设置图片资源
    this.img.src = url;
  }

  run(paint) {
    this.logic();
    this.draw(paint);
  }

  logic() {
    //不断的移动子弹的坐标
    this.bulletY = this.bulletY + this.speedY;
  }

  draw(paint) {
    paint.drawImage(
      this.img,
      this.bulletX,
      this.bulletY,
      this.bulletW,
      this.bulletH
    );
  }
  destroy() {
    //销毁图片
    this.img = null;
  }
}
