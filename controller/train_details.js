var train_detail = require('../models').Train_Details;

const train_details=()=>{

}

train_details.fromsort=async(from)=>{
  
        var Op=require('sequelize').Op
        // var from = req.body
        // console.log(from);
       let response= await train_detail.findAll({
          attributes:['from'],
          where:{
          from:{
            [Op.like]:`%${from}%`
          }
        }
        })
      return response;
    
}
train_details.tosort=async(to)=>{

        var Op=require('sequelize').Op
        // var to = req.body;
        // console.log("req bodyyyyyyyyy",to);
       let response= await train_detail.findAll({
          attributes:['to'],
          where:{
          to:{
            [Op.like]:`%${to}%`
          }
        }
        })
      return response;
 
}
train_details.search=async(user)=>{
            console.log('sasa',user)
            var from = user.from;
            var to = user.to;
           
           let response= await train_detail.findAll({
            order: [
                ['Depart_Time', 'ASC'],
                ['TrainName', 'ASC'],
            ],
             where:{
                  from: from,
                  to:to,
              }
      
            })
         return response;
    }

    train_details.namesort=async(user)=>{
        var from = user.from
        var to = user.to
        let response= await train_detail.findAll({
          order: [
            ['TrainName', 'ASC'],
        ],
          where:{
            from: from,
            to:to,
            }
           
        })
        return response;
   
    }
    train_details.namerevsort=async(user)=>{
        var from = user.from
        var to = user.to
        let response= await train_detail.findAll({
          order: [
            ['TrainName', 'DESC'],
        ],
          where:{
            from: from,
            to:to,
            }
       
        })
        return response;
    
    }

    train_details.arrivalsort=async(user)=>{
        var from = user.from
        var to = user.to
       let response= await train_detail.findAll({
        order: [
          ['Arrival_Time', 'ASC'],
      ],
          where:{
            from: from,
            to:to,
            },     
        })
        return response;

    }

    train_details.arrivalrevsort=async(user)=>{
        var from = user.from
        var to = user.to
       let response= await train_detail.findAll({
        order: [
          ['Arrival_Time', 'DESC'],
      ],
          where:{
            from: from,
            to:to,
            },
        })
        return response;
  
    }

    train_details.departsort=async(user)=>{
        var from = user.from
        var to = user.to
        let  response= await train_detail.findAll({
          order: [
            ['Depart_Time', 'ASC'],
        ],
          where:{
            from: from,
            to:to,
            },  
        })
        return response;
    
    }
    train_details.departrevsort=async(user)=>{
        var from = user.from
        var to = user.to
       let response = await train_detail.findAll({
        order: [
          ['Depart_Time', 'DESC'],
      ],
          where:{
            from: from,
            to:to,
            },
        })
        return response;
      
    }



module.exports=train_details;