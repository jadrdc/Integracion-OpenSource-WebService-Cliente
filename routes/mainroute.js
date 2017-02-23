const router = require('express').Router();
const http = require('http');

router.get('/',function(req,res){

res.render('index');

});
router.post('/getInfo',function(req,resp){
  const options = {
    host: 'localhost',
    port: '9898',
    path: '/getTransaction/'+req.body.code,
    method: 'GET'
  };



  http.request(options, function (res) {
      res.setEncoding('utf8');
      res.on('data', function (data) {
          emp = JSON.parse(data);
resp.render('info', {student : emp});
      });

  }).end();
  /*req.body.code*/



});

module.exports=router;
