import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
// 'postgres://postgres:8857@localhost:5432/postgres', {
//    host:"localhost",
//    dialect:'mysql',
//    pool:{
//          max:5,
//          min:0,
//          idle:10000
//    },
//    logging: false

'webscrapper', 'root', '', {
    host: "localhost",
    dialect: 'mysql',
    port: '3000',

    operatorsAliases: false
 });

//  const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
//     host: CONFIG.db_host,
//     dialect: CONFIG.db_dialect,
//     port: CONFIG.db_port,
//   //   dialectOptions: {
    
//   //     socketPath: `/cloudsql/${CONFIG.INSTANCE_CONNECTION_NAME}`
//   // },
//     operatorsAliases: false
//   });

sequelize.authenticate().then(() => {
     console.log('Connection has been established successfully.');
}).catch(err => {
     console.error('Unable to connect to the database:', err);
});