import React, {Component} from 'react'
import '../HomeRight/HomeRight.css'
import FavBoard from '../FavBoard/FavBoard'
import { withRouter } from "react-router-dom";
var CryptoJS = require("crypto-js");
class HomeRight extends Component {
    constructor(props) {
        super(props)

        this.state = {
            signupname:'',
            authdata: {
                'user': {
                    'name': ''
                }
            },
            boardDetails: [],
            FavDetails: [],
        }
    }
    componentDidMount = async() => {
        if (localStorage.getItem('token')) {
            console.log(localStorage.getItem('token'))
       await fetch('http://localhost:3060/head',{
            method:"POST",
            body:JSON.stringify({
                token:localStorage.getItem('token')
            }),
            headers:{'Content-Type':'application/json'}
          })
          .then(res=> res.json())
          .then(data => this.setState({authdata: data,signupname:data.user.name}))
          .catch((e) => {
            console.log(e)
            this
                .props
                .history
                .push("/login")
        })
        }
       
       await fetch('http://localhost:3060/GetBoardDetails', {      
            method: "POST",
            body: JSON.stringify({signupname: this.state.signupname}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => this.setState({boardDetails: data}));        
    }
    handleAddFav= (e) => {
        fetch('http://localhost:3060/AddFav', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                signupname: this.state.authdata.user.name,
                id : e.target.id
            })
            })
            .then(res => res.json())
            .then(data => this.setState({fav: data}));
    }
    handleImageClick =(e) =>{
        console.log(e.target.id)
        var data = e.target.id
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'my-secret-key@123').toString();
        console.log("!!!!!!!!!!!!!!!!",ciphertext);
        var bytes = CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log("@@@@@@@",decryptedData);
        this.props.history.push("/MainBoard/" +ciphertext)
    }
    render() {
        return (<div>
            <FavBoard/>
            <div className="board-text1"><i className="fa fa-user">&nbsp; Personal Boards</i> <br/></div>
            <div className="board-list">
                    {(this.state.boardDetails.map(element => (
                        <div className="board-cart" key={element.id}>
                            <div>
                                <img src={element.Theme} className="image" alt="images" width="200px" height="120px" id={element.id} onClick={e => this.handleImageClick(e)}/>
                                <div className="top-left"> {element.Title} </div>
                                <div className="middle">
                                     <div><i className="fa fa-star-o" id={element.id} onClick={ e => this.handleAddFav(e) }></i></div>
                                 </div>
                            </div>
                        </div>

                    )))
                    }  
            </div>
            </div>
        )
    }
}

export default withRouter(HomeRight)
