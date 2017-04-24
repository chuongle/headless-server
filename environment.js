'use strict';

let env = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  drupal: {
    url: process.env.DRUPAL_URL || 'http://dev-d8-headless.pantheonsite.io/',
  }
}

export default env;