class Onclick{
    constructor(dog,dogx,dogy,width,height){
      
        this.index=6;
     this.dog=dog;
     this.dogx=dogx;
     this.dogy=dogy;
     this.width=width;
     this.height=height;
     this.onclickdog();
    }
    onclickdog(){
        if ( this.wolfs == null) {
            this.wolfs=[];
    for(let i=0;i<this.dog.length;i++){
        this.wolf=new Image();
        this.wolf.src=this.dog[i];
        this.wolfs.push(this.wolf);
     }
    }
}
logic(x,y){
    this.x=x;
    this.y=y;

}
    draw(paint){
        
        if(this.y>=this.dogy&&this.y<=this.dogy+this.height){
            if(this.x>=this.dogx&&this.x<=this.dogx+this.width){
        if(this.index>=9){
            this.index=6;
        }
        paint.drawImage(
            this.wolfs[this.index],
            this.dogx,
            this.dogy,
            this.width,
            this.height);
            this.index++;
           
        }
        this.grade+=10;
    }
    
        }
}