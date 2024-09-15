
const requestLog = {}; // This will hold request logs in memory

export const rateLimitingMiddleware = (req, res, next) => {
    const key = `${req.ip}:${req.headers['user-agent']}`;
    const now = Date.now();
    if (!requestLog[key]) {
        requestLog[key] = [];
    }
    // Log the current request timestamp
    requestLog[key].push(now);
    
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < 1);
    if(requestLog[key].length > 5){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }

    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < 5);
    if(requestLog[key].length > 8){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < 10);
    if(requestLog[key].length > 12){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < 20);
    if(requestLog[key].length > 15){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < 30);
    if(requestLog[key].length > 18){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < 60);
    if(requestLog[key].length > 20){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) <1800);
    if(requestLog[key].length > 150){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    requestLog[key] = requestLog[key].filter(timestamp => (now - timestamp) < 3600);
    if(requestLog[key].length > 300){
        res.status(429).send('Too many requests. Please try again later.');
        return;
    }
    

    
    
    next();
};