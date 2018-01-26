function queryAllEmployees(connection) {
    connection.query('SELECT * FROM employees', (err, rows) => {
        if(err) {
            throw err;
        }
        console.log(`Data:\n ${rows}`);
    })
}

function createEmployee(connection, name, location) {
    const employee = { name, location }
    connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
        if(err) {
            throw err;
        }
        console.log(`Last insert ID:' ${res.insertId}`);
    });
}

function deleteEmployee(connection, id) {
    connection.query('DELETE FROM employees WHERE id=?', [id], (err, res) => {
        if(err) {
            throw err;
        }
        console.log(`Deleted ${res.affectedRows} row(s)`);
    });
}

function queryAllEmployeesSp(connection) {
    connection.query('CALL development.emp_get_all()', (err, rows) => {
        if(err) {
            throw err;
        }
        console.log(rows);
    });
}

function queryGetEmployeeByIdSp(connection, id) {
    connection.query(`CALL development.emp_get_by_id(${id})`, (err, row) => {
        if(err) {
            throw err;
        }
        console.log(row);
    });
}

module.exports = { 
    queryAllEmployees, 
    createEmployee, 
    deleteEmployee, 
    queryAllEmployeesSp,
    queryGetEmployeeByIdSp 
}