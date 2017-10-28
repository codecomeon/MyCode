var os=require('os');
var i=0;
var start=os.freemem();

var showMem=function () {
  var mem=process.memoryUsage();
  var format=function (bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + 'MB';
  };
  console.log(`Process ${++i}: heapTotal ${format(mem.heapTotal)} heapUsed ${format(mem.heapUsed)} rss ${format(mem.rss)}`);
  console.log(`共占用 ${format(start-os.freemem())} -----------------------------------------`);
};

var useMem=function () {
  var size= 200*1024*1024;
  var arr=new Buffer(size);
  for(var i=0;i<size;i++){
    arr[i]=0;
  }
  return arr;
};

var total=[];

for(var j = 0; j < 15 ;j++){
  showMem();
  total.push(useMem());
}

showMem();