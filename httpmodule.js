const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> hey there i am aakarsh</h> <p> lets do it </p>');
    
})

server.listen(port, ()=>{

    console.log(` Server is listning on port ${port}`);

});