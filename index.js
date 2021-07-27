const http = require('http')

http.createServer((req, res) => {
    res.writeHead (200,{
        'Content-Type': 'text/html; charset=utf-8'
    })
        res.end('<h1>Servidor funcionando redondinho, ó!')
    }).listen(3000, 'localhost', () => console.log("O server está on..."))