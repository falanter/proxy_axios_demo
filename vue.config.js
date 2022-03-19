module.exports={
    devServer:{
        port:8888,
        open:false,
        https:false,
        host:'localhost',
        proxy:{ //代理  
            // '/dev-apis':{
            [process.env.VUE_APP_BASE_API]:{
                // target:'http://localhost:8888/',
                target:process.env.VUE_APP_SERVICE_URL,
                changeOrigin:true,  //开启代理服务进行请求转发
                pathRewrite:{
                    // '^/dev-apis':'' //重写路径
                    ['^'+process.env.VUE_APP_BASE_API]:''
                }
            }
        },
    },
    lintOnSave:false,//关闭格式检查
    productionSourceMap:false,  //打包时不生成.map文件，加快打包构建
}