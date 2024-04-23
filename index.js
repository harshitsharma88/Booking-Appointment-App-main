const express=require('express');
const app=express();
const sequelize=require('./model/book-table');
const bookingrouter=require('./routes/bookingrouter');
const cors=require('cors');
const bodyparser=require('body-parser')



app.use(cors());
// app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/',bookingrouter);

sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("Server Started");
    })
})