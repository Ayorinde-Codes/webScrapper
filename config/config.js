require('dotenv').config();

let CONFIG = {} //Make this global to use all over the application

CONFIG.port = process.env.PORT || '3000';

CONFIG.db_host = process.env.DB_HOST || '127.0.0.1';

export default CONFIG;
