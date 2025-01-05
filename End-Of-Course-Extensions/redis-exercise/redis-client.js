import Redis from 'ioredis';
import axios from 'axios';

/*
  redis - good performance DB (in-memory), key-value database (like localStorage)
  Good for:
  - To store things that will improve the performance / costs, but "nothing" will happen if they will be removed from redis
  - Lightweight DB, fast, for non big data, easy to operate
  - Storing sessions of users (very fast for login/logout), this is very temporary - session is in the length of the token expiration
  - Pre-built "ready" posts for instagram/facebook and store them (with expiration), to reduce user waiting for posts (performanace)
  Not good for:
  - analytical queries
  - big data
  - data that you want it will stay long

  redis commands:
  - get
  - set
  - setex (set with expiration)
  - del
*/

// Create a Redis instance.
// By default, it will connect to localhost:6379.
// We are going to cover how to specify connection options soon.
const redis = new Redis({
  port: 6379,
  host: 'localhost',
});

console.log("redis-client is connected to redis on localhost:6379");

//const ip = req.ip
const main = async (ip) => {
  await redis.set("mykey1", "10"); // sex without expiry
  const value = await redis.get('mykey1');
  console.log('end to end value: ', value);

  const ipInfoStr = await redis.get(`ip_${ip}_info`);
  let ipInfo;
  if (ipInfoStr) {
    console.log('ip: ' + ip + ', fetching ipInfo from redis');
    ipInfo = JSON.parse(ipInfoStr);
  } else {
    console.log('ip: ' + ip + ', fetching ipInfo from API');
    const res = await axios.get(`https://ipinfo.io/${ip}/json`);
    ipInfo = res.data;
    await redis.setex(`ip_${ip}_info`, 15, JSON.stringify(ipInfo)); // set with expiration of 15s
  }

  console.log('ipInfo:', ipInfo);
};

main('192.168.1.1');

// in their server this is the code...
/*
app.get('/:ip/json', async (req, res) => {
  const { ip } = req.params;
});
*/

// ip enrichment for 98.116.170.117:
/*
{
  'country': 'Israel',
  'city': 'Tel-Aviv',
  'asn': 'Bezeq International',
  'asn_id': 12314, 
}
*/
