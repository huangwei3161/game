class GameView {
  constructor() {
    this.initMap();
  }
  /**
   * 初始化地图
   */
  initMap() {
    //准备图片资源
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
    this.map = new Map(mapData);
  }

  draw(paint) {
    //绘制地图
    this.map.draw(paint);
  }
}
