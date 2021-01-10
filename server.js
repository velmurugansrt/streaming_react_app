'use strict';
var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var server = app.listen(8080, function () {
    console.log('Node server is running..');
});



