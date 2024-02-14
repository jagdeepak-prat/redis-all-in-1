const redis = require('redis');
async function exec(){
    const client = await redis.createClient({
        url: "redis://:bitnami@redis-node-0:6379"
    })
      .on('error', err => console.log('Redis Client Error', err))
      .connect();
    
    await client.set('key', 'value');
    const value = await client.get('key');
    console.log(value)
    await client.disconnect();
}
exec();
