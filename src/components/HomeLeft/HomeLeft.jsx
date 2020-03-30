import React, { Component } from 'react'
import '../HomeLeft/HomeLeft.css'
import HomeRight from '../HomeRight/HomeRight'
class HomeLeft extends Component {
    render() {
        return (
            <div style={{marginTop:"-40px"}}>
               <div className="tab">
               <i className="fa fa-id-card-o"> <a href = "/board" className="tablinks"> &nbsp; Board </a> </i>
               <i className="fa fa-picture-o"> <a href ="/board" className="tablinks">  &nbsp; Template  </a> </i>
               <i className="fa fa-industry"> <a href="/trello" className="tablinks"> &nbsp; Home </a>  </i>
                </div>
                <div className="board">
                 <i className="fa fa-star-o"> &nbsp;Starred Boards  </i> <br/>
                <HomeRight/>
                </div>
            </div>
        )
    }
}

export default HomeLeft
