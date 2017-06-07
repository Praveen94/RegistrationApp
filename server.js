var express=require('express');
var bodyParser=require('body-parser');
var logger=require('morgan');
var PeopleRoute=require('./server/routes/people');
var mongoose=require('mongoose');
var path=require('path');

var app=express();

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Registration');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static((path.join(__dirname, '/client'))));

app.use('/api',PeopleRoute);






app.listen(3000,function(){
  console.log('Server running in port 3000');
});
