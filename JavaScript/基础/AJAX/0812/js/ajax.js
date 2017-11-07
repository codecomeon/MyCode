var $={
    ajax:function(options){
        var url=options.url;
        if(url===undefined){
            throw new Error("Ajax request url! Please check it!");
            return;
        }
        var type= options.type ||"GET";
        var success=options.success;

        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status>=200&&xhr.status<300||xhr.status===304){
                    success(xhr.responseText);
                }
            }
        };

        xhr.open(type,url,true);
        if(type==="POST"||type==="post"){
            xhr.setRequestHeader("");
            var content=options.content||"";
        }else{
            var content=null;
        }
        xhr.send(content);
    }
};