class GameView {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.initMap();
    this.initNpc();
    this.initEnemy();
  }

  initMap() {
    let mapData = [
      "../img/bg__01.png",
      "../img/bg__02.png",
      "../img/bg__03.png",
      "../img/bg__04.png",
      "../img/bg__05.png",
      "../img/bg__06.png",
      "../img/bg__07.png",
      "../img/bg__08.png"
    ];
    this.map = new Map(mapData, this.width, this.height);
  }
  initNpc() {
    this.npc = new Npc(this.width, this.height);
  }

  initEnemy() {
    let imgData = ["../img/enemy1.png", "../img/enemy2.png"];
    this.enemyNumber = 10;
    //创建数组
    this.enemyBox = [];
    //遍历创建敌人
    for (let i = 0; i < this.enemyNumber; i++) {
      //创建敌人
      let enemy = new Enemy(imgData, this.width, this.height);
      //把创建的敌人放到数组
      this.enemyBox.push(enemy);
    }
  }

  run(paint) {
    //运行地图
    this.map.run(paint);
    //运行飞机
    this.npc.run(paint);
    //运行敌人
    this.enemyBox.forEach(function(enemy) {
      enemy.run(paint);
    });
    let that = this;
    //判断飞机发出的子弹是否和运行的敌人碰撞
    this.npc.bulletBox.forEach(function(bullet) {
      //获得npc发射出去的每颗子弹
      //让每颗子弹和敌机进行碰撞
      that.enemyBox.forEach(function(enemy) {
        if (bullet.collision(enemy)) {
          //如果子弹撞到敌机，就设置子弹为死亡状态
          bullet.state = bullet.STATE_DEAD;
          //设置敌机为爆炸状态
          enemy.setExploision();
        }
      });
    });
  }

  onkeypress(keyCode) {
    this.npc.onkeypress(keyCode);
  }
}
