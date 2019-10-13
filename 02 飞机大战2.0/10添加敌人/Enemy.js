class Enemy {
  constructor(imgData, width, height) {
    this.swidth = width;
    this.sheight = height;
    this.imgData = imgData;
    this.bulletBox = [];
    this.time = 0;
    this.init();
   
  }
  
   
  //获得当前敌人的宽度
  get width() {
    return this.swidth / 10;
  }
  get height() {
    return this.swidth / 20;
  }

  init() {
    //创建一个图片对象
    this.enemy = new Image();
    //随机当前敌人的类型
    this.index = Math.floor(Math.random() * this.imgData.length);
    //随机产生坐标
    this.enemyX = Math.floor(Math.random() * (this.swidth - this.width));
    this.enemyY = -1 * (20 + Math.floor(Math.random() * 20));
    
    //设置图片资源
    this.enemy.src = this.imgData[this.index];
  }
  initenemyBullet() {
    //设置宽度和高度
    let ebulletW = this.swidth /60;
    let ebulletH = ebulletW * 2;
    //设置坐标
    let ebulletX = this.enemyX + (this.swidth/10 - ebulletW) / 2;
    let ebulletY = this.enemyY +ebulletH;
    let ebullet = new enemyBullet(
      "../img/enemyBullet.png",
      ebulletX,
      ebulletY,
      ebulletW,
      ebulletH
    );

    this.bulletBox.push(ebullet);
  }
  run(paint) {
    this.time++;
    this.logic(paint);
    this.draw(paint);
    
  }

  logic(paint) {
   this.enemyY = this.enemyY +1+ Math.floor(Math.random() * 2);
   
    //每隔一定时间创建一颗子弹
    if (this.time % 30 == 0) {
      this.initenemyBullet();
    }

    //运行子弹
    for (let i = this.bulletBox.length-1; i >0; i--) {
      //如果当前的子弹飞出屏幕
      // if (this.bulletBox[i].bulletY < -this.bulletBox[i].bulletH) {
      //   //当前的元素置空

      //   this.bulletBox[i].destroy();
      //   //删除当前的数组元素
      //   this.bulletBox.splice(i, 1);
      // } else {
        this.bulletBox[i].run(paint);
      
    }
  
    
  }

  draw(paint) {
    paint.drawImage(
      this.enemy,
      this.enemyX,
      this.enemyY,
      this.width,
      this.height
    );
  }
}
