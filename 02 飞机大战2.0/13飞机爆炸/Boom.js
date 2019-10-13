class Bomb{
    constructor(width,widthX,heightY,bombData,state){
     this.width=width;
     this.widthX=widthX;
     this.heightY=heightY;
     this.bombData=bombData;
     this.state=state;
     this.STATE_INIT = 0; //初始化状态
    this.STATE_FLY = this.STATE_INIT + 1; //飞行状态
    this.STATE_EXPLOSION = this.STATE_FLY + 1; //爆炸状态
    this.STATE_DEAD = this.STATE_EXPLOSION + 1; //死亡状态
     this.initBomb();

    }
    logic(paint) {
        switch(this.state){
          case this.STATE_FLY:break;
          case this.STATE_EXPLOSION:
                this.bombIndex++;
                if(this.bombIndex>=this.bombData.length)
                this.state=this.STATE_DEAD;
                break;
          case  this.STATE_DEAD:
                
                break;
                
                       
        }
    
  }
        
  draw(paint) {
    
     switch(this.state){
    case  this.STATE_EXPLOSION:
        paint.drawImage(
          this.bombs[this.bombIndex],
          this.bombX,
          this.bombY,
          this.bombW,
          this.bombW
        );
        break;
        case  this.STATE_DEAD: 
        break;
        
    }
  }
run(paint){
    this.logic(paint);
    this.draw(paint);
}
    initBomb() {
        //设置炸弹的开始坐标
        this.bombIndex = 0;
    
        
    
        if (this.bombs == null) {
          this.bombs = [];
          for (let i = 0; i <this.bombData.length; i++) {
            //创建图片对象
            let boobImage = new Image();
            //设置图片资源
            boobImage.src = this.bombData[i];
            this.bombs.push(boobImage);
          }
        }
    
        //炸弹的宽度和高度
        this.bombW = Math.floor((this.width / 3) * 4);
        //设置爆炸的坐标
        this.bombX = this.widthX + (this.width - this.bombW) / 2;
        this.bombY = this.heightY + (this.width - this.bombW) / 2;
      }
}