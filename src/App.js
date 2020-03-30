// import React from 'react';
// import Board from "react-trello";
// import './App.css';
// import data from "../src/data.json";

// function App() {
//   return (
//     <div className="App">
//         <Board data={data} draggable editable canAddLanes editLaneTitle/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeMain from './components/HomeMain/HomeMain'
import Validate_signup from './components/Signup/ValidateSignup'
import Resetpass from './components/ResetPassword/ResetPass'
import PasswordReset from './components/ResetPassword/PasswordReset';
import Login from './components/Login/login';
import Main from './components/Main/Main';
import Board from './components/Board/Board'
import trello from './components/Trello/Trello'
function App() {
  return (  
    <div className="App">
      <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={HomeMain}/>
                        <Route path="/signup" exact component={Validate_signup}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/passwordReset" exact component={PasswordReset}/>
                        <Route path="/resetPass/:id" exact component={Resetpass}/>
                        <Route path="/trello" exact component={Main}/>
                        <Route path="/board" exact component={trello}/>
                        <Route path="/MainBoard/:id" exact component={Board}/>

                        <Route path="*" component={() => "404 NOT FOUND"}/>
                    </Switch>
                </div>
            </Router>
    </div>
  );
}

export default App;

