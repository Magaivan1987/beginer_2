/**
 * Created by Ivan on 04.09.2015.
 */
var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("request ");
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello World");
        res.end();
    }

    http.createServer(onRequest).listen(8888);

    console.log("Server has started.")
}
start()