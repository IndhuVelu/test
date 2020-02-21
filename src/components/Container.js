import React, { Component } from 'react'
import "./Container.css"
import moment, { relativeTimeThreshold } from 'moment'
import Calendars from './Calenders'
class Container extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:'',
             add:[],
             status:false,
        }
    }
    AddCalender=(e)=> {
        // this.setState({status:!this.state.status})
       this.setState({
           id:this.props.eventId,
           status:!this.state.status
       },()=>{
        fetch('http://localhost:3050/add_event_to_calender',{
        method:'post',
        body:JSON.stringify({
          eventId:this.state.id,
        }),
        headers:{'Content-Type':'application/json'},
      })
      
      .then(res=> res.json())
      .then(data=>this.setState({
          add:data
      }));
       })
       
      }
     
    render() {
        return (
       

            <div className="container_design">
            <div> {this.props.eventname}</div>
            <div> Event Date : {this.props.date}</div>
             <div> Event Starting Time :  {this.props.startTime}</div>
             <div> Event Ending Time :  {this.props.endTime}</div>
             <div><button className="button" onClick={e => this.AddCalender(e) }>Add To Calender</button></div>
             <div>{this.state.status? <p>Event  Added</p> : <p></p>}</div>
            </div>
        )
    }
}

export default Container
