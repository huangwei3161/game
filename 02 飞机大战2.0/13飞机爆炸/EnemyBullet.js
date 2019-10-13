class EnemyBullet {
  constructor(url, bulletX, bulletY, bulletW, bulletH) {
    //保存相关参数
    this.bulletX = bulletX;
    this.bulletY = bulletY;
    this.bulletW = bulletW;
    this.bulletH = bulletH;
    this.STATE_FLY = 0; //飞行状态
    this.STATE_DEAD = this.STATE_FLY + 1; //死亡状态
    this.state = this.STATE_FLY; //刚开始是  飞行状态
    this.randomSpeed();
    this.initImage(url);
  }

  randomSpeed() {
    //设置子弹的速度
    this.speedY = 5 + Math.floor(Math.random() * 5);
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

    switch (this.state) {
      case this.STATE_FLY:
        //不断的移动飞机的坐标
        this.bulletY = this.bulletY + this.speedY;
        if (this.bulletY > this.bulletH+500) {
          this.state = this.STATE_DEAD;
         
        }
        break;
      case this.STATE_DEAD:
        break;
    }
  }
  draw(paint) {
    switch (this.state) {
      case this.STATE_FLY:
        paint.drawImage(
          this.img,
          this.bulletX,
          this.bulletY,
          this.bulletW,
          this.bulletH
        );
        break;
      case this.STATE_DEAD:
        
        break;
    }
  }
 
  destroy() {
    //销毁图片
    this.img = null;
  }
}
