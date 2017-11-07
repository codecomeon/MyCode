#

## 模板引擎
基本原理：
预设模板，通过正则表达式替换模板数据块，最后组装成需要的代码
```
    //模板
	var str = "好@xinqing@啊，我买了一个@dongxi@，花了@qian@元钱";
	
	//字典，数据
	var dictionary = {
		"xinqing" : "高兴",
		"dongxi" : "vivo手机",
		"qian" : 7000
	}
	
	//数据绑定
	str = str.replace(/\@([a-z]+)\@/g , function(match,$1,index,string){
		return dictionary[$1];
	});
```
### 工业做法
```
<script type=”text/template” id="template">
    //模板html
<script>
...
var template=document.getElementById("template");
//紧接着处理template中的html字符串    
```
