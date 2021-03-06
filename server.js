/**
 * Created by Ivan on 04.09.2015.
 */
var http = require("http");
var url = require("url");

function start(route,handle) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle,pathname);

        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello world");
        res.end();
    }

    http.createServer(onRequest).listen(8888);

    console.log("Server has started.")
};

exports.start = start;