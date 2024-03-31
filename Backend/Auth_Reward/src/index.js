const express =require('express');
const {PORT}  = require('./config/serverConfig')
const db =require('./models/index')
const bodyParser =require('body-parser');
const apiRoutes = require('./routes/index')

const app = express();

const startServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`Server started on Port ${PORT}`);

        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true});
        }
    })
}
startServer();