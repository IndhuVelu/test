import React, { Component } from 'react'
import '../Board/Board.css'
import TrelloHeader from '../TrelloHeader/TrelloHeader'
// import BoardContent from '../BoardContent/BoardContent'
import Trello from '../Trello/Trello'
var CryptoJS = require("crypto-js");
class Board extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             UserBoardDetails:[],
        }
    }
    componentDidMount (){
        var bytes = CryptoJS.AES.decrypt( this.props.match.params.id, 'my-secret-key@123');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log("@@@@@@@",decryptedData);
        fetch('http://localhost:3060/UserBoardDetails', {
            method: "POST",
            body: JSON.stringify({
                id: decryptedData
            }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => this.setState({
                UserBoardDetails: data,
                SignupName:data[0].SignupName,
                Theme:data[0].Theme
            }));
    }
    
    render() {

        return (
            <div className="body1" style={{ backgroundImage: 'url(' + this.state.Theme + ')',}}>
                <div><TrelloHeader/></div>
               <div className="whole-navbar" >
                <div className="board-navbar">
                    <div className="board-icon-bar">
                         <span>{this.state.SignupName}</span>
                         <i className="fa fa-star-o"></i> 
                         <img src="https://img.icons8.com/material-outlined/24/000000/vertical-line.png" alt="or"/>
                         <p>Personal </p>
                         <img src="https://img.icons8.com/material-outlined/24/000000/vertical-line.png" alt="or"/> 
                          <p> Private</p>
                    </div>
                    <div className="board-navbar-logo">
                    </div>
                    <div  className="icon-bar">
                    </div>
                </div>
                </div>
                {/* <div> <BoardContent/> </div> */}
                <div className="trello-board"> <Trello/> </div>
            </div>
        )
    }
}

export default Board
