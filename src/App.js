import React from 'react';
import './App.css';
import Main from './components/Main/main';
import Login from './components/Login/login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Validate_signup from './components/Signup/ValidateSignup'
import Resetpass from './components/ResetPassword/ResetPass'
import PasswordReset from './components/ResetPassword/PasswordReset';
import Book from './components/Book/Book';
import MyBookings from './components/MyBookings/MyBookings'
import Chatter from './components/Chatter/Chatter'

function App() {

    return (

        <div className="App">

            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Validate_signup}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/train" exact component={Main}/>
                        <Route path="/book" exact component={Book}/>
                        <Route path="/myBookings" exact component={MyBookings}/>
                        <Route path="/passwordReset" exact component={PasswordReset}/>
                        <Route path="/resetPass/:id" exact component={Resetpass}/>
                        <Route path="/chatter/:id" exact component={Chatter}/>  
                        <Route path="*" component={() => "404 NOT FOUND"}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
