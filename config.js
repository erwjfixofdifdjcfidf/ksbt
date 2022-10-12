const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
    VERSION: 'v9.0.0',
    
    SESSION: process.env.DIANA_SESSION === undefined ? '' : process.env.DIANA_SESSION
    

};
