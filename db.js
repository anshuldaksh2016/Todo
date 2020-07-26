const Pool = require('pg').Pool;

//  pools will use environment variables
// for connection information
const pool = new Pool({
    user:'postgres',
    password: "1234",
    host: 'localhost',
    port: 5432 ,
    database:'todo'

});

module.exports = pool;