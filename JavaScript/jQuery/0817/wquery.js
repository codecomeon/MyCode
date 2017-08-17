(function () {
    var wp=function (select) {
        return new wp.fn.init(select);
    };

    wp.fn={
        init:function (select) {
            if(select.substr(0,1)==="#"){
                this[0]=document.getElementById(select.substr(1));
                this.length=1;
                return this;
            }else if(select.substr(0,1)==="."){
                var arr=document.getElementsByClassName(select.substr(1));

                for(var i=0;i<arr.length;i++){
                    this[i]=arr[i];
                }
                this.length=arr.length;
                return this;
            }else {
                var arr=document.getElementsByTagName(select);

                for(var i=0;i<arr.length;i++){
                    this[i]=arr[i];
                }
                this.length=arr.length;
                return this;
            }
        },
        css:function (attr,value) {
            console.log(typeof attr==="string");
            if(typeof attr==="string"){
                for(var i=0;i<this.length;i++){
                    this[i].style[attr]=value;
                }
                return this;
            }else if(typeof attr==="object"){
                for(var i=0;i<this.length;i++){
                    for(var k in attr){
                        this[i].style[k]=attr[k];
                    }
                }
                return this;
            }
        },
        html:function (inStr) {
            for(var i=0;i<this.length;i++){
                this[i].innerHTML=inStr;
            }
            return this;
        },
        eq:function (num) {
            this[0]=this[num];
            for(var i=1;i<this.length;i++){
                delete this[i];
            }
            this.length=1;
            console.log(this);
            return this;
        }
    };

    wp.fn.init.prototype=wp.fn;

    window.w=wp;
})();