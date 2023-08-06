class makeImg{
    constructor(){
this.img=null;
this.span=null;
this.img1=null;
this.span1=null;
this.bigImgDiv=null;
this.imgDiv=null;
    }

click(data){
let imgs=document.querySelectorAll(".img1-name");
let mainImg=document.querySelector(".main-img");
let id=document.querySelectorAll(".id");
let mainId=document.querySelector(".id-main");

imgs.forEach((t,index)=>{
    t.addEventListener("click",function(){
        mainImg.src = this.src;
       mainId.textContent=id[index].textContent;
        
    })
})
}
create(){
let container=document.querySelector(".container");
this.bigImgDiv=document.createElement("div");
this.bigImgDiv.className="big-img";
this.img=document.createElement("img");
this.img.className="main-img"
this.span=document.createElement('span');
this.span.className="id-main";
this.smallImgDiv=document.createElement("div");
this.smallImgDiv.className="small-img";

container.appendChild(this.bigImgDiv);
container.appendChild(this.smallImgDiv);

return container;
}


contact(data){
    let y=0;
 data.forEach(x=>{
    this.img1=document.createElement("img");
    this.img1.className="img1-name";
    this.span1=document.createElement("span");
    this.span1.className="id";
    this.imgDiv=document.createElement("div");
    this.imgDiv.className="img-div";
    this.imgDiv.appendChild(this.img1);
    this.imgDiv.appendChild(this.span1)
    this.smallImgDiv.appendChild(this.imgDiv);
    
    this.img1.src=x.img;
    y++;
    this.span1.textContent=y;
})
this.img.src=data[0].img;
this.span.textContent="1";
this.bigImgDiv.appendChild(this.img);
this.bigImgDiv.appendChild(this.span);
}
}
