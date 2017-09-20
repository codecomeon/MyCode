var oMobile=document.getElementById("mobile");
var oCode=document.getElementById("code");
var oGet=document.getElementById("get");

code.onblur=function(){  
    $.ajax({
        "url":"./php/check.php?code="+code.value,
        "type":"GET",
        "success":function(responseText){
            if(responseText==="y"){
                alert("验证成功");
            }
        },
        "content":"1", 
    });
};

