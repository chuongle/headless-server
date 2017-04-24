'use strict';

let env = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  drupal: {
    url: process.env.DRUPAL_URL,
  }
}

export default env;