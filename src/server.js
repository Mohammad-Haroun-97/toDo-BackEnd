'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');
const authRoutes = require('./auth/routes.js');
// const v1Routes = require('./auth/v1');
const taskRoutes = require('./auth/tasks.routes');
const logger = require('./auth/middleware/logger');

// Prepare the express app
const app = express();

// App Level MW 

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routes
app.use(authRoutes);
app.use('/todo', taskRoutes);


app. get('/',(req,res)=>{
  res.send('To Do jjj BackEnd');
})


// Catchalls
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
