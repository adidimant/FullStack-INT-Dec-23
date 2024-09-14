const express = require('express');
const { RateLimiterMemory } = require('rate-limiter-flexible');
const Redis = require('ioredis');

const redisClient = new Redis({ enableOfflineQueue: false });

const rateLimiter1 = new RateLimiterMemory({
    storeClient: redisClient,
    points: 5,  // 5 בקשות
    duration: 1  // שניה אחת
});

const rateLimiter2 = new RateLimiterMemory({
    storeClient: redisClient,
    points: 8,  
    duration: 5  
});

const rateLimiter3 = new RateLimiterMemory({
    storeClient: redisClient,
    points: 12,  
    duration: 10  
});

const rateLimiter4 = new RateLimiterMemory({
    storeClient: redisClient,
    points: 15,  
    duration: 20  
});

const rateLimiter5 = new RateLimiterMemory({
    storeClient: redisClient,
    points: 18,  
    duration: 30  
});

const rateLimiter6 = new RateLimiterMemory({
    storeClient: redisClient,
    points: 20,  
    duration: 60  
});

const rateLimiter7 = new RateLimiterMemory({
    storeClient: redisClient,
    points: 150,  
    duration: 1800  
});

const rateLimiter8 = new RateLimiterMemory({
    storeClient: redisClient,
    points: 300,  
    duration: 3800  
});

const reteLimitMiddlewere = async(req, res, next) => {
    const ip = req.ip;
    const userAgent = req.headers["user-agent"]; 
    const combinedKey = `${ip}:${userAgent}`;

    try {
        await rateLimiter1.consume(combinedKey);
        await rateLimiter2.consume(combinedKey);
        await rateLimiter3.consume(combinedKey);
        await rateLimiter4.consume(combinedKey);
        await rateLimiter5.consume(combinedKey);
        await rateLimiter6.consume(combinedKey);
        await rateLimiter7.consume(combinedKey);
        await rateLimiter8.consume(combinedKey);
        next();
    }  catch {
        res.status(429).send("Too many requests!");
    }
}

export default reteLimitMiddlewere;