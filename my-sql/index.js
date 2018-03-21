require('dotenv').config();
//const { queryAllEmployees, createEmployee, deleteEmployee, queryAllEmployeesSp, queryGetEmployeeByIdSp } = require('./queries');
const db = require('./db/db');
const queries = require('./queries');

const connection = db.connectToDb().then((con) => {
    queries.queryAllEmployees(con);
});
