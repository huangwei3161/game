class Game{
    constructor(width,height){
       
       this.width=width;
       this.height=height;
       this.initcanvas();
       this.initGameview();
       
    }
    initcanvas(){
         let canvas = document.createElement("canvas");
        canvas.width = this.width;
    canvas.height = this.height;
    //设置边界
    canvas.style.borde
        this.paint=canvas.getContext("2d");   
        document.body.append(canvas);
    }
    initGameview(){
        this.gameview=new Gameview(this.width,this.height);
    }
    onclick(x,y){
        this.x=x;
        this.y=y;
        this.gameview.onclick(this.x,this.y);
    }
    start(){
        setInterval(this.run.bind(this),300);
     }  
     run(){
        
        this.gameview.draw(this.paint)
     }  
     

}