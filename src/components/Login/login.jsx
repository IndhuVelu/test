import React, {Component} from 'react'
import './login.css'
import Hide from "../../Assets/show_hide_password.png"
import logo from "../../Assets/trello-logo-blue.png"
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hidden: true
        }
    }

    
    handleName = (e) => {
        console.log(e.target.value);

        this.setState({username: e.target.value});
    }

    handlePass = (e) => {
        console.log(e.target.value);

        this.setState({password: e.target.value});
    }
    toggleShow = (e) => {
        e.preventDefault();
        this.setState({
            hidden: !this.state.hidden
        });
    }
    handlelogin = (e) => {
        console.log(this.state.username, this.state.password, this.state.email);
        e.preventDefault();

        if ((this.state.username === "" || null || undefined) || (this.state.password === " " || null)) {
            alert("Enter the neccessary details");
            return
        }

        fetch('http://localhost:3060/login', {
            method: "POST",
            body: JSON.stringify({name: this.state.username, password: this.state.password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    localStorage.setItem('token', JSON.stringify(data.token))
                    this.props.history.push('/trello')
                } else {
                    alert('invalid credentials')
                }
            })

        e.preventDefault();

    }

    render() {

        return (

            <div className="body">
                 <div className="logo">
                <img src={logo} alt="logo"/>
                </div>
                <div className="form_main">
                    <form>
                        <div className="login_form">
                            <center>
                                <div>
                                    <label className="login">
                                        LogIn
                                    </label>
                                </div>
                                <div>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter Full Name"
                                        onChange=
                                        { e => this.handleName(e) }/>
                                </div>
                                <div>
                                    <input
                                        id="password"
                                        placeholder="Enter Password"
                                        type={this.state.hidden
                                        ? "password"
                                        : "text"}
                                        onChange=
                                        { e => this.handlePass(e) } />
                                    <input
                                        className="hi"
                                        type="image"
                                        src={Hide}
                                        alt="eyeimage"
                                        onClick={this.toggleShow}/>

                                </div>
                                <div>
                                    <button id="btn2" onClick= { e => this.handlelogin(e) }>
                                        LogIn
                                    </button>
                                </div >
                                <div className="forget">
                                    <a href="/passwordReset">
                                        Forget Password ?
                                    </a>
                                </div >
                                <div className="log">
                                    Don 't have a account ?
                                    <a href="/signup">Signup
                                    </a>
                                </div>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login