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
        password: 'rootroot',
        database: 'employee_db'
    }
);

function init() {
    welcomeScreen();
    startApp();
}
