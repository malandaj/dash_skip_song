var dash_button = require('node-dash-button');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function () {
  //Nothing to do
  console.log('Connected');
})

var dash = dash_button("40:b4:cd:e5:43:fd", null, 5000, 'udp');
dash.on("detected", function (dash_id){
  client.publish('nextSongTopic','Something');
});
