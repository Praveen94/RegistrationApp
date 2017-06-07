var mongoose=require('mongoose');
var PeopleSchema=mongoose.Schema({

FirstName:String,
LastName:String,
Email:String

});

module.exports=mongoose.model('people',PeopleSchema);
