
var customers = require('./customers'); 


module.exports=function(app)
{

app.get('/crm',function(req,res){
res.render('home.html');
});


app.get('/crm/api/customers',customers.list);


}