import React, { Component } from 'react'
import './Header.css'
import { Redirect ,withRouter} from 'react-router-dom'
class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             authdata:{'user':{'name':''}}
        }
    }
    componentDidMount = async()=>{
        if(localStorage.getItem('token'))

       {await fetch('http://localhost:3050/head',{
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
            this.props.history.push("/home")
        })}        
    }
   
    handlelogout=(e)=> {
          localStorage.removeItem('token');
     
          window.location.reload();
        
      
        
    }
    render() {
     
        return (
            (!localStorage.getItem('token')) ? <Redirect  to ="/home"/>:
            <div>
                <div className="full">
                    <div className="logo"><img src="https://images.squarespace-cdn.com/content/5b2bda42cc8fed2d1f0118d2/1529613311473-3XH6F88AOIA45ADX956W/Spark_Logo.png?content-type=image%2Fpng" alt="logo" width="90px" height="70px"/></div>
                  <div className="head"> <h3>  Spark Event Management </h3></div>
                  <div className="user">{this.state.authdata.user.name}
                   <div className="logbtn"> <a  className="whitelink" onClick={e => this.handlelogout(e)}> Logout </a> </div> </div>
                   
                </div>
               
               
            </div>
        )
    }
}

export default withRouter(Header)