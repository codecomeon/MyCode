var customer=require('./customer');

var timestamp=Date.parse(new Date())/1000+'';

customer.register('wph'+timestamp,'123456');

customer.login('wph','123456',function (loginCode) {
    if(loginCode===0){
        console.log('登录成功');
    }else if(loginCode===1){
        console.log('用户名或密码错误');
    }
});