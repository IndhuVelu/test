import React, { Component } from 'react'
import '../Header/Header.css'
import {Redirect, withRouter} from 'react-router-dom'
import logo from "../../Assets/IRCTC.png"
class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showMo:false,
            authdata: {
                'user': {
                    'name': ''
                }
            }
        }
    }
    componentDidMount = async() => {
        if (localStorage.getItem('token')) {
            await fetch('http://localhost:3050/head', {
                method: 'post',
                body: JSON.stringify({
                    token: JSON
                        .parse(localStorage.getItem('token'))
                        .token
                }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => this.setState({authdata: data}))
                .catch(() => {
                    console.log('error')
                    this
                        .props
                        .history
                        .push("/login")
                })
        }
    }

    handlelogout = (e) => {
        localStorage.removeItem('token');
        window.location.reload();

    }
    handleMenu = (e) => {
        this.setState({
            showMo:!this.state.shoMo
        })
    }
    render() {
        return (
            (!localStorage.getItem('token')) ? <Redirect to="/login"/>
            : <div>
                <div className="full">
                    <div className="head">
                     <div><img  src={logo} alt="logo" width="110px" height="70px"/></div>
                    </div>
                    <p className={`menu${this.state.showMo === false ? '': '1'}`} onClick={this.handleMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                    </p>
  
                  {
                  this.state.showMo?  <div className="user">{this.state.authdata.user.name}
                        <div className="logbtn">
                            <p className="whitelink" onClick={e => this.handlelogout(e)}>
                                Logout
                            </p>
                        </div>
                        <a  id="book" href="/myBookings" date={this.state.date}>MyBookings</a>
                    </div>
                    :<div></div>}

                </div>
                    
            </div>
            )
    }
}

export default withRouter(Header)