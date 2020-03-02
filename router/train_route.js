const router1=(app)=>{
    const Train_Details = require('../controller/train_details')

    app.get('/fromsort',async function(req,res){
        console.log(req.query.user)
        let user=req.query.user;
        var result=await Train_Details.fromsort(user);
        res.send(result)
      });

      app.get('/tosort',async function(req,res){
        console.log("eeeeeeeeeee",req.query.user)
        let user=req.query.user;
        var result=await Train_Details.tosort(req.query.user);
        res.send(result)
      });

      app.post('/search',async function(req,res){
        let user=req.body.user;
        console.log(user)
        var result=await Train_Details.search(user);
        res.send(result)
      });

      app.post('/namesort',async function(req,res){
        let user=req.body.user;
        var result=await Train_Details.namesort(user);
        res.send(result)
      });

      app.post('/namerevsort',async function(req,res){
        let user=req.body.user;
        var result=await Train_Details.namerevsort(user);
        res.send(result)
      });

      app.post('/arrivalsort',async function(req,res){
        let user=req.body.user;
        var result=await Train_Details.arrivalsort(user);
        res.send(result)
      });

      app.post('/arrivalrevsort',async function(req,res){
        let user=req.body.user;
        var result=await Train_Details.arrivalrevsort(user);
        res.send(result)
      });
      app.post('/departsort',async function(req,res){
        let user=req.body.user;
        var result=await Train_Details.departsort(user);
        res.send(result)
      });

      app.post('/departrevsort',async function(req,res){
        let user=req.body.user;
        var result=await Train_Details.departrevsort(user);
        res.send(result)
      });


}





module.exports=router1;