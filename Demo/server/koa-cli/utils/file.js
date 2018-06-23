/**
 * 文件操作工具类
 * @author: haoran.shu
 * @datetime: 2018/1/12 17:10
 */
const path = require('path');
const fs = require('fs');

function interatorMkdir(pathname, basepath, callback) {
  fs.access(path.resolve(basepath, pathname), (err) => {
    if(!err) { // 文件存在
      callback();
    } else {
      interatorMkdir(path.dirname(pathname), basepath, () => {
        fs.mkdir(path.resolve(basepath, pathname), callback);
      });
    }
  });
}

/**
 * 创建多级目录
 * @param pathname  需要创建的目录(文件夹)路径
 * @param basePath  基于某个路径下创建文件夹, 如果不传,则根路径为当前工程路径从上往下, 逐层创建文件夹
 */
let mkdirs = function(pathname, basePath) {
  // 递归创建文件夹
  interatorMkdir(pathname, basePath || '', () => {});
};

/**
 * 文件遍历器, 遍历文件夹下的所有文件(递归)
 * @param filepath  需要遍历的文件目录
 * @param callback  回调函数, 回调函数的参数为文件路径
 */
function fileIterator(filepath, callback) {
  fs.stat(filepath, (err, stat) => {
    if(err) {
      console.error(err);
    } else {
      if(stat.isFile()) { // 是文件
        callback(filepath);
      } else {
        // 读取目录下的所有文件
        fs.readdir(filepath, (err, files) => {
          if(err) {
            console.error(err);
          } else {
            files.forEach(function(file) {
              fileIterator(path.join(filepath, file), callback);
            });
          }
        });
      }
    }
  });
}

module.exports = {
  mkdirs,
  fileIterator
};