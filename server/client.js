var http = require('http');
var fs = require('fs');



function wrapper(fileName)
{
    return new Promise(function (resolve, reject){
	fs.readFile('../Website.html', opts, function(err, data){
            if (err){ return reject(err); }
	    resolve(data);
	});
})
}
let allPromise = Promise.all([wrapper('../Website.html')]);
.then(content => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(content);

const requestListener = function (req, res) {
    res.end(data)
};

var server = http.createServer(requestListener);
server.listen(3000, () => {
    console.log("Server is Running");
});