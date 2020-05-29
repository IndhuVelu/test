import React, { Component } from 'react'
import '../Header/Header.css'

import logo from "../../Assets/Images/logo.jpeg"
class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="icon-bar">
                        <a href="/trello"><i className="fa fa-th"></i></a> 
                        <a href="/trello"><i className="fa fa-home"></i></a> 
                        <a href="/trello"><i className="fa fa-id-card-o"></i></a>
                       <i id="se" className="fa fa-search"></i>
                    </div>
                    <div className="navbar-logo">
                       <div> <img src={logo} alt="logo"/> </div> 
                    </div>
                    <div  className="icon-bar1">
                        <i className="fa fa-plus" data-toggle="modal" data-target="#myModal"></i>
                        <a href="/trello"><i className="fa fa-info-circle"></i></a> 
                        <a href="/trello"><i className="fa  fa-bell"></i></a> 
                        <a href="/trello"><i className="fa  fa-user" onClick={ e => this.handleUser(e) }></i></a> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
