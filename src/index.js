#!/usr/bin/env node

import http from 'http'
import app from './app'

const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

//create node.js http server and listen on port
const server = http.createServer(app()).listen(server_port, server_ip_address, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('umi mock serve at http://%s:%s', host, port);
});
