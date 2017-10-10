const webpack=require('webpack');

module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    devtool:"source-map",
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer:{
        contentBase:'./public',
        historyApiFallback:true,
        inline:true
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },{
                        loader:'css-loader',
                        options:{
                            module:true
                        }
                    },
                    {
                        loader:'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('版权所有，翻版必究')
    ]
};