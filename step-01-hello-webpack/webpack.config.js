let path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
