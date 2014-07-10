var express=require('express');
var app=express();
var path = require('path');
var expressWinston = require('express-winston');
var winston = require('winston'); // for transports.Console

   

    // express-winston logger makes sense BEFORE the router.
    app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ]
    }));

	require('./router/main')(app);

    // express-winston errorLogger makes sense AFTER the router.
    app.use(expressWinston.errorLogger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ]
    }));

    // Optionally you can include your custom error handler after the logging.
   







app.set('views',__dirname + '/views');

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));



var server=app.listen(3000,function(){
console.log("Express is running on port 3000");
});