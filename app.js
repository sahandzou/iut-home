const request=require('request');
const express = require('express');
const bodyparser=require('body-parser');
const cheerio=require('cheerio');
const fs = require('fs');

const app = express();


const port = 3000;
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.get('/', function (req, res) { res.render('index', {time: null ,message:null});});
//console.log(":)");
app.post('/',function(req,res){
  //console.log(req.body.name);
  if(req.body.destination=="AzadiSqure"){
  //  console.log(":)");
    request('https://www.google.com/maps/dir/32.7195527,51.5347703/32.6197505,51.6640161/@32.6535488,51.5628564,12.75z/data=!4m2!4m1!3e0',
    function(error,response,body){
      //var $=cheerio.load(body);
      var b=body.toString();
      //console.log(body);
      //var a=b.indexOf('26.5');
      //var a=$('div').toArray();
      //var a=$('div').length;
      /*fs.writeFile('1.txt', body, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;});*/
      //console.log(a);
      var test=0;
      for (var i=60;i>30;i--){
        let n=i.toString();

        var m=b.indexOf(n+' min');
        /*if(b.indexOf(n+' min')>1000){console.log(b.indexOf(n+' min'));console.log(n+' min');}
    */    if(m>57500 && m<60000 ){
    //      console.log(b.indexOf(n+' min'));
          if(test==0) test+=1;
          else{
          //console.log(b.indexOf(n+' min'));
    //      console.log(n+' min');
          if(i>40 && i<50 ){var message1="not heavy";}
          else if(i>=50){var message1="heavy";}
          else{var message1="normal";}
          i+=5;
          n=i.toString();
          res.render('index',{ time: n+' min',message: message1.toString()});
          break;
        }
        }

    }
      //var raw=body;
      //console.log(raw.indexOf("<div jstcache="316">"));
    }
  );}
  //res.render('index');


  });
//app.listen(port, () => console.log(`Exmple app listening on port ${port}!`));
app.listen(process.env.PORT, '0.0.0.0');
//AIzaSyBkcLvqSMGr2_OqYHMC9pLQeVSC09Fqlg0
