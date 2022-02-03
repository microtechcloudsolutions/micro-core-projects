const app = require('../app');
const http = require('http');


const PORTS = [ process.env.PORT ];
const SERVERS = [  ];

PORTS.forEach( PORT => {

    let server = http.createServer(app);

    server.listen(PORT, async _=>{

        console.log(`[ SERVER STARTED ] LISTENING ON PORT ${PORT} `);

    });

    SERVERS.push(server);
});
