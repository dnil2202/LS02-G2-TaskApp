const Crypto = require('crypto');

module.exports={
    hashPassword:(pass)=>{
        return Crypto.createHmac('sha256','SOSMED123').update(pass).digest('hex');
    },
}