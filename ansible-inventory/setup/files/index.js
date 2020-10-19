var http = require("../../../.circleci/ansible/roles/setup/files/node_modules/http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Hello world!");
});
server.listen(3000);
