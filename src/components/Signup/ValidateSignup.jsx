import React, { Component } from "react";
import './signup.css'
import { withRouter } from 'react-router-dom'
import Hide from "../../Assets/show_hide_password.png"
class Validate_signup extends Component {
    render() {
        return <Register/>;
    }
}

const validEmailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
var usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            password: "",
            confrimpassword: '',
            cond: false,
            hidden: true,
            errors: {
                fullName: "",
                email: "",
                password: "",
                confrimpassword: '',
                hidden: true
            }
        };
    }

    componentDidMount() {
        if (this.props.password) {
            this.setState({password: this.props.password});
        }
    }
    toggleShow1 = (e) => {
        e.preventDefault();
        this.setState({
            hidden: !this.state.hidden
        });
    }

    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "fullName":
                errors.fullName = usernameRegex.test(value)
                    ? ""
                    : "Name is Invalid";
                break;
            case "email":
                errors.email = validEmailRegex.test(value)
                    ? ""
                    : "Email is not valid!";
                break;
            case "password":
                errors.password = value.length < 8
                    ? "Password must be 8 characters long!"
                    : "";
                break;
            case "confrimpassword":
                errors.confrimpassword = (value.length < this.state.password.length)
                    ? "Passwords don't match"
                    : "";
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});
    };

    handleSubmit = event => {

        event.preventDefault();

        if ((this.state.fullName === "") || (this.state.password === "") || (this.state.email === "") || (this.state.confrimpassword === "")) {
            alert("please fill the details");
        } else {
            fetch('http://localhost:3050/signup', {
                method: "POST",
                body: JSON.stringify({name: this.state.fullName, email: this.state.email, password: this.state.password}),
                    // headers:{'Content-Type':'application/json'},
                })
                .then(res => res.json())
                .then((res) => {

                    if (!res.status) 
                        alert('Username already Exist')
                    else 
                        window
                            .location
                            .replace('/home')
                    })

            this.setState({cond: true})

        }

    }

    render() {

        const {errors} = this.state;
        return (
            <div className="body">
                <div className="form_main1">
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="signup_form">
                            <div>
                                <label className="sign">Sign Up</label>
                            </div>
                            <div className="fullName">

                                <input
                                    type="text"
                                    name="fullName"
                                    onChange={this.handleChange}
                                    noValidate
                                    placeholder="FullName"/><br/>
                                <br/> {errors.fullName.length > 0 && (
                                    <span className="error">{errors.fullName}</span>
                                )}
                            </div>

                            <div className="email">

                                <input
                                    type="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    noValidate
                                    placeholder="Email"/>
                                <br/>
                                <br/> {errors.email.length > 0 && (
                                    <span className="error">{errors.email}</span>
                                )}
                            </div>

                            <div className="password">

                                <input
                                    type={this.state.hidden
                                    ? "password"
                                    : "text"}
                                    name="password"
                                    onChange={this.handleChange}
                                    noValidate
                                    placeholder="Password"/>
                                <input
                                    className="hi"
                                    type="image"
                                    src={Hide}
                                    alt="eyeimg"
                                    onClick={this.toggleShow1}/>
                                <br/>
                                <br/> {errors.password.length > 0 && (
                                    <span className="error">{errors.password}</span>
                                )}

                            </div>
                            <div className="password">

                                <input
                                    type={this.state.hidden
                                    ? "password"
                                    : "text"}
                                    name="confrimpassword"
                                    onChange={this.handleChange}
                                    noValidate
                                    placeholder=" ConfrimPassword"/>
                                <input
                                    className="hi"
                                    type="image"
                                    src={Hide}
                                    alt="eyeimg"
                                    onClick={this.toggleShow1}/>
                                <br/>
                                <br/> {errors.confrimpassword.length > 0 && (
                                    <span className="error">{errors.confrimpassword}</span>
                                )}

                            </div>
                            <br/>
                            <div className="submit">
                                <input type="submit" value="Create" className="btn1"/>
                            </div>
                            <div className="log">Already a Member ?
                                <a href="/login">Login
                                </a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Validate_signup);