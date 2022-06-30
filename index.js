const functions = require('@google-cloud/functions-framework');

exports.helloWorld = (req, res) => {
  res.send('Hello, World');
};

