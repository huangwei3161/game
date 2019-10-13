class Map {
  constructor(mapData) {
    this.initImage(mapData);
  }

  initImage(mapData) {
    //创建一个图片盒子
    this.map = [];
    for (let i = 0; i < mapData.length; i++) {
      //创建图片对象
      this.map[i] = new Image();
      //设置图片资源
      this.map[i].src = mapData[i];
      //设置高度
      this.map[i].imgH = 100;
      //设置坐标
      this.map[i].imgY = this.map[i].imgH * i;
    }
  }

  draw(paint) {
    //遍历图片盒子里面的每个图片对象
    for (let i = 0; i < this.map.length; i++) {
      this.map[i].imgY--;
      if (this.map[i].imgY < -this.map[i].imgH)
        this.map[i].imgY = (this.map.length - 1) * this.map[i].imgH;
      //依次画出每个图片
      paint.drawImage(this.map[i], 0, this.map[i].imgY);
    }
  }
}
