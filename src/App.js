import React from 'react';
import './index.css';
import {Component} from 'react';
import Main from './Components/Main';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Invoice from './Components/Invoice';


class App extends Component {
  state={
    name:{}
  }

  changestate=(ab)=>{
    // console.log(ab);
    this.setState({
      name:ab
    })
  }


  render(){
      return (
        <div className="App">
          <Router>
              <Switch>
                  <Route path="/" exact component={()=> <Main name={this.changestate.bind(this)}/>}/>
                  <Route path="/home" component={()=> <Invoice name={this.state.name}/>}/>
              </Switch>
            </Router>
          
        </div>
  );
      }
}

export default App;
