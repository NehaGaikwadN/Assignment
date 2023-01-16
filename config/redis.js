const util = require('util')
const redis = require('redis')

const config = require('../config.index')

let client ;

module.exports = {
    getClient : ()=>{
        if(!client){
            console.log("REinitializing redis")
            redisConfig = {
                host: config.redisHost,
                port: config.redisPort
            }
            
            client = redis.createClient(redisConfig)
            client.hGet = util.promisify(client.hget)
        }
        return client;
    }
}