class Wolf{
    constructor(wolfdate,width,height){
        
        this.time=0;
        this.index=0;
        this.width=width;
        this.height=height;
     this.wolfdate=wolfdate;
     this.romd();
     this.initwolf();
     this.initonclick();
     
    }
    romd(){
        //随机生成一种狗
        this.dog=this.wolfdate[Math.floor(Math.random()*2)];
        // console.log(this.dog)
    }
    initwolf(){
        if ( this.wolfs == null) {
        this.wolfs=[];
        for(let i=0;i<this.dog.length;i++){
            this.wolf=new Image();
            this.wolf.src=this.dog[i];
            this.wolfs.push(this.wolf);
        }
    }
        this.dogx=0;
        this.dogy=0;
        switch(Math.floor(Math.random()*9)){
            case 0:
                    this.dogx=100;
                    this.dogy=115;
                break;
            case 1:
                    this.dogx=22;
                  this.dogy=160;
                    break;
            case 2:
                   this.dogx=192;
                 this.dogy=140;
                    break;
            case 3:
                    this.dogx=100;
                    this.dogy=195;
                    break;
            case 4:
                    this.dogx=115;
                    this.dogy=275;
                    break;
            case 5:
                    this.dogx=22;
                    this.dogy=220;
                    break;
            case 6:
                    this.dogx=200;
                    this.dogy=210;
                    break;
            case 7:
                    this.dogx=33;
                    this.dogy=295;
                    break;
            case 8:
                    this.dogx=203;
                    this.dogy=295;
                    break;
        }
     
    }
    onclickdog(x,y){
      
        this.x=x;
        this.y=y;
        if(this.y>this.dogy&&this.y<(this.dogy+this.height)){
            if(this.x>this.dogx&&this.x<(this.dogx+this.width)){
               this.index=-5;
               if(this.dog==this.wolfdate[0]){
                this.Onclick();
            }else if(this.dog==this.wolfdate[1]){
              this.Onclickx();
            }
               
            }
        }
        this.onclick.logic(this.x,this.y);
       
        
    }
    
    initonclick(){
        

     this.onclick=new Onclick(this.dog,this.dogx,this.dogy,this.width,this.height);
    
        
    }
    
   
    
      
    draw(paint){
        
        this.onclick.draw(paint);
        if(this.index>=0){
        if(this.index>5){
            this.index=0;
        }
        paint.drawImage(
            this.wolfs[this.index],
            this.dogx,
            this.dogy,
            this.width,
            this.height);
        }
        this.index++;
      
       
    }
    
}