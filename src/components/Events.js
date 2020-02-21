import React, { Component } from 'react'
import './album.css'
import './event.css'
import moment from 'moment'
import Container from '../components/Container'
class Events extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             eventname:'',
             date:'',
             dates:'',
             startTime:'',
             endTime:'',
             events:[],
             authdata:[],
             eventlist:[],
        }
    }
    show=()=>{
        fetch('http://localhost:3050/event_list',{
            method:'post',
            body:JSON.stringify({
                signup_name:this.state.authdata.user.name,
            }),
            headers:{'Content-Type':'application/json'},
          })
          
          .then(res=> res.json())
          .then(data=>this.setState({
              eventlist:data
          }))
    }
    componentDidMount = async()=>{
        if(localStorage.getItem('token')){
            await fetch('http://localhost:3050/heads',{
            method:'post',
            body:JSON.stringify({
             token:JSON.parse( localStorage.getItem('token')).token,
            }), headers:{'Content-Type':'application/json'},
          })
          .then(res=> res.json())
          .then(data=>this.setState({
              authdata:data
          }))
          .catch(()=>{
            console.log('error')
        })
        this.show();
        
       }
    }
    handleName=(e)=> {
        this.setState({ eventname: e.target.value});
      }
    handleDate=(e)=> {
        this.setState({ date: moment(e.target.value).format("MMM DD YYYY")});
        this.setState({dates:e.target.value})
      }
    handleStartTime=(e)=> {
        this.setState({ startTime: e.target.value});
      }
    handleEndTime=(e)=> {
        this.setState({ endTime: e.target.value});
      }
    handleSave=(e)=> {
        if(this.state.eventname === '' && this.state.dates==='' &&this.state.startTime ==='',this.state.endTime===''){
            alert("please fill the details")
        }
        else{
      fetch('http://localhost:3050/add_event',{
        method:'post',
        body:JSON.stringify({
          eventname:this.state.eventname,
          date:this.state.dates,
          startTime:this.state.startTime,
          endTime:this.state.endTime,
          signupId:this.state.authdata.user.name,
        }),
        headers:{'Content-Type':'application/json'},
      })
      
      .then(res=> res.json())
      .then(data=>this.setState({
          events:data
      })).then(()=>{
          this.show();
      });
    }
      }

render() {
  
        return (
            <div>
                  <button type="button" className="btn" data-toggle="modal" data-target="#myModal"> <img alt="log3" src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/plus_circle-512.png" width="45px" height="45px" title="Click to Add Events"/></button>
                  <div className="myCal"><a href="/calender">My Calender </a></div>
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Add Events Here</h4>
                                </div>
                                <div className="modal-body">
                                   <form>
                                        <label> Event Name</label> <br/>
                                       <input  type="text" placeholder=" Enter Event Name"  onChange={e => this.handleName(e) } required/> <br/> <br/>
                                       <label>Event Date</label> <br/>
                                       <input  type="date"  onChange={e => this.handleDate(e) }  required/><br/> <br/>
                                       <label>Event Starting Time</label> <br/>
                                       <input type="time"    onChange={e => this.handleStartTime(e) }  required/> <br/> <br/>
                                       <label>Event Ending Time</label> <br/>
                                       <input  type="time"  onChange={e => this.handleEndTime(e) } required/> <br/> <br/>
                                        <button id="save_btn" data-dismiss="modal"  onClick={e => this.handleSave(e) }>Save</button>
                                   </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="close_button" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>List of Events</h3>
                        <div className="events">
                        {
                             this.state.eventlist.length>0?
                                this.state.eventlist.map(element=>(
                            <Container eventname={element.Event} date={ moment(element.date).format("MMM DD YYYY")}  startTime={ moment(element.startTime).format('LT') } endTime= {moment(element.endTime).format('LT')} eventId ={element.id} /> 
                                ))  : 
                            
                        
                                <h1> Yor event list is empty </h1>
                            
                        }</div>
                    </div>
            </div>
        )
    }
}

export default Events
