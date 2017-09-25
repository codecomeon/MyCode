# Angular入门

## 指令
- ng-model 绑定数据
- ng-app 入口
- ng-controller 定义控制器
- ng-repeat 循环
- ng-click 点击
- 自定义指令
- 

## 模块
- 

## 控制器
### mdl.controller('控制器名字',function([参数1,参数2（都是依赖注入的）]){})
- 依赖注入:表现上，就是第二个参数中的回调函数，里面的参数名必须是$scope,$rootScope，这类内置形参叫做服务
- 当你依赖什么，就注入什么

- $scope\$rootScope 保存了所有变量
- $timeout 延时器
- 过滤器(可以视作格式化)
1. currency	格式化数字为货币格式。
2. filter	从数组项中选择一个子集。
3. lowercase	格式化字符串为小写。
4. orderBy	根据某个表达式排列数组。
5. uppercase	格式化字符串为大写。
- $watch监听