var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

// Write something out
console.log('todo list RESTful API sever stareted on: ' + port);
