import React, { Component } from 'react'
import '../Header/Header.css'
import { withRouter } from 'react-router-dom'
import logo from "../../Assets/trello-logo-white.svg"
class Header extends Component {
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
            search:'',
            searchdetails:[],
            disfrom:false,
        }
    }
    componentDidMount= async() => {
        if (localStorage.getItem('token')) {
            console.log(localStorage.getItem('token'))
        fetch('http://localhost:3060/head',{
            method:"POST",
            body:JSON.stringify({
                token:localStorage.getItem('token')
            }),
            headers:{'Content-Type':'application/json'}
          })
          .then(res=> res.json())
          .then(data => this.setState({authdata: data}))
          .catch((e) => {
            console.log(e)
            this
                .props
                .history
                .push("/login")
        })
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
    handleSearch =(e) =>{
        this.setState({
            search:e.target.value
        },()=>{
            fetch('http://localhost:3060/Search', {
                method: "POST",
                body: JSON.stringify({
                    search: this.state.search,
                    signupname: this.state.authdata.user.name
                }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.setState({searchdetails: data})
                    console.log(data)
                })
                .catch(() => {
                    console.log('error')
                })
        })
    }
    handledisplay =(e) =>{
        console.log(e.target.dataset.front);
        this.setState({
            id: e.target.dataset.front,
            disfrom: true
        }, () => {
           this.props.history.push("/MainBoard/" +this.state.id)
        })
    }
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="icon-bar">
                        <a href="/trello"><i className="fa fa-th"></i></a> 
                        <a href="/trello"><i className="fa fa-home"></i></a> 
                        <a href="/trello"><i className="fa fa-id-card-o"></i></a> 
                        {/* <a href="/trello"><i className="fa fa-search"></i></a> */}
                        <input className="search" type="text" placeholder="Search.." onChange={ e => this.handleSearch(e) }/>
                       <i id="se" className="fa fa-search"></i>
                    </div>
                    <div className="navbar-logo">
                       <div> <img src={logo} alt="logo"/> </div> 
                    </div>
                    <div  className="icon-bar1">
                        <i className="fa fa-plus" data-toggle="modal" data-target="#myModal"></i>
                        <a href="/trello"><i className="fa fa-info-circle"></i></a> 
                        <a href="/trello"><i className="fa  fa-bell"></i></a> 
                        <a href="/trello"><i className="fa  fa-user" onClick={ e => this.handleUser(e) }></i></a> 
                    </div>
                </div>
                <div className="whole">
                    {this.state.disfrom !== true
                        ? <div id="wholedisplay_from">
                                {this.state.searchdetails.map(element => (
                                        <div>
                                            <li
                                                className="fromdisplay"
                                                id="fromdisplay"
                                                data-front={element.id}
                                                onClick=
                                                {e => this.handledisplay(e) }>{element.Title}</li>
                                        </div>
                                    ))
                                }

                            </div>
                        : <input type="hidden"/>}
                        <div id="full">
                    <div id="head">
                     <div><img  src={logo} alt="logo" width="110px" height="70px"/></div>
                    </div>
                    {
                        this.state.user ? <div className="user">{this.state.authdata.user.name}
                        <div id="logbtn">
                            <p className="link" onClick={e => this.handlelogout(e)}>
                                Logout
                            </p>
                        </div>
                    </div>
                    :<div></div>
                    }
                    </div>
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

export default withRouter(Header)
