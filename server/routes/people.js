var express=require('express');
var router=express.Router();
var People=require('../models/peopleModel');

router.post('/AddPeople',function(req,res){

  var newPeople=new People();

  newPeople.FirstName=req.body.FirstName,
  newPeople.LastName=req.body.LastName,
  newPeople.Email=req.body.Email




newPeople.save().then(function(docs){
  console.log(JSON.stringify(docs,undefined,2));
},function(err) {
  console.log(err);
});
});

module.exports=router;
