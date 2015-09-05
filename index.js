/**
 * Created by Ivan on 05.09.2015.
 */
var server = require("./server");
var router = require("./routers/router");

var requestHandlers = require("./requestHandlers/requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

