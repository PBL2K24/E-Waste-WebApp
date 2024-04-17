const express =require('express');
const db = require('./models/index');
// const {PORT} =require('./config/serverConfig');

const app =express();


const startServer = () =>{
    app.listen(3005, ()=>{
        console.log(`Server Started at PORT ${PORT}`);

        if(process.env.DB_SYNC){
            db.sequelize({alter :true});
        }
    })
}
startServer();