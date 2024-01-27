const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(req.url == '/abc'){
        
        res.statusCode = 200;
        res.end('<h1>this is Aakarsh</h1>');
    }

    else{
        
        res.statusCode = 404;
        res.end('<h1>Aakarsh</h1>');
    }

});

server.listen(port, ()=>{

    console.log(`Server is listning on port ${port}`);

});