import React, { Component } from 'react'
import '../FavBoard/FavBoard.css'
 class FavBoard extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              FavDetails:[],
              signupname: {
                'user': {
                    'name': ''
                }
            },
         }
     }
     componentDidMount = async() => {
        if (localStorage.getItem('token')) {
            await fetch('http://localhost:3060/head', {
                method: "POST",
                body: JSON.stringify({
                    token: localStorage.getItem('token')
                }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => this.setState({authdata: data}))
        }
        fetch('http://localhost:3060/FavDetails', {
            method: "POST",
            body: JSON.stringify({signupname: this.state.authdata.user.name}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => this.setState({FavDetails: data}));
     }
    render() {
        return (
            <div>
                 <div className="board-list1">
                    {(this.state.FavDetails.map(element => (
                        <div className="fav-board-cart" key={element.id}>
                            <div>
                                <img src={element.Theme} className="fav-image" alt="images" width="200px" height="120px"/>
                                <div className="fav-top-left"> {element.Title} </div>
                                <div className="fav-middle">
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

export default FavBoard
