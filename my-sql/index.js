require('dotenv').config();
const mysql = require('mysql');
const { queryAllEmployees, createEmployee, deleteEmployee, queryAllEmployeesSp, queryGetEmployeeByIdSp } = require('./queries');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'development'
});

connection.connect((err) => {
    if(err) {
        throw err
    }
    console.log('Connected');
    queryGetEmployeeByIdSp(connection, 2);
    connection.end((err) => {
        console.log('Disconnected')
    })
});

