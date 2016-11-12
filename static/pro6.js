var host = "localhost";
var port = 60675;

var password = "password";

var WebSocket = require('ws');
// ws = new WebSocket('ws://' + host + ':' + port + '/stagedisplay');
ws = new WebSocket('ws://' + host + ':' + port + '/livestream');

ws.on('open', function open() {
	// ws.send(`{
	// 	"pwd":"password",
	// 	"ptl":610,
	// 	"acn":"ath"
	// }`);
	// // ws.send(`{
	// // 	"acn":"asl"
	// // }`)
});

ws.on('message', function(data, flags) {
	data = JSON.parse(data);
	// console.log(data['RVLiveStream_frameData']);
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var img = new Image();

	img.onload = function() {
	  context.drawImage(this, 0, 0, canvas.width, canvas.height);
	}

	img.src = 'data:image/png;base64,' + data['RVLiveStream_frameData'];
	// console.log(data);
	// console.log(flags);
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
});

