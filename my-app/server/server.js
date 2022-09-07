const express = require('express');
app = express();

fs = require('fs'),
    http = require('http'),
    PORT = 3000;

const cors = require('cors');

app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../dist/my-app'));

const httpServer = http.Server(app);

httpServer.listen(PORT, function() {
    console.log(`http Server listening on port: ${PORT}`);
});

app.post('/login', require('./routes/postLogin'));
app.post('/loginafter', require('./routes/postLoginAfter'));