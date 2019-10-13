class GameView {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.initMap();
    this.initNpc();
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

  run(paint) {
    //运行地图
    this.map.run(paint);
    //运行飞机
    this.npc.run(paint);
  }

  onkeypress(keyCode) {
    this.npc.onkeypress(keyCode);
  }
}
