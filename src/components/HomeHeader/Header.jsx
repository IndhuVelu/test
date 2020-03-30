import React, {Component} from 'react'
import '../HomeHeader/Header.css'
import logo from "../../Assets/trello-logo-white.svg"
class Header extends Component {
    render() {
        return (
                <div className="header">
                    <div className="head">
                       <div> <img src={logo} alt="logo"/> </div> 
                    </div>
                    <div className="float-right-buttons">
                       <div className="btn"> <a href="/login" className="log-btn">LogIn</a>
                        <a  href="/signup" className="sign-btn">SignUp</a>
                        </div>
                    </div>
                </div>  
        )
    }
}

export default Header
