const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require('./util/database');

const user = require('./models/user');
var cors = require('cors');

const app = express();

const adminRoutes = require('./routes/admin')

app.use(cors());



app.use(bodyParser.json({extended:false})); 

app.use('/user',adminRoutes);
app.use(errorController.get404);

sequelize.sync().then(result =>{
    app.listen(3000);
})
.catch(err =>{
    console.log(err)
})