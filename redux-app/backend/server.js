const express = require('express');
const ConnectDB = require('./database/connection');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path:'config.env'});

const app = express();
const port = process.env.PORT || 3050;
app.use(express.json());
ConnectDB();

app.get('/', (req, res) =>{
	res.send("hello server")
})

app.listen(port, ()=>{
	console.log(`server running...${port}`)
})