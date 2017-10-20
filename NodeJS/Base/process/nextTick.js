process.nextTick(function () {
  console.log('第一步');
});

process.nextTick(function () {
  console.log('第二步');
  process.nextTick(function () {
    console.log('下一循环中插入一步？？？');
  });
});

setImmediate(function () {
  console.log('第三步');
  process.nextTick(function () {
    console.log('第五步');
  });
});

setImmediate(function () {
  console.log('第四步');
  process.nextTick(function () {
    console.log('第六步');
  });
});

process.nextTick(function () {
  console.log('插入一步');
});