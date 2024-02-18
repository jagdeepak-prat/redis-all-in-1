const Redis = require('ioredis');
let conn = new Redis({ port: 6379, host: "redis-master"});

async function x () {
let mode = await conn.get("mode");
    console.log("mode: ", mode);
    // process.exit(0);
}

async function y(){
    await x();
    console.log("x ended");
}
let a = y();


