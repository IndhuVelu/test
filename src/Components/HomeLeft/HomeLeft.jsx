import React, { Component } from 'react'
import '../HomeLeft/HomeLeft.css'
// import HomeRight from '../HomeRight/HomeRight'
class HomeLeft extends Component {
    render() {
        return (
            <div style={{marginTop:"-40px"}}>
               <div className="tab">
               <div><h2>Categories</h2></div>
               <i className="fa fa-mobile"> <a href = "/mobile" className="tablinks"> &nbsp; Mobiles </a> </i>
               <i className="fa fa-book"> <a href ="/book" className="tablinks">  &nbsp; Books  </a> </i>
               <i className="fa fa-eyedropper"> <a href="/makeup" className="tablinks"> &nbsp; Makeup </a>  </i>
               <i className="fa fa-magic"> <a href="/skin" className="tablinks"> &nbsp; Skin </a>  </i>
               <i className="fa fa-industry"> <a href="/hair" className="tablinks"> &nbsp; Hair </a>  </i>
               <i className="fa fa-home"> <a href="/furniture" className="tablinks"> &nbsp; Furniture </a>  </i>
                </div>
            </div>
        )
    }
}

export default HomeLeft

