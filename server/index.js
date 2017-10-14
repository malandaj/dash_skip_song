var dash_button = require('node-dash-button');
var mqtt = require('mqtt');
const DASH = process.env.DASH || '40:b4:cd:e5:43:fd';
const SERVER = process.env.SERVER || 'mqtt://test.mosquitto.org';

var client = mqtt.connect(SERVER);

client.on('connect', function () {
    // Nothing to do
    console.log('Connected');
});

var dash = dash_button(DASH, null, 5000, 'udp');
dash.on("detected", function (dash_id) {
    client.publish('nextSongTopic', 'Something');
});
