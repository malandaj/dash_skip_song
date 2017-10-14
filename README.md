# Dash Skip Song

NodeJS server that waits for a press event from a Dash Button and then forwards the event over mqtt.

Under the **android** directory there's a sample Android application that listens for the mqtt event and then generates a key event to skip the current song.

# Server

To run the server you can do

    node index.js

or

    npm start


There are 2 environment variables that are optional. The server address and the dash button's mac address, you can provide those with DASH and SERVER like this:

    DASH='11:22:33:44:55:66' SERVER='mqtt://test.mosquitto.org' npm start
