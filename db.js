const Pool = require('pg').Pool;

//  pools will use environment variables
// for connection information
// const pool = new Pool({
//     user:'postgres',
//     password: "1234",
//     host: 'localhost',
//     port: 5432 ,
//     database:'todo'

// });
const pool = new Pool({
    user:'hxnirnnwnacalz',
    password: "3b77bfd184348838cd5d0d6ac399cbfc9cad5175d0401fc8aa73c0617c4a3da9",
    host: 'ec2-18-235-109-97.compute-1.amazonaws.com',
    port: 5432 ,
    database:'d1d3d8ue4obe55'

});


module.exports = pool;