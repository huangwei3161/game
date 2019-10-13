class Game {
  constructor(width, height) {
    //整个游戏的尺寸
    this.width = width;
    this.height = height;

    this.initCanvas();
    this.initImage();
  }
  /**
   * 初始化画板
   */
  initCanvas() {
    //创建画板
    let canvas = document.createElement("canvas");
    //设置画板的尺寸
    canvas.width = this.width;
    canvas.height = this.height;
    //设置边界
    canvas.style.border = "1px solid #6c6c92";
    //创建画笔
    this.paint = canvas.getContext("2d");
    //把画板添加到当前页面
    document.body.append(canvas);
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

  /**
   * 启动游戏
   */
  start() {
    setInterval(this.run.bind(this), 300);
  }

  /**
   * 游戏执行
   */
  run() {
    this.paint.drawImage(this.background, 0, 0);
  }
}
