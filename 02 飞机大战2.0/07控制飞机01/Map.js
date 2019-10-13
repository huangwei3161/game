class Map {
  constructor(imgData, width, height) {
    this.width = width;
    this.height = height / 5;
    this.initImage(imgData);
  }
  initImage(imgData) {
    //创建地图cell数组
    this.cell = [];
    for (let i = 0; i < imgData.length; i++) {
      //创建图片对象
      this.cell[i] = new Image();
      //设置图片宽度
      this.cell[i].cellW = this.width;
      this.cell[i].cellH = this.height;
      //设置图片资源
      this.cell[i].src = imgData[i];
      //设置坐标
      this.cell[i].cellX = 0;
      this.cell[i].cellY = this.cell[i].cellH * i;
    }
  }

  /**
   * 运行游戏
   * paint.drawImage(img对象，x,y,width,height)
   */
  run(paint) {
    for (let i = 0; i < this.cell.length; i++) {
      //地图往上面移动
      this.cell[i].cellY--;
      //如果当前的这个图片刚好从上面移出屏幕
      if (this.cell[i].cellY < -this.cell[i].cellH) {
        //把当前的图片移动到最下面
        this.cell[i].cellY = this.cell[i].cellH * (this.cell.length - 1);
      }

      paint.drawImage(
        this.cell[i],
        0,
        this.cell[i].cellY,
        this.cell[i].cellW,
        this.cell[i].cellH
      );
    }
  }
}
