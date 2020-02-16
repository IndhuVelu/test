var express =require('express');
var router=express.Router();
var cors=require("cors");

router.use('/add',require('../controller/insert'));
router.use('/upload',require('../controller/songInsert'));
router.use('/signup',require('../controller/signup'));
router.use('/login',require('../controller/login'));



module.exports=router;