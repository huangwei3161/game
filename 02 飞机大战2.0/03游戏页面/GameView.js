class GameView {
  constructor() {
    this.initImage();
  }
  /**
   * 初始化图片资源
   */
  initImage() {
    //创建一个图片
    this.background = new Image();
    //设置图片资源
    this.background.src = "../img/bg__01.png";
  }

  draw(paint) {
    paint.drawImage(this.background, 0, 0);
  }
}
