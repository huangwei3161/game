class Bullet {
  constructor(url, bulletX, bulletY, bulletW, bulletH) {
    //设置子弹的状态值
    this.STATE_FLY = 0; //飞行状态
    this.STATE_DEAD = this.STATE_FLY + 1; //死亡状态
    this.state = this.STATE_FLY; //刚开始是  飞行状态
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
    switch (this.state) {
      case this.STATE_FLY:
        //不断的移动飞机的坐标
        this.bulletY = this.bulletY - this.speedY;
        if (this.bulletY < -this.bulletH) {
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

  collision(enemy) {
    //如果npc发出的子弹在敌机下面，就不会碰撞
    if (this.bulletY > enemy.enemyY + enemy.height) return false;
    //如果子弹在敌机内部就发生碰撞
    if (
      this.bulletX + this.bulletW > enemy.enemyX &&
      this.bulletX < enemy.enemyX + enemy.width
    ) {
      return true;
    } else {
      return false;
    }
  }
}
