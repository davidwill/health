var host = "0.0.0.0", port = "8080", express = require("express");

var app = express();
app.use(app.router);
app.get("/health", function(req, res){
        res.send("Hello!!");
        console.log("health check requested");
});

app.listen(port, host);
console.log("Server running at "+host+":"+port);
