"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var env = process.env.NODE_ENV || "localhost";
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send("Running V2 on " + env);
});
app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});
//# sourceMappingURL=index.js.map