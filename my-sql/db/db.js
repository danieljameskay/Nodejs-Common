const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'development'
});

function connectToDb() {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if(err) {
                reject(err)
            }
            resolve(connection);
    
            // connection.end((err) => {
            //     console.log('Disconnected')
            // });
        });
    })
}

module.exports = {
    connectToDb
}