// console.log('current Nov Env is',process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./webpack/webpack.prod')({env: 'production'});
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./webpack/webpack.dev')({env: 'development'});
}
