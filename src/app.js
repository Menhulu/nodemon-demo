const http =  require('http')

const server = http.createServer((req,res) => {
    res.end('end1112222')
})

server.listen(3000,'127.0.0.1', ()=>{
    console.log('测试nodemon')

})


//1.配置nodemon npm install nodemon
//2.修改启动命令
//3.通过增加 nodemon.json配置指定watch的文件

