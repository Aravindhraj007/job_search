const express = require('express');
const router = express.Router();
const db = require('../db/data');

router.get('/getRegisteredData', (req, res) => {
    const QUERY = `SELECT * FROM user_data`
    db.query(QUERY, (err, data) => {
        if (err) return res.status(400).json("Error on server")
        else{
            return res.status(200).json(data);
        }
    })
})

router.post('/user_data', (req, res)=>{
    console.log(req.body)
    const values = [
        req.body.values.name,
        req.body.values.email,
        req.body.status,
        req.body.experience,
        req.body.values.phone,
        req.body.item
    ]
    const QUERY = `INSERT INTO user_data (name, email, work_status, experience, mobile, item) VALUES (?)`
    db.query(QUERY, [values], (err, data)=>{
        if (err) return res.status(400).json("Error on server")
        else {
            return res.status(200).json("Successful")
    }
    })
})

router.post('/delete', (req, res) => {
    const QUERY = `DELETE FROM user_data WHERE id = ?`
    db.query(QUERY, req.body.postId, (err, data)=>{
        if (err) return res.status(400).json("Error on server")
        else {
            return res.status(200).json("Successful")
    }
    })
})

router.get('/', (req, res) => {
    res.send("Hello from server");
})

module.exports = router
