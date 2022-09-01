const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'mysql',
    user: 'user1',
    password: 'master',
    database: 'api',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;
