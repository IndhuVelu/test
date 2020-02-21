const events = require('../models').Event

const event = () => {


}
event.create = async (req, res) => {
    let val1 = `${req.body.date} ${req.body.startTime}`
    let val2 = `${req.body.date} ${req.body.endTime}`
    let response = await events.create({
        Event: req.body.eventname,
        date:req.body.date,
        startTime: val1,
        endTime: val2,
        signupId: req.body.signupId,
        flag: 0,
    })
    return response;
}
event.eventlist = async (req, res) => {
    let response = await events.findAll({
        where: {
            signupId: req.body.signup_name
        }
    })
    return response;

}
event.addeventlist = async (req, res) => {
    let response = await events.update(
        { flag: 1 },
        {
            where:
            {
                id: req.body.eventId
            }
        }
    )
    return response;
}
event.mycalender = async (req, res) => {
    let response = await events.findAll({
        attributes:['id',['Event','title'],['startTime','start'],['endTime','end']],
        where: {
            flag: 1
        }
    })

    return response;
}



module.exports = event;