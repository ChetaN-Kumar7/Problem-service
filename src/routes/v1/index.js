const express = require('express');
const problemRouter =  require('./problems.routes');
const v1Router = express.Router();

//if any request come and route continues with /problems, we mapp it to problem Router
v1Router.use('/problems',problemRouter)

module.exports=v1Router;