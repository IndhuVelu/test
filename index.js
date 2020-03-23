var express = require('express');
var cors=require('cors');
var bodyParser=require('body-parser');

var app = express();


app.use(cors());
app.options('*', cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
const server = require('http').Server(app)
const io=require('socket.io')(server);


server.listen(3050,()=>{
    console.log('server running 3050');  
});


const router=require('./router/signupRoute');
const router1= require('./router/trainRoute');
const router2 = require('./router/reservedRouter');
const router3 = require('./router/groupRoute');

router(app);
router1(app);
router2(app);
router3(app);


const Traindetails=require('./models').TrainDetails
Traindetails.findAll({
    attributes:['id']

})    
.then(res=>{
    res.map(ele=>{
        createSocket(ele.dataValues.id)
    })
})
const tickets=require('./controller/ticketDetails');
const messages=require('./controller/groupDetails');
let sockets=[];
function createSocket(data){
    // console.log("sockeetttttttttttt",data)
    let result=io.of(data).on('connection', (socket)=>{
        console.log('connect to ######################################################################3',data)
        socket.on('prevBook',async(data)=>{
            console.log("preBook",data)
            await tickets.createTicket(data)
            sockets[data.trainId].emit('booking message',{
              signupId:data.signupId,
              seatId: data.seatId,
              trainid:data.trainId
          })
        })
        socket.on('insert to messsage',async(data)=>{
            console.log("insertttttt",data)
            await messages.createMessage(data)
            sockets[data.trainId].emit('send message',{
              sender:data.senderid,
              message: data.message,
              groupId:data.groupId,
              trainId : data.trainId
          })
        })
    })
    sockets[data]=result
}









