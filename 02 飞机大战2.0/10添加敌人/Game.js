class Game {
  constructor(width, height) {
    //保存当前的游戏尺寸
    this.width = width;
    this.height = height;
    this.initCanvas();
    this.initView();
  }

  /**
   * 画布初始化
   */
  initCanvas() {
    //1,创建画布
    let canvas = document.createElement("canvas");
    //2,设置尺寸
    canvas.width = this.width;
    canvas.height = this.height;
    //3,创建画笔
    this.paint = canvas.getContext("2d");
    //4,获得一给显示的容器
    let app = document.getElementById("app");
    //5,把画布添加到app
    app.append(canvas);
  }
  /**
   * 初始化显示页面
   */
  initView() {
    //创建显示页面
    this.gameView = new GameView(this.width, this.height);
  }
  start() {
    //每200毫秒调用一次
    setInterval(this.run.bind(this), 100);
  }
  run() {
    this.gameView.run(this.paint);
    this.gameView.logic(this.paint);
  }

  onkeypress(keyCode) {
    this.gameView.onkeypress(keyCode);
  }
}
