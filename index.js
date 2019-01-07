"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send("Running TypeScript on Google App Engine");
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});
//# sourceMappingURL=index.js.map