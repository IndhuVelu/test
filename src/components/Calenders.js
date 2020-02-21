import React, { Component } from 'react'
import moment from 'moment'
import './Calender.css'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);

class Calenders extends Component {
    constructor(props) {
        super(props)
    
     
        
        this.state = {
            event:[{
                id: 14,
              title: 'Today',
              start: new Date(new Date().setHours(new Date().getHours() - 3)),
              end: new Date(new Date().setHours(new Date().getHours() + 3)),
            }, ],
            // mycalender:[{date:new Date(),start:"",end:""}],
        }
    }
    componentDidMount = async()=>{
        fetch('http://localhost:3050/event_calender',{
            method:'post',
            body:JSON.stringify({
                
            }),
            headers:{'Content-Type':'application/json'},
          })
          
          .then(res=> res.json())
          .then(data=>{
              this.setState({
            event:data.map(x=>{
                x.start = new Date(x.start)
                x.end = new Date(x.end)
                return x
             })
          })});
       }
    
    
    render() {

        return (

            <div>
               
                <div style={{ height: '500pt'}}>
                <Calendar
                    events={this.state.event}
                    startAccessor="start"
                    endAccessor="end"
                    defaultDate={moment().toDate()}
                    localizer={localizer}
                />
                </div>
            </div>
        )
    }
}

export default Calenders
