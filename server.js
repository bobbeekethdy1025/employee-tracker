// This code was made with the help of my peers. Also had the reference of screenshots provided by the curriculum
const express = require('express');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employee_db'
    }
);

function init() {
    welcomeScreen();
    startApp();
}

const startApp = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'Browse the catalog.',
                choices: ['View all departments', 'View all employees', 'View all roles', 'Add a department', 'Add an employee', 'Add an role', 'Update an employee role', 'Exit']
            }
        ]).then((answers) => {
            switch(answers.option) {
                case 'View all departments':
                    viewDeparts();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'Add a department':
                    addDepart();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Update an employee role':
                    updateEmployee();
                    break;
                case 'Exit':
                    exitPrompt();
                    break;
            }
        });
};
function viewDeparts() {
    db.query('SELECT * FROM department', function (err, res) {
        if(err) throw err;
        console.table('All Departments:', res);
        startApp();
    });
};
function viewRoles() {
    db.query('SELECT role.id, role.title, department.name, role.salary FROM role JOIN department ON role.department_id = department.id', function (err, res) {
        if(err) throw err;
        console.table('All Roles:', res);
        startApp();
    });
};
