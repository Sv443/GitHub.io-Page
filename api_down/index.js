const http = require("http");
const reason = "My server broke and I need to reset it completely. Sorry :/";


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', allowedMethods.join(","));
    res.setHeader('Access-Control-Allow-Headers', '*');


    res.writeHead(503, {"Content-Type": "text/plain; utf-8"});
    res.end("This API is down at the moment.\nReason: " + reason);

}).listen(80, null, null, err => {
    console.log("HTTP listener: " + err);
});
