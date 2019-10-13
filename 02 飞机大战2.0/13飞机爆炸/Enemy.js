class Enemy {
  constructor(imgData, width, height) {
    //保存当前的屏幕的宽和高
    this.swidth = width;
    this.sheight = height;
    //图片的数据
    this.imgData = imgData;
    //飞机的状态
    this.STATE_INIT = 0; //初始化状态
    this.STATE_FLY = this.STATE_INIT + 1; //飞行状态
    this.STATE_EXPLOSION = this.STATE_FLY + 1; //爆炸状态
    this.STATE_DEAD = this.STATE_EXPLOSION + 1; //死亡状态

    this.initData();
    this.initImage();
    this.initBomb();
  }

  //获得当前敌人的宽度
  get width() {
    return this.swidth / 10;
  }
  get height() {
    return this.swidth / 20;
  }

  initImage() {
    //创建一个图片对象
    this.enemy = new Image();
    //设置图片资源
    this.enemy.src = this.imgData[this.index];
    //参数化弹仓
    this.bulletBox = [];
  }

  initData() {
    //随机当前敌人的类型
    this.index = Math.floor(Math.random() * this.imgData.length);
    //随机产生坐标
    this.enemyX = Math.floor(Math.random() * (this.swidth - this.width));
    this.enemyY = -1 * (50 + Math.floor(Math.random() * this.swidth));
    //飞机状态的初始化
    this.state = this.STATE_INIT;
  }

  run(paint) {
    this.logic(paint);
    this.draw(paint);
    this.bomb.run(paint);
  }

  logic(paint) {
    switch (this.state) {
      case this.STATE_INIT:
        //移动当前的敌机
        this.enemyY = this.enemyY + 2;
        //如果当前的飞机快要出现在当前屏幕
        if (this.enemyY < -this.height) {
          //把当前的初始化状态改为飞行状态
          this.state = this.STATE_FLY;
        }
        break;
      case this.STATE_FLY:
        //移动当前的敌机
        this.enemyY = this.enemyY + 10;
        //当前飞机移动到下面1/3处的时候，就会开火
        if (this.enemyY > this.sheight / 3) {
          //随机产生0-5之间的数据
          let number = Math.floor(Math.random() * 6);
          //如果当前的数据是0就产生一个子弹
          if (number == 0) this.initBullet();
        }
        //当飞机从下面飞出去的时候进入死亡状态
        if (this.enemyY > this.sheight) {
          this.state = this.STATE_DEAD;
        }

        this.bulletBox.forEach(function(bullet) {
          bullet.run(paint);
        });
        break;

      case this.STATE_EXPLOSION:
      //   //炸弹的下标不断往下面移动
      //   this.bombIndex++;
      //   //如果当前的下标越界，就进入死亡状态
      //   if (this.bombIndex >= this.bombs.length) {
        this.initBomb();
          this.state = this.STATE_DEAD;
      //   }

        break;
      case this.STATE_DEAD:
        //优化子弹（子弹飞出屏幕后，让子弹销毁）
        this.bulletBox.forEach(function(bullet) {
          bullet.run(paint);
        });

        //让飞机重生
        this.initData();
        break;
    }
  }

  setExploision() {
    this.state = this.STATE_EXPLOSION;
    this.initBomb();
  }

  initBomb() {
    //设置炸弹的开始坐标
    // this.bombIndex = 0;

    let bombData = [
      "../img/explosion01.png",
      "../img/explosion02.png",
      "../img/explosion03.png",
      "../img/explosion04.png",
      "../img/explosion05.png",
      "../img/explosion06.png"
    ];
    this.bomb=new Bomb(this.width,this.enemyX,this.enemyY,bombData,this.state);
    // if (this.bombs == null) {
    //   this.bombs = [];
    //   for (let i = 0; i < bombData.length; i++) {
    //     //创建图片对象
    //     let boobImage = new Image();
    //     //设置图片资源
    //     boobImage.src = bombData[i];
    //     this.bombs.push(boobImage);
    //   }
    // }

    // //炸弹的宽度和高度
    // this.bombW = Math.floor((this.width / 3) * 4);
    // //设置爆炸的坐标
    // this.bombX = this.enemyX + (this.width - this.bombW) / 2;
    // this.bombY = this.enemyY + (this.height - this.bombW) / 2;
  }

  draw(paint) {
    switch (this.state) {
      case this.STATE_FLY:
        //绘制飞机
        paint.drawImage(
          this.enemy,
          this.enemyX,
          this.enemyY,
          this.width,
          this.height
        );
        break;
      // case this.STATE_EXPLOSION:
      //   this.initBomb();
        
      //   paint.drawImage(
      //     this.bombs[this.bombIndex],
      //     this.bombX,
      //     this.bombY,
      //     this.bombW,
      //     this.bombW
      //   );
        // break;
    }
  }

  /**
   * 创建一颗子弹，放到弹仓里面
   */
  initBullet() {
    //设置宽度和高度
    let bulletW = this.width / 6;
    let bulletH = bulletW ;
    //设置坐标
    let bulletX = this.enemyX + (this.width - bulletW) / 2;
    let bulletY = this.enemyY + this.height;
    let bullet = new EnemyBullet(
      "../img/enemyBullet.png",
      bulletX,
      bulletY,
      bulletW,
      bulletH
    );
    this.bulletBox.push(bullet);
  }
}
