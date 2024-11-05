require('dotenv').config();
// Import the mysql2 module
const mysql = require('mysql2');

console.log(process.env.PASSWORD);

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',      // Database host
    user: 'root',   // Your MySQL username
    password: process.env.PASSWORD, // Your MySQL password
    database: 'sureTurstDb'  // Database name
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE
        )
    `;
    const insertData = `
    INSERT INTO users(id , name , email)
    VALUES(1 , "charan" , "cherryiiit1234@gmail.com")
    `

    connection.query(createTableQuery, (err, results) => {
        if (err) {
            console.error('Error creating users table:', err);
            return;
        }
        console.log('Users table created or already exists in ' , results);
    });
    // connection.query(insertData , (err , results)=> {
    //     if (err) {
    //         console.error('Error creating users table:', err);
    //         return;
    //     }
    //     console.log('Users table Updates in  in ' , connection.database);
    // });
});

// Export the connection to use in other files
module.exports = connection;
