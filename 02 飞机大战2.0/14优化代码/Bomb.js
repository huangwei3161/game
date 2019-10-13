class Bomb {
  constructor(bombX, bombY, bombW, bombH) {
    //保存当前的屏幕的宽和高
    this.bombX = bombX;
    this.bombY = bombY;
    this.bombW = bombW;
    this.bombH = bombH;

    this.initData();
    this.initBomb();
  }
  initData() {
    this.STATE_EXPLOSION = 0;
    this.STATE_DEAD = this.STATE_EXPLOSION + 1;
    this.state = this.STATE_EXPLOSION;
    //设置炸弹的开始坐标
    this.bombIndex = 0;

    this.bombData = [
      "../img/explosion01.png",
      "../img/explosion02.png",
      "../img/explosion03.png",
      "../img/explosion04.png",
      "../img/explosion05.png",
      "../img/explosion06.png"
    ];
    // //炸弹的宽度和高度
    // this.bombW = Math.floor((this.width / 3) * 4);
    // //设置爆炸的坐标
    // this.bombX = this.enemyX + (this.width - this.bombW) / 2;
    // this.bombY = this.enemyY + (this.height - this.bombW) / 2;
  }

  initBomb() {
    if (this.bombs == null) {
      this.bombs = [];
      for (let i = 0; i < this.bombData.length; i++) {
        //创建图片对象
        let boobImage = new Image();
        //设置图片资源
        boobImage.src = this.bombData[i];
        this.bombs.push(boobImage);
      }
    }
  }

  run(paint) {
    this.logic(paint);
    this.draw(paint);
  }

  logic(paint) {
    switch (this.state) {
      case this.STATE_EXPLOSION:
        //炸弹的下标不断往下面移动
        this.bombIndex++;
        //如果当前的下标越界，就进入死亡状态
        if (this.bombIndex >= this.bombs.length) {
          this.state = this.STATE_DEAD;
        }
        break;
      case this.STATE_DEAD:
        break;
    }
  }

  draw(paint) {
    switch (this.state) {
      case this.STATE_EXPLOSION:
        paint.drawImage(
          this.bombs[this.bombIndex],
          this.bombX,
          this.bombY,
          this.bombW,
          this.bombH
        );
        break;
    }
  }

  destroy() {
    for (let i = 0; i < this.bombs.length; i++) {
      //把炸弹的每个图片清空
      this.bombs[i] = null;
    }
    //把数组清空
    this.bombs = null;
  }
}
