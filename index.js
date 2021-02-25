'use strict';

let server = requiire('./src/server.js');
let PORT = process.env.PORT || 3000;

server.start(PORT);

