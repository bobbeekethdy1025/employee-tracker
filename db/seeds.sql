-- Insert values into department table -- 
INSERT INTO department (name)
VALUES 
    ('Engineering'),
    ('Legal'),
    ('Sales'),
    ('Finance');
-- Insert values into role table --
INSERT INTO role (title, salary, department_id)
VALUES 
    ('Senior Developer', 100000, 1),
    ('Software Developer', 140000, 1),
    ('Lawyer', 150000, 2);
    ('Shift Lead', 60000, 3),
    ('Sales Lead', 90000, 3),
    ('Accountant', 120000, 4),
-- Insert values into employee table -- 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Andy','Lau', 1, null),
    ('Jason', 'Chai', 2, null),
    ('Chris', 'Jackson', 3, 1),
    ('Michael', 'Jordan', 4, 2),
    ('Partick', 'Star', 5, 2),
    ('Seokjin', 'Kim', 6, 1);
