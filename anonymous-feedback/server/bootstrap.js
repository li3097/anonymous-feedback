process.env.NODE_ENV = 'production';

require('ignore-styles');

require('@babel/register')({
    ignore: [ /(node_modules)/ ]
});

require('./index');
