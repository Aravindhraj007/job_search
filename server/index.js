const express = require('express');
const cors = require('cors');
const env = require('dotenv')
const router = require('./src/router/router.js')

const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['POST', 'GET', 'DELETE'],
    credentials: true
}))

app.use(router);
app.listen(3000, ()=>console.log("Server runing"));