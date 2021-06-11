const route = require('express').Router();
const UserDB = require('../model/users'); 
route.get('/', (res, req) => {
	console.log('get it please')
})

module.exports = route