
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const {
    join
} = require('path')
module.exports = {
    mode:"development",
    // 指定入口，相对路基
    entry: "./src/main.js",
    // 指定入口，相对路径
    
    output: {
        // 输出的目录，相对路径，lib
        path: join(__dirname, "lib"),
        //  输出的文件名 weboack-demo.js
        filename: "webpack-demo.js",
        // 删除上次的文件在打包
        clean: true,

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, 'public/index.html'),
        }),
        //vue
        new VueLoaderPlugin()
    ],
    devServer:{
        open: true,
        port:30000
    },
    
    module: {
        rules: [{
            
                test: /\.css/i,
                use:['style-loader', 'css-loader']
            
        },
        {
            test: /\.less$/i,
            use: [ "style-loader", "css-loader", 'less-loader']
        },
        {
            test: /\.(png|gif|jpeg)/i,
            type:"asset/resource",
            // type:'asset/inline'
            type:"asset",
            parser:{
                dataUrlCondition:{
                    // 字节
                    maxSize:21*1024
                }
            },
            generator:{
            filename:"images/[hash:6][ext]"
            }
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'font-[name].[hash:6][ext]'
            }
        },
        {
            test: /\.js$/i,
            
            use:["babel-loader"]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        
    ]
}
}
    
    
