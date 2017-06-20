/**
 * @author Sven Koelpin
 */

module.exports = {
    logPath: null,
    dbPass: process.env.DB_PASSWORD || '',
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || 28015,
    dbName: process.env.DB_NAME || 'twttr',
    origins: ['*'],
    jwtSecret: 'summit-2017'
};
