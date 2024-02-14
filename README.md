redis-cluster-mode
start:
```
docker compose -f redis-cluster.yml up 
```
connect: 
```
redis-cli -h localhost -p 6379 -a "bitnami"
```


redis-sentinel-mode

start
```
docker compose -f redis-sentinel.yml up
```
connect: 
```
redis-cli -h localhost -p 6379
```