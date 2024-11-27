# SENTINEL SETUP:
KEY POINTS:
    1. There should be atleast 3 sentinels available in order to always have a majority for any electioin.

### STEPS:
    1.  change the dir in redis-master.conf and redis-replica.conf to a local directory. (dir "/private/tmp/redis-master")
    2.  set the host and port of redis master in sentinel1.conf sentinel2.conf and sentinel3.conf. default is 127.0.0.1
    3. start with sh ./start-master-and-sentinel.sh
