const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID |𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=H6RCFTQR#jERMMDHi8kq7zk_s77F1X0R1qZgN_N1m41LihH3MyL4| "",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
