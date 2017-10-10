const vm = require('vm');
const fs = require('fs');
const path = require('path');
var prt = path.resolve(__dirname,'.','a.js');
function stripBOM(content){
    if(content.charCodeAt(0)===0xFEFF){
        content=content.slice(1);
    }
    return content;
}

var wrapper=stripBOM(fs.readFileSync(prt,'utf8'));
var compiledWrapper=vm.runInThisContext(wrapper,{
    filename:prt,
    lineOffset:0,
    displayErrors:true
});
// compiledWrapper();
console.log(prt);