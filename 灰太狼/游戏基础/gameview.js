class Gameview {
    constructor(width,height) {
        this.grade=0;
        this.width=width;
        this.height=height;
        this.time=0;
        this.initmap();
        this.initwolf();
        this.initgametime();
    }
    initmap() {
        this.gamemap = new Gamemap()

    }
    addsroce(){
        this.grade+=10;
        
        // this.add=this.wolf.onclickdog;
        // console.log(this.add)
    }
    addsrocex(){
        this.grade-=10;
    }
    initwolf() {
        let wolfdate=[
            [
                "../img/wolf/h0.png",
                "../img/wolf/h1.png",
                "../img/wolf/h2.png",
                "../img/wolf/h3.png",
                "../img/wolf/h4.png",
                "../img/wolf/h5.png",
                "../img/wolf/h6.png",
                "../img/wolf/h7.png",
                "../img/wolf/h8.png",
                "../img/wolf/h9.png"
                    
            ],[
                "../img/wolf/x0.png",
                "../img/wolf/x1.png",
                "../img/wolf/x2.png",
                "../img/wolf/x3.png",
                "../img/wolf/x4.png",
                "../img/wolf/x5.png",
                "../img/wolf/x6.png",
                "../img/wolf/x7.png",
                "../img/wolf/x8.png",
                "../img/wolf/x9.png"
                    
            ]
        ]
        let dwidth=this.width/3;
        let dheight=this.height/5;
        this.wolf = new Wolf(wolfdate,dwidth,dheight);
        this.wolf.Onclick=this.addsroce.bind(this);
        this.wolf.Onclickx=this.addsrocex.bind(this);
        // console.log(this.grade);
    }
    initgametime(){
        this.gametime=new Gametime();
    }
    run(){
        
        if(this.time%6==0)
      this.initwolf();
    }
    onclick(x,y){
        this.x=x;
        this.y=y;
        this.wolf.onclickdog(this.x,this.y);
    }
    draw(paint) {
        
        this.gamemap.draw(paint);
        this.wolf.draw(paint);
        paint.font = "20px Arial";
        paint.fillStyle = "blue";
         paint.fillText(`${this.grade}`, 60, 30);
        this.gametime.draw(paint);
        
        this.run();
        this.time++;
        
    }
   
}