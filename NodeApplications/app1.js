const http=require('http');
const server=http.createServer(function(req,res){
    if(req.url==="/"){
        res.write('Hello World');
        res.end();
    }
    if(req.url==="/contact"){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
console.log('Listenning port 3000');
