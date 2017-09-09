module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    devtool:"source-map",
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle-[hash].js"//打包后输出文件的文件名
    }
};