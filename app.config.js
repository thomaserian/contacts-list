module.exports = {
    apps : [{
      name      : 'contacts-list',
      script    : './index.js',
      env: {
        NODE_ENV: 'development',
        CONFIGURATIONS_PATH:'dev',
        SERVER_PORT: 2000,
        DATABASE_NAME: 'contacts_list',
        DATABASE_USER_NAME: 'root',
        DATABASE_PASSWORD: 'root',
        DATABASE_HOST: '127.0.0.1',
        DATABASE_PORT: 2001,
        JWT_SECRET:"secret"
      }
    }]
  };