import React, { Component } from 'react'
import './Train_Book.css'
 class Container extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     handleBook=(e)=> {
         console.log(this.props.id)
        window.location.replace('/Book')
    }
    render() {
        return (
            <div className="heading1">
                <div>
                    {this.props.name}
                </div>
                <div>
                    {this.props.departure}  <br/>
                    
                    {this.props.date}
                </div>
                <div>
                    {this.props.arrival}   <br/>
                    {this.props.date}
                </div>
                <div>
                    <button className="book"  onClick={e => this.handleBook(e)}>Book Now</button>
                </div>
            </div>
        )
    }
}

export default Container
