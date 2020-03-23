var trainDetail = require('../models').TrainDetails;

const trainDetails=()=>{

}
  // searching the starting location
trainDetails.fromSort=async(req)=>{
     

  let response;
  var Op=require('sequelize').Op
  var from = req.body.startingLocation;
  console.log(from);
 response= await trainDetail.findAll({
    attributes:['from'],
    where:{
    from:{
      [Op.like]:`%${from}%`
    }
  }
  })
return response;

}
    


// searching the ending location
trainDetails.toSort=async(req)=>{

  let response;
  var Op=require('sequelize').Op
  var to = req.body.endingLocation;
  console.log(to);
 response= await trainDetail.findAll({
    attributes:['to'],
    where:{
    to:{
      [Op.like]:`%${to}%`
    }
  }
  })
return response;
 
}

// searching the train for particular starting and ending location
trainDetails.search=async(req)=>{
            console.log('sasa',req.body)
            console.log('sasa',req.body)
            var from = req.body.startingLocation;
            var to = req.body.endingLocation;
            var offset=req.body.offset;
           let response= await trainDetail.findAll({
            where:{
                from: from,
                to:to,
                },
                order: [
                ['Depart_Time', 'ASC'],
                ['TrainName', 'ASC'],
            ],
            limit: 5,
            offset: (5*offset), 
            
            },)
            return response;
    }
// sorting the train name in ascending order
    trainDetails.nameSort=async(req)=>{
      console.log("nameesort",req.body)
        var from = req.body.startingLocation
        var to = req.body.endingLocation
        let response
        try{
         response=await trainDetail.findAll({
          order: [
            ['TrainName', 'ASC'],
        ],
          where:{
            from: from,
            to:to,
            }
           
        })
      
        }
        catch(e){
          response={status:500,msg:e}
        }
        return response;
   
    }
    // sorting the train name in descending order
    trainDetails.nameRevSort=async(req)=>{
      var from = req.body.startingLocation
      var to = req.body.endingLocation
        let response
        try{
        var a=await trainDetail.findAll({
          order: [
            ['TrainName', 'DESC'],
        ],
          where:{
            from: from,
            to:to,
            }
       
        })
        response=a
      }
      catch(e){
        response={status:500,msg:e,}
      }
        return response;
    
    }
  // sorting the arrival time in ascending order
    trainDetails.arrivalSort=async(req)=>{
      var from = req.body.startingLocation
      var to = req.body.endingLocation
       let response
       try{
       var a=await trainDetail.findAll({
        order: [
          ['Arrival_Time', 'ASC'],
      ],
          where:{
            from: from,
            to:to,
            },     
        })
        response=a
      }
      catch(e){
        response={status:500,msg:e,}
      }
        return response;

    }
// sorting the arrival time in descending order
    trainDetails.arrivalRevSort=async(req)=>{
      var from = req.body.startingLocation
      var to = req.body.endingLocation
       let response
       try{
       var a=await trainDetail.findAll({
        order: [
          ['Arrival_Time', 'DESC'],
      ],
          where:{
            from: from,
            to:to,
            },
        })
        response=a
      }
      catch(e){
        response={status:500,msg:e,}
      }
        return response;
  
    }
   // sorting the depature time in ascending order
    trainDetails.departSort=async(req)=>{
      var from = req.body.startingLocation
      var to = req.body.endingLocation
        let  response
        try{
        var a=await trainDetail.findAll({
          order: [
            ['Depart_Time', 'ASC'],
        ],
          where:{
            from: from,
            to:to,
            },  
        })
        response=a
      }
      catch(e){
        response={status:500,msg:e,}
      }
        return response;
    
    }
      // sorting the depature time in descending order
    trainDetails.departRevSort=async(req)=>{
      var from = req.body.startingLocation
      var to = req.body.endingLocation
       let response 
       try{

       var a= await trainDetail.findAll({
        order: [
          ['Depart_Time', 'DESC'],
      ],
          where:{
            from: from,
            to:to,
            },
        })
        response=a
      }
      catch(e){
        response={status:500,msg:e,}
      }
        return response;
      
    }

      //getting train name
      trainDetails.trainName=async(req)=>{
        
         let response 
         try{
  
         var a= await trainDetail.findAll({
          attributes: ['TrainName'],
            where:{
              id: req.body.trainId
              },
          })
          response=a
        }
        catch(e){
          response={status:500,msg:e,}
        }
          return response;
        
      }



module.exports=trainDetails;