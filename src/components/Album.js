import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import './album.css'
import '../index'
class Album extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                name:'',
                Img:null,
                progress:0,
                url:'',
                songname:'',
                song:null,
                fetched:[],
                fetched1:[],
                a_id:''
         
        }
        // this.handleName = this.handleName.bind(this);
        // this.handleImage = this.handleImage.bind(this);
        // this.handleSave = this.handleSave.bind(this);
        // this.handleSongName = this.handleSongName.bind(this);
        // this.handleSong = this.handleSong.bind(this);
        // this.handleSongSave = this.handleSongSave.bind(this);
    }
    componentDidMount(){
      fetch('http://localhost:3002/p')
      .then(res=> res.json())
      .then(data=>this.setState({
          fetched:data
      }));

      // fetch('http://localhost:3002/sp')
      // .then(res=> res.json())
      // .then(data=>this.setState({
      //     fetched1:data
      // }));
    
      
    }
    
  
    handleName=(e)=> {
      console.log(e.target.value);
      this.setState({ name: e.target.value});
    }

    handleImage=(e)=> {
          console.log(e.target.files[0]);
          var file=e.target.files[0];
          var reader= new FileReader();
          reader.onload=()=>{
            this.setState({ Img:reader.result});
          }
          reader.readAsDataURL(file);
        
    }
    handleSongName=(e)=> {
      console.log(e.target.value);
      this.setState({ songname: e.target.value});
    }
    handleSong=(e)=> {
      console.log(e.target.files[0]);
      var file=e.target.files[0];
      var reader= new FileReader();
      reader.onload=()=>{
        this.setState({ song:reader.result});
      }
      reader.readAsDataURL(file);
    
    }
    
    handleSongSave1 =(e) =>{
      this.setState({
        selectedId:e.target.value
      })
    }

    handlePlay =(e) =>{
      this.setState({
        addId:e
      })
      console.log(e);
      fetch('http://localhost:3002/sp',{
        method:'post',
        body:JSON.stringify({
          addId:e
        }),
        headers:{'Content-Type':'application/json'},
      })
      
      .then(res=> res.json())
      .then(data=>this.setState({
          fetched1:data
      }));

    }


    handleSongSave=(e) =>{
      // alert("submit is clicked");
      console.log(
        
        this.state.selectedId,
        this.state.songname,
        this.state.song,
        )
        e.preventDefault();
      fetch('http://localhost:3002/album/upload',{
          method:"POST",
          body:JSON.stringify({
            songname:this.state.songname,
            song:this.state.song,
            a_id:this.state.selectedId,
            
          }),
          headers:{'Content-Type':'application/json'},
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
       
        e.preventDefault();
       
    }
    
   

    handleSave=(e) =>{
        // alert("submit is clicked");
        console.log(
          this.state.Img,
          this.state.albumfolder,
         e.preventDefault()
        );

        fetch('http://localhost:3002/album/add',{
          method:"POST",
          body:JSON.stringify({
            name:this.state.name,
            img:this.state.Img
          }),
          headers:{'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(data=>console.log(data));


 }
 
render() {
  this.state.fetched.forEach(element=>{
    console.log(element.Album_id)
  });
        return (
            <div>
                <div className="album_text">
                  <center> <h3>Album </h3>  </center>
                </div>
                
                <div className="inside_album">
                    <button type="button" className="btn" data-toggle="modal" data-target="#myModal"> <img alt="log3" src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/plus_circle-512.png" width="45px" height="45px"/></button>
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Add Album</h4>
                                </div>
                                <div className="modal-body">
                                   <form>
                                        <label> Album Name</label> <br/>
                                       <input id="album-name" type="text" placeholder="Enter Album Name" onChange={e => this.handleName(e) }/> <br/> <br/>
                                       <label>Select Album Image</label> <br/>
                                       <input id="album-image" type="file" placeholder="Enter Album Image" onChange={e => this.handleImage(e) }/> <br/>
                                        <button id="save_btn" onClick={e => this.handleSave(e)}>Save</button>
                                   </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="album">
                    <div className="album_img">
                    {
  
                        (this.state.fetched.length)&&
                        <div className="img_insert">
                          {
                            
                          
                            this.state.fetched.map((element)=>(
                                <div>
                                    <img  src={element.Album_Img} id ={element.Album_id}key={element.Album_id} alt="images" width="200px" height="150px"/>
                                  
                                    <div><a  rel="no-refresh" id="play"  onClick={()=>this.handlePlay(element.Album_id)} type="button">ADD</a> </div>
                                    <div><button id="upload" type="button" className="btn btn-info btn-lg" data-toggle="modal" value={element.Album_id} onClick={this.handleSongSave1} data-target="#myUploadModal">Upload</button> </div>
                                    <div className="modal fade" id="myUploadModal" role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <h4 className="modal-title">Upload Album</h4>
                                            </div>
                                            <div className="modal-body">
                                              <form>
                                                  <label> Song Name</label> <br/>
                                                  <input id="song-name" type="text" placeholder="Enter Song Name" onChange={this.handleSongName } value={this.state.songname}/> <br/> <br/>
                                                  <label>Select Song </label> <br/>
                                                  <input id="album-song" type="file"  onChange={this.handleSong }/> <br/>
                                                  <button id={element.Album_id} onClick={this.handleSongSave}>Save</button>
                                                   
                                              </form>
                                            
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                
                                </div>
                              
                            ))
                          
                          }
                           
                        </div>

                    }

                    </div>
               
                <div id="hide" className="right">
                    {
                       (this.state.fetched1.length)&&
                       <div>
                         {
                            this.state.fetched1.map((element)=>(
                              <div>
                                <div>{element.song_url}</div>

                                <ReactAudioPlayer
                                    src={element.song_url}
                                    controls
                                  />
                              
                                </div>
                            ))
                         }
                       </div>
                    }
                </div>
                </div>

                
               
            </div>
        )
    }
}      


export default Album
