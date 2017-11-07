//1. 轮播图
var oImgBox=document.getElementsByClassName("imgbox")[0];
var left=0;
var delta=-1000;
var index=0;
var oPick=document.getElementsByClassName("pick")[0];
var aLis=oPick.getElementsByTagName("li");

for(var i=0;i<aLis.length;i++){
    aLis[i].index=i;
    aLis[i].onclick=function(){
        for(var j=0;j<aLis.length;j++){
            aLis[j].className="";
        }
        left=this.index*-1000;
        this.className="main";
        oImgBox.style.left=left+"px";
    }
}

setInterval(function(){
    index++;
    left+=index*-1000;
    if(left<=-8000){
        left=0;
    }
    if(index>7){
        index=0;
    }
    for(var j=0;j<aLis.length;j++){
        aLis[j].className="";
    }
    aLis[index].className="main";
    oImgBox.style.left=left+"px";
},2000);



//2. ajax获取数据
$.ajax({
    "url":"http://h6.duchengjiu.top/shop/api_goods.php",
    "type":"GET",
    "success":function(responseText){
        var json=JSON.parse(responseText);
        var html="";
        // setTimeout(function(){
            
            var oContainer=document.getElementsByClassName("container")[0];
            for(var i=0;i<json.data.length;i++){
                var html="<a href=''><img src="+json.data[i].goods_thumb+" alt=''><div class='detail'><p class='price'>"+json.data[i].price+"</p><p class='name'>"+json.data[i].goods_name+"</p><p class='intro'>"+json.data[i].goods_desc+"</p></div></a><div class='lable'><a href=''><img src='' alt=''><span>EON</span></a><div class='heart'><a href=''><span class='num'>1200</span></a><img src='./img/heart.png' alt=''></div></div>";
                var temp=document.createElement("div");
                temp.className="goodbox";
                temp.innerHTML=html;
                oContainer.appendChild(temp);
            }
            //3. 点星星变红，加数字   
            var aHeart=document.getElementsByClassName("heart");
            for(var i=0;i<aHeart.length;i++){
                
                aHeart[i].onclick=function(){
                var oNum=this.getElementsByClassName("num")[0];
                var oImg=this.getElementsByTagName("img")[0];
                    oNum.innerHTML=parseInt(oNum.innerHTML)+1;
                    oImg.src="./img/heart_red.png";
                }
            }
        // },1000);
    }
});

//3. 回顶部
var oBack=document.querySelector(".back");

oBack.onclick=function(){
    // var top=document.body.scrollTop||document.documentElement.scrollTop;
    window.scrollTo(0,0);
};