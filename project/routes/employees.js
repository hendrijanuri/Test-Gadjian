const express = require('express');
const router = express.Router();
const { employeeControllers } = require('../controllers');

// GET ALL EMPLOYEES http://localhost:3000/api/employees
router.get('/employees', employeeControllers.getAllEmployees);

// GET BY ID using params http://localhost:3000/api/employees/:params 
router.get('/employees/:id', employeeControllers.getEmployeeById);

// POST NEW EMPLOYEE http://localhost:3000/api/employees
router.post('/employees', employeeControllers.addEmployee);

// UPDATE BY ID http://localhost:3000/api/employees/:params
router.put('/employees/:id', employeeControllers.updateEmployeeById);

// DELETE BY ID http://localhost:3000/api/employees/:params
router.delete('/employees/:id', employeeControllers.deleteEmployeeById);

// POST REVERSE ALGORITHM http://localhost:3000/api/reverse 
router.post('/reverse', employeeControllers.reverseAlgorithm);

// POST FIBONACCI ALGORITHM http://localhost:3000/api/fibonacci 
router.post('/fibonacci', employeeControllers.fibonacciAlgorithm);

// POST COMBINATION ALGORITHM http://localhost:3000/api/combination 
router.post('/combination', employeeControllers.combinationAlgorithm);

module.exports = router