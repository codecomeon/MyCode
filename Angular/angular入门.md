# Angular入门

## 全局API angular工具函数
- copy() 深拷贝
- element() 返回jQuery对象
- equals() 全等
- extend()
- forEach()
- fromJson()\toJson()
- isArray()
- isDate()
- isDefined()
- isElement() 是否是DOM或者jQuery对象
- isFunction()
- isNumber()
- isObject()
- isString()
- isUndefined()
- lowercase()\uppercase()

## 指令
- ng-model 绑定数据
- ng-app 入口
- ng-controller 定义控制器
- ng-repeat 循环
- ng-click 点击
- 自定义指令

### 指令规范化
html---ng-model\ng:model\ng_model\data-ng-model\x-ng-model
js---ngModule

## 模块

## 控制器
### mdl.controller('控制器名字',function([参数1,参数2（都是依赖注入的）]){})
- 依赖注入:表现上，就是第二个参数中的回调函数，里面的参数名必须是$scope,$rootScope，这类内置形参叫做服务
- 当你依赖什么，就注入什么

- $scope\$rootScope 保存了所有变量
- $timeout 延时器
- $watch监听

- 过滤器(可以视作格式化)
1. currency	格式化数字为货币格式。
2. filter	从数组项中选择一个子集。
3. lowercase	格式化字符串为小写。
4. orderBy	根据某个表达式排列数组。
5. uppercase	格式化字符串为大写。
6. json 转成json
7. limitTo 截取
8. date 转成日期
9. number 数字