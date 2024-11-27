redis-server ./redis-master.conf &
redis-server ./redis-replica.conf &
redis-server ./sentinel1.conf --sentinel &
redis-server ./sentinel2.conf --sentinel & 
redis-server ./sentinel3.conf --sentinel & 