module.exports = { 
    queryAllEmployees(connection) {
        connection.query('SELECT * FROM employees', (err, rows) => {
            if(err) {
                throw err;
            }
            console.log('Data:\n' + JSON.stringify(rows));
        })
    },

    createEmployee(connection, name, location) {
        const employee = { name, location }
        connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
            if(err) {
                throw err;
            }
            console.log(`Last insert ID:' ${res.insertId}`);
        });
    },

    deleteEmployee(connection, id) {
        connection.query('DELETE FROM employees WHERE id=?', [id], (err, res) => {
            if(err) {
                throw err;
            }
            console.log(`Deleted ${res.affectedRows} row(s)`);
        });
    },

    queryAllEmployeesSp(connection) {
        connection.query('CALL development.emp_get_all()', (err, rows) => {
            if(err) {
                throw err;
            }
            console.log(rows);
        });
    },

    queryGetEmployeeByIdSp(connection, id) {
        connection.query(`CALL development.emp_get_by_id(${id})`, (err, row) => {
            if(err) {
                throw err;
            }
            console.log(row);
        });
    }
}