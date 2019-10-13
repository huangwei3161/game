class Map {
  constructor(imgData, width, height) {
    //图片的下标
    this.index = 0;
    //图片盒子的数量
    this.number = 6;
    //图片的总数
    this.length = imgData.length;
    //保存屏幕的宽度
    this.width = width;
    //当前每个图片显示的高度
    this.height = height / (this.number - 1);
    //保存图片资源
    this.imgData = imgData;

    //创建图片
    this.initImage(imgData);
  }
  initImage(imgData) {
    //创建地图cell数组
    this.cell = [];
    for (let i = 0; i < this.number; i++) {
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
    //这个index是第一张图片第一次移动到最右边的时候给的图片数据
    this.index = this.number;
  }

  /**
   * 运行游戏
   * paint.drawImage(img对象，x,y,width,height)
   */
  run(paint) {
    this.logic();
    this.draw(paint);
  }

  /**
   * 业务逻辑
   */
  logic() {
    for (let i = 0; i < this.cell.length; i++) {
      //地图往上面移动
      this.cell[i].cellY--;
      //如果当前的这个图片刚好从上面移出屏幕
      if (this.cell[i].cellY < -this.cell[i].cellH) {
        //把当前的图片移动到最下面
        this.cell[i].cellY = this.cell[i].cellH * (this.cell.length - 1);
        //判断当前的图片下标是否越界
        if (this.index >= this.imgData.length) this.index = 0;
        //更改当前的图片资源
        this.cell[i].src = this.imgData[this.index];
        this.index++;
      }
    }
  }
  //绘制图片
  draw(paint) {
    for (let i = 0; i < this.cell.length; i++) {
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
