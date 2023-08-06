class getData{
    constructor(){
    this.xhr=null;
    this.data=null
    }

get(callback,callback1){
this.xhr=new XMLHttpRequest();
this.xhr.onreadystatechange=function(){
if (this.readyState==4 && this.status==200){
    let res=this.responseText;
    this.data=Array.from(JSON.parse(res));
    callback();
    callback1();
}
}
this.xhr.open("GET","api.json");
this.xhr.send();
}

}