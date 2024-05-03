http=require('http');
url=require('url');
querystring=require('querystring');

function onRequest(req,res){
    var path=url.parse(req.url).pathname;
    var query=url.parse(req.url).query;
    var p=querystring.parse(query)['p'];
    var n=querystring.parse(query)['n'];
    var r=querystring.parse(query)['r'];
    var sum= ((p*n*r)/100);
    console.log(sum);
    res.write("The simple interest:"+sum);
    res.end();
}

http.createServer(onRequest).listen(8099);
console.log("server is started..");