const redis = require('redis');
const key = require('./config/keys')
    
module.exports = {
    createConnection : () => {
        return new Promise((resolve, reject) => {
            const client = redis.createClient({host:key.HOST_REDIS_LOCAL, port:key.HOST_REDIS_PORT, db:0})
            client.on('connect', () => {
                resolve(client)
            })
            client.on('error', () => {
                reject("Error: Failed to connect")
            })
        })
    }
}

