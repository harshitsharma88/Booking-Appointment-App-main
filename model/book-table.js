const sequelize=require('../database/database');
const Sequelize=require('sequelize');

const product= sequelize.define('bookings',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        unique:true
    },
    user:{
        type:Sequelize.STRING

    }
    ,phone:{
        type:Sequelize.STRING

    },
    email:{
        type:Sequelize.STRING

    }
});


module.exports=product;


