const express=require('express');
const router=express.Router();
const formcontroller=require('../controllers/formcontroller')


router.post('/users/add-user',formcontroller.formPost);

router.get('/users',formcontroller.formGet);

router.delete('/users/delete-user/:id',formcontroller.formDelete);

module.exports=router;