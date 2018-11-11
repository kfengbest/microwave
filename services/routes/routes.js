var faker = require("faker");
//var query = require('url').parse(req.url,true).query;


var mvDatas = ([{
    id: '1',
  },
  {
      id: '2',
  },
  {
      id: '3',
  }
  ]);

var appRouter = function (app) {

  app.get("/", function (req, res) {
    res.status(200).send({ message: 'Microwaves API' });
  });

  app.get("/user", function (req, res) {
    var data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
    res.status(200).send(data);
  });

 app.get("/users/:num", function (req, res) {
   var users = [];
   var num = req.params.num;

   if (isFinite(num) && num  > 0 ) {
     for (i = 0; i <= num-1; i++) {
       users.push({
           firstName: faker.name.firstName(),
           lastName: faker.name.lastName(),
           username: faker.internet.userName(),
           email: faker.internet.email()
        });
     }

     res.status(200).send(users);
    
   } else {
     res.status(400).send({ message: 'invalid number supplied' });
   }

 });

 app.get("/microwaves", function (req, res) {

    res.status(200).send(mvDatas);
  });

  app.get("/microwaves/:num/start", function (req, res) {
    var query = require('url').parse(req.url,true).query;
    
    var num = req.params.num;
    var time = query.t;

    console.log(time);
    res.status(200).send("ok");
  });

  app.get("/microwaves/:num/status", function (req, res) {
    var query = require('url').parse(req.url,true).query;
    var num = req.params.num;
    
    var status = {
        id : num,
        timeSetting : "30",
        remaining : "10"
    }

    res.status(200).send(status);
  });  

}




module.exports = appRouter;