
const requestLog = {}; // This will hold request logs in memory

const getTime = (seconds)=>{
    return seconds * 1000;
}
export const rateLimitingMiddleware = (req, res, next) => {
    const key = `${req.ip}:${req.headers['user-agent']}`;
    const now = Date.now();
    if (!requestLog[key]) {
        requestLog[key] = [];
    }
    
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < getTime(1));
    console.log(requestLog[key].length)
    if(requestLog[key].length > 5){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }

    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < getTime(5));
    if(requestLog[key].length > 8){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < getTime(10));
    if(requestLog[key].length > 12){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < getTime(20));
    if(requestLog[key].length > 15){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < getTime(30));
    if(requestLog[key].length > 18){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < getTime(60));
    if(requestLog[key].length > 20){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < getTime(1800));
    if(requestLog[key].length > 150){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < getTime(3600));
    if(requestLog[key].length > 300){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    

    // Log the current request timestamp
    requestLog[key].push(now);
    
    next();
};