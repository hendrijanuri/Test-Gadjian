const { db } = require('../connections');
const { reverse } = require('../helper/1.reverse')
const { fibonacci } = require('../helper/2.fibonacci')
const { combination } = require('../helper/3.combination')

module.exports = {
    getAllEmployees: (req, res) => {
        let sql = `SELECT * FROM employees`
        db.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(result);
        })
    },
    getEmployeeById: (req, res) => {
        let sql = `SELECT * FROM employees WHERE id = ${req.params.id}`
        db.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(result);
        })
    },

    addEmployee: (req, res) => {
        const {
            name,
            phone_number,
            jobtitle
        } = req.body

        if (name && phone_number && jobtitle) {
            let sql = `INSERT INTO employees SET ?;`

            db.query(sql, req.body, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err)

                }

                sql = `SELECT * FROM employees WHERE id=${results.insertId}` // mereturn hasil yg udah di update
                db.query(sql, (err1, result1) => {
                    if (err1) return res.status(500).send(err1)
                    console.log(result1[0])
                    return res.send({ message: "POST DATA SUCCESS", data: result1[0] })
                })

            })

        } else {
            res.status(500).send('Please send required name, phone number, and job title data ')
        }
    },
    updateEmployeeById: (req, res) => {
        var dataUpdate = req.body
        var sql = `UPDATE employees SET ?
                    WHERE id = ${req.params.id};`
        console.log(dataUpdate);

        db.query(sql, dataUpdate, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err)
            }

            res.status(200).send({ message: "UPDATE DATA SUCCESS", data: results })
        })
    },
    deleteEmployeeById: (req, res) => {
        var sql = `DELETE FROM employees 
                    WHERE id = ${req.params.id};`

        db.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err)
            }
            if (results.affectedRows == 0) {
                res.status(200).send({ message: "DATA NOT EXIST OR HAS BEEN REMOVED", status: results })
            } else {
                res.status(200).send({ message: `DELETE ID=${req.params.id} SUCCESS`, status: results })
            }
        })
    },
    reverseAlgorithm: (req, res) => {
        const { character } = req.body
        if (!character) {
            return res.status(400).send({ message: "CHAR INVALID OR DOES NOT EXIST" })
        }
        res.status(200).send({ result: reverse(character) })
    },
    fibonacciAlgorithm: (req, res) => {
        const { n } = req.body
        if (!n) {
            return res.status(400).send({ message: "NUM INVALID OR DOES NOT EXIST" })
        }
        res.status(200).send({ result: fibonacci(n) })
    },
    combinationAlgorithm: (req, res) => {
        const { n, r } = req.body
        if (!n || !r) {
            return res.status(400).send({ message: "PLEASE INPUT N AND R NUMBER" })
        } else if (n < r) {
            return res.status(400).send({ message: "R NUMBER SHOULD BE SMALLER THAN N NUMBER" })
        }
        res.status(200).send({ result: combination(n, r) })
    }

}