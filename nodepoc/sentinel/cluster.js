const Redis = require("ioredis");

const cluster = new Redis.Cluster([
  {
    port: 6379,
    host: "redis-node-0",
    password: "bitnami"
  },  
  {
    port: 6379,
    host: "redis-node-1",
    password: "bitnami"
  },
  {
    port: 6379,
    host: "redis-node-2",
    password: "bitnami"
  },
  {
    port: 6379,
    host: "redis-node-3",
    password: "bitnami"
  },
  {
    port: 6379,
    host: "redis-node-4",
    password: "bitnami"
  },
  {
    port: 6379,
    host: "redis-node-5",
    password: "bitnami"
  }
]);

cluster.set("foo", "bar");
cluster.get("foo", (err, res) => {
  console.log("hello", "foo", err, res);
});