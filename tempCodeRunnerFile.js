 fs.readFile('htmLogin.html',function(err,data){
            res.writeHead(200,{"content-type":'text/html'} )
            res.write(data);
            res.end();})