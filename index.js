console.log('Proxy starting...');
var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();

app.get('/index1.jpg', new MjpegProxy('http://192.168.20.111:81/stream').proxyRequest);
app.use(express.static('public'));
app.listen(8080);
