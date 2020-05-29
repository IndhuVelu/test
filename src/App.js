import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './Components/Main/Main'
import Mobile from './Components/Section/Mobile/Mobile'
import Skin from './Components/Section/Skin/Skin'
import Hair from './Components/Section/Hair/Hair'
import Book from './Components/Section/Book/Book'
import Makeup from './Components/Section/Makeup/Makeup'
import Furniture from './Components/Section/Furniture/Furniture'
import Cart from './Components/Cart/Cart'
function App() {
  return (
    <div className="App">
       <Router>
                <div>
                   <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/mobile" exact component={Mobile}/>
                        <Route path="/hair" exact component={Hair}/>
                        <Route path="/skin" exact component={Skin}/>
                        <Route path="/furniture" exact component={Furniture}/>
                        <Route path="/book" exact component={Book}/>
                        <Route path="/makeup" exact component={Makeup}/>
                        <Route path="/cart" exact component={Cart}/>
                        <Route path="*" component={() => "404 NOT FOUND"}/>
                    </Switch>
                  </div>
        </Router>
    </div>
  );
}

export default App;
