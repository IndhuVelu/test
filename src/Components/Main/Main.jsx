import React, { Component } from 'react'
import Header from '../Header/Header'
import HomeLeft from '../HomeLeft/HomeLeft'
import HomeRight from '../HomeRight/HomeRight'
class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
   
    render() {
        return (
            <div>
                <Header/>
                <div style={{display:"flex"}}>
                <HomeLeft/>
                <HomeRight/>
                </div>
            </div>
        )
    }
}

export default Main