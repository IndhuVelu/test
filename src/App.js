import React from 'react';
import './App.css';
import Main from './components/main';
// import * as firebase from 'firebase';
 window.$array=[];
function App() {
  // let a=[1,2,3,4,5];
  // let b=[5,6,7,8,9];
  // const ref=firebase.database().ref("array");
  // const ref1=firebase.database().ref("array1");
  // ref1.set(b);
  // ref.set(a);
  // ref.on("value",gotdata,errordata);
  // function gotdata(data){
  //   console.log(data.val())
  //   window.$array=data.val();
  // }
  // function errordata(error){
  //   console.log(error)
  // }
  // ref1.on("value",gotdata,errordata);
  // function gotdata(data){
  //   console.log(data.val())
  //   window.$array=data.val();
    
  // }
  // function errordata(error){
  //   console.log(error)
  // }
  // console.log(window.$array)
  return (
    
    <div className="App">
      <Main/>
     {/* { 
       window.$array.map((value)=>(
          <h2>{value}</h2>
          
       )
       )
     } */}
    </div>
  );
}

export default App;
