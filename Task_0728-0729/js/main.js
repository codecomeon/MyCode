window.onload=function(){
    //1.选中换内容
    var oMainTab=document.getElementById("maintab");
    var oBox=document.getElementsByClassName("searchbar")[0].getElementsByClassName("box")[0];
    var aTab=oBox.getElementsByTagName("div");

    oMainTab.onmouseover=oBox.onmouseover=function(){
        oBox.style.display="block";
    }

    oMainTab.onmouseout=oBox.onmouseout=function(){
        oBox.style.display="none";
    }

    for(var i=0;i<aTab.length;i++){
            (function(){
                aTab[i].onmouseover=function(){
                    this.style.backgroundColor="#999";
                    this.style.color="#f40";
                }
                aTab[i].onmouseout=function(){
                    this.style.backgroundColor="#fff";
                    this.style.color="#000";
                }
            })();
            (function () {
                aTab[i].onclick = function () {
                    var temp;
                    temp=this.innerHTML;
                    this.innerHTML=oMainTab.innerHTML;
                    oMainTab.innerHTML=temp;
                    oBox.style.display="none";
                }
            })();   
    }

    //2. 轮播图
    var oBoxBanner=document.getElementsByClassName("box-banner")[0];
    var aLis=oBoxBanner.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var offset=0;
    var deltaX=-2000;
    var index;

    for(var i=0;i<aLis.length;i++){
        aLis[i].index=i;
        aLis[i].onclick=function(){
            for(var j=0;j<aLis.length;j++){
                aLis[j].style.backgroundColor="#999";
            }
            this.style.backgroundColor="#666";
            offset=(this.index-1)*-2000;
            sec_move();
        }
    }
    //默认滚动
    var sec_timer=setInterval(sec_move,3000);   

    //滚动函数
    function sec_move(){
        offset+=deltaX;
        if(offset<=-10000){
            offset=0;
        }
        banner.style.left=offset-320+"px";
    }

    //3.横向tab标签切换+双排滚动条
    var oDesigner=document.getElementsByClassName("designer")[0];
    var oDetail=oDesigner.getElementsByClassName("main")[0];

    var th_aTab=oDesigner.getElementsByClassName("tab");
    var aDetail=oDesigner.getElementsByClassName("content-detail");

    for(var i=0;i<th_aTab.length;i++){
        th_aTab[i].index=i;
        th_aTab[i].onmouseover=function(){
            for(var j=0;j<th_aTab.length;j++){
                th_aTab[j].style.borderLeftColor="transparent";
                th_aTab[j].style.color="#000";
                aDetail[j].style.display="none";
                th_aTab[j].getElementsByClassName("arrow")[0].style.color="#000";
            }
            this.style.borderLeftColor="#dd4f50";
            this.style.color="#dd4f50";
            aDetail[this.index].style.display="block";
            this.getElementsByClassName("arrow")[0].style.color="#dd4f50";
        }
    }

    var oLBtn=oDetail.getElementsByClassName("lbtn")[0];
    var oRBtn=oDetail.getElementsByClassName("rbtn")[0];
    var oScrollTop=oDetail.getElementsByClassName("scroll-top")[0];
    var oScrollBottom=oDetail.getElementsByClassName("scroll-bottom")[0];
    var th_deltaX=-204;
    var th_offset=0;

    oScrollTop.innerHTML+=oScrollTop.innerHTML;
    oScrollBottom.innerHTML+=oScrollBottom.innerHTML;

    oLBtn.onclick=function(){
        th_deltaX=-204;
        scroll();
    }

    oRBtn.onclick=function(){
        th_deltaX=204;
        scroll();
    }

    function scroll(){
        offset+=th_deltaX;
        if(offset<-1020){
            offset=0;
        }else if(offset>0){
            offset=-1020;
        }
            oScrollTop.style.left=offset+"px";
            oScrollBottom.style.left=offset+"px";      
    }

    //4.图片滑动
    var aImg=document.getElementsByClassName("insit")[0]
    .getElementsByClassName("content")[0]
    .getElementsByTagName("div");

    var posi=[0,550,762,974];
    for(var i=0;i<aImg.length;i++){
        aImg[i].index=i;
        aImg[i].onmouseover=function(){
            //每一次都判断，自己和在自己前面的到posi位置上去，在自己后面的到初始位置上去
            for(var j=0;j<aImg.length;j++){
                if(j>this.index){
                    aImg[j].style.left=posi[j]+"px";
                }else if(j<=this.index){
                    aImg[j].style.left=212*j+"px";
                }
            }
        }
    }
    
    //5.动态回答
    var aBox=document.getElementsByClassName("dynamic")[0]
    .getElementsByClassName("box");
    var fif_offset=0;
    for(var i=0;i<aBox.length;i++){
        aBox[i].innerHTML+=aBox[i].innerHTML;
    }

    var timer_0=setInterval(dynamic_move,1000,0);
    var timer_1=setInterval(dynamic_move,1100,1);
    var timer_2=setInterval(dynamic_move,1200,2);

    function dynamic_move(n){
        fif_offset-=101;
        if(fif_offset<-303){
            fif_offset=0;
        }
        aBox[n].style.top=fif_offset+"px";
    }

}