window.onload=function(){

    //1.轮播图
    var oBanner=document.getElementById("banner");
    var oImg=oBanner.getElementsByTagName("img")[0];
    var oLarrow=oBanner.getElementsByClassName("larrow")[0];
    var oRarrow=oBanner.getElementsByClassName("rarrow")[0];

    var imgsrc=["./pic/goods1.png","./pic/goods2.png","./pic/goods3.png","./pic/goods4.png","./pic/goods2.png"];
    var index=0;
    oLarrow.onclick=function(){
        index--;
        if(index<0){
            index=imgsrc.length-1;
        }
        oImg.src=imgsrc[index];
    }
    oRarrow.onclick=function(){
        index++;
        if(index>imgsrc.length-1){
            index=0;
        }
        oImg.src=imgsrc[index];
    }

    var oUl=oBanner.getElementsByTagName("li");
    for(var i=0;i<oUl.length;i++){
        // 这里不知道为什么一定要IIFE才能起效果
        (function(){
            oUl[i].onmouseover=function(){
            for(var j=0;j<oUl.length;j++){
                oUl[j].style.backgroundColor="#b7b7b7";
            }
            this.style.backgroundColor="#f40";
        }
        })();
        

        (function(temp){
            oUl[temp].onclick=function(){
                for(var j=0;j<oUl.length;j++){
                    index=temp;
                    oImg.src=imgsrc[index];
                }
            }
        })(i);
    }

    // 2.headernav二级菜单,点击li会改变其样式
    var oRUl=document.getElementsByClassName("rightul")[0];
    var oLis=document.getElementsByTagName("li");
    for(var i=0;i<oLis.length;i++){
        oLis[i].onclick=function(){
            this.style.border="1px solid #e5e5e5";
            this.style.backgroundColor="#fff";
            this.getElementsByTagName("div")[0].style.display="block";
        }
        oLis[i].onmouseleave=function(){
            this.style.border="1px solid #f5f5f5";
            this.style.backgroundColor="#f5f5f5";
            this.getElementsByTagName("div")[0].style.display="none";
        }
    }
}