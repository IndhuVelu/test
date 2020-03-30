import React, { Component } from 'react'
import '../TrelloHeader/TrelloHeader.css'
import { withRouter } from 'react-router-dom'
import logo from "../../Assets/trello-logo-white.svg"
class TrelloHeader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'' ,
            theme:'',
            mode:'',
            authdata: {
                'user': {
                    'name': ''
                }
            },
            user:false,
        }
    }
    componentDidMount= async() => {
        if (localStorage.getItem('token')) {
        await  fetch('http://localhost:3060/head',{
            method:"POST",
            body:JSON.stringify({
                token:localStorage.getItem('token')
            }),
            headers:{'Content-Type':'application/json'}
          })
          .then(res=> res.json())
          .then(data => this.setState({authdata: data}))
        } 
       
    }
    handleTittle = (e) => {
        this.setState({title: e.target.value});
    }
    handleImage = (e) => {
        var file=e.target.files[0];
        var reader= new FileReader();
        reader.onload=()=>{
          this.setState({ Img:reader.result});
        }
        reader.readAsDataURL(file);
    }
    handleMode = (e) => {
        console.log(e.target.value);
        this.setState({mode: e.target.value});
    }
    handleSave =(e)=>{
        e.preventDefault();
        fetch('http://localhost:3060/CreateBoard',{
          method:"POST",
          body:JSON.stringify({
            title:this.state.title,
            img:this.state.Img,
            mode:this.state.mode,
            signupname: this.state.authdata.user.name
          }),
          headers:{'Content-Type':'application/json'}
        })
        .then(res=> res.json())
        .then(data=>console.log(data));
    }
    handleUser =(e) =>{
        e.preventDefault();
        this.setState({
            user: !this.state.user
        })
    }
    handlelogout =(e) =>{
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <div className="trello-navbar">
                    <div className="icon-bar2">
                        <a href="/trello"><i className="fa fa-th"></i></a> 
                        <a href="/trello"><i className="fa fa-home"></i></a> 
                        <a href="/trello"><i className="fa fa-id-card-o"></i></a> 
                        <a href="/trello"><i className="fa fa-search"></i></a>
                    </div>
                    <div className="navbar-logo2">
                       <div> <img src={logo} alt="logo"/> </div> 
                    </div>
                    <div  className="icon-bar2">
                        <i className="fa fa-plus" data-toggle="modal" data-target="#myModal"></i>
                        <a href="/trello"><i className="fa fa-info-circle"></i></a> 
                        <a href="/trello"><i className="fa  fa-bell"></i></a> 
                        <a href="/trello"><i className="fa  fa-user" onClick={ e => this.handleUser(e) }></i></a> 
                    </div>
                </div>
                <div className="full1">
                    <div className="head1">
                    </div>
                    {
                        this.state.user ? <div className="user1">
                        <div className="logbtn1">
                            <p className="link1" onClick={e => this.handlelogout(e)}>
                                Logout
                            </p>
                        </div>
                    </div>
                    :<div></div>
                    }
                    </div>
                
                     <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Add Board</h4>
                                </div>
                                <div className="modal-body">
                                 
                                <form onSubmit={this.handleSubmit} noValidate>
                                 <div className="signup_form">
                                    <div >
                                        <input
                                            type="text"
                                            onChange= { e => this.handleTittle(e) }
                                            placeholder="Tittle"/><br/>
                                    </div>
                                    <div className="theme">
                                        <input
                                            type="file"
                                            onChange= { e => this.handleImage(e) }
                                            />
                                        <br/>
                                    </div>  
                                    <div>
                                        <label>Choose a Post Method:</label>
                                        <select   onChange= { e => this.handleMode(e) }>
                                        <option value="1">Private</option>
                                        <option value="0">Public</option>
                                        </select>
                                        </div>     
                                <div className="submit">
                                    <input type="submit" value="Submit"data-dismiss="modal"  className="btn1" onClick={this.handleSave}/>
                                </div>
                        </div>

                     </form>
                                 
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="close_button" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                   
                    </div>
        )
    }
}

export default withRouter( TrelloHeader)
