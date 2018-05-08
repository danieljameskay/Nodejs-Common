const mysql = require('mysql');

// In normal cicumstances this would be stored in an env file.
const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: 'development'
});

function connectToDb() {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if(err) {
                reject(err)
            }
            console.log(`Connected to ${connection.config.database} database.`)
            resolve(connection);
        });

        connection.end((err) => {
            console.log('Disconnected.')
        });
    })
}

module.exports = {
    connectToDb
}
