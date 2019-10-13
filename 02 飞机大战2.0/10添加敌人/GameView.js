class GameView {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.initMap();
    this.initNpc();
    
    this.enemyBox=[];
    this.time=0;
    
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
    
  //  this. enemy1 = new Enemy(imgData, this.width, this.height);
  //  this. enemy2 = new Enemy(imgData, this.width, this.height);
  //  this. enemy3 = new Enemy(imgData, this.width, this.height);
  //  this. enemy4 = new Enemy(imgData, this.width, this.height);
  //  this. enemy5 = new Enemy(imgData, this.width, this.height);
  //  this. enemy6 = new Enemy(imgData, this.width, this.height);
  //  this. enemy7 = new Enemy(imgData, this.width, this.height);
  //  this. enemy8 = new Enemy(imgData, this.width, this.height);
  this. enemy = new Enemy(imgData, this.width, this.height);
   let enemy = new Enemy(imgData, this.width, this.height);
   if(this.enemyBox.length<=8) 
   this.enemyBox.push(enemy);
    console.log( this.enemyBox)
  }

  run(paint) {
    this.initEnemy();
    //运行地图
    this.map.run(paint);
    //运行飞机
    this.npc.run(paint);
    //运行敌人
    this.enemy.logic(paint);
    this.time++;
    // if(this.time%60==0)
    //  this.enemy.run(paint);
  //  this.enemy1.run(paint)
  //  this.enemy2.run(paint)
  //  this.enemy3.run(paint)
  //  this.enemy4.run(paint)
  //  this.enemy5.run(paint)
  //  this.enemy6.run(paint)
  //  this.enemy7.run(paint)
  //  this.enemy8.run(paint)
   
  }
logic(paint){

for (let i = 0; i < this.enemyBox.length; i++) {
  //如果当前的子弹飞出屏幕
  // if (this.enemyBox[i].bulletY < -this.enemyBox[i].bulletH) {
  //   //当前的元素置空

  //   this.bulletBox[i].destroy();
  //   //删除当前的数组元素
  //   this.bulletBox.splice(i, 1);
  // } else {
    this.enemyBox[i].run(paint);
  

}
}
  onkeypress(keyCode) {
    this.npc.onkeypress(keyCode);
  }
}
