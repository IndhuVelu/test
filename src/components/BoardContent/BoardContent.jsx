import React, { Component } from 'react'
import '../BoardContent/BoardContent.css'

class BoardContent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false,
             add:false,
        }
    }
    handleShow =(e)=>{
        this.setState({
            show :!this.state.show,
        })
    }
    handleAddCard=(e)=>{
        this.setState({
            add :!this.state.add,
        })
    }
    render() {
        return (
            <div className="whole-wrapper">
                <div className="board-list-wrapper">
                    <div className="board-lists">
                        <div className="board-list-header" onClick ={ e => this.handleShow(e) }>
                                { this.state.show ? <textarea type="text"/> :<span id="title">To Do</span>}
                                <i className="fa fa-ellipsis-h"></i> 
                        </div>
                        <div className="board-list-content">
                        <i className="fa fa-plus" ></i>
                        <span id="add">Add a Card</span>
                        </div>
                    </div>
                </div>
                <div className="board-list-wrapper">
                    <div className="board-lists">
                    <div className="board-list-header" onClick ={ e => this.handleShow(e) }>
                                { this.state.show ? <textarea type="text"/> :<span id="title">Doing</span>}
                                <i className="fa fa-ellipsis-h"></i> 
                    </div>
                    { this.state.add ? 
                        <div className="board-lists">
                            <textarea  id="add-card-textarea" type="text" placeholder="Enter a title for this card "></textarea>
                        </div> : <></>
                    }
                        <div className="board-list-content" onClick ={ e => this.handleAddCard(e) } >
                        <i className="fa fa-plus" ></i>
                        <span id="add">Add a Card</span>
                        </div>
                    </div>
                </div>
                <div className="board-list-wrapper">
                    <div className="board-lists">
                    <div className="board-list-header" onClick ={ e => this.handleShow(e) }>
                                { this.state.show ? <textarea type="text"/> :<span id="title">Done</span>}
                                <i className="fa fa-ellipsis-h"></i> 
                        </div>
                        <div className="board-list-content" onClick ={ e => this.handleAddCard(e) } >
                        <i className="fa fa-plus" ></i>
                        <span id="add">Add a Card</span>
                        </div>
                    </div>
                </div>
                <div className="board-list-wrapper">
                    <div className="board-lists1">
                        <div className="board-list-content-add">
                        <i className="fa fa-plus" ></i>
                        <span id="add">Add Another List</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardContent
