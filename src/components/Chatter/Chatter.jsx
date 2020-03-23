import React, { Component } from 'react'
import '../Chatter/Chat.css'
import io from 'socket.io-client'
import moment from 'moment'
class chatter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            signupId: '',
            message: '',
            socket: io.connect('http://localhost:3050/' + this.props.match.params.id),
            group: [],
            messages: [],
            messages1: []
        }
    }
    componentDidMount() {
        console.log("i am trainidd", this.props.match.params.id)
        if (localStorage.getItem('token')) {
            fetch('http://localhost:3050/trainUser', {
                method: 'post',
                body: JSON.stringify({
                    token: JSON.parse(localStorage.getItem('token')).token
                }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => this.setState({authdata: data, signupId: data.user.name}))
                .catch(() => {
                    console.log('error')
                })
        }
        fetch('http://localhost:3050/trainName', {
            method: 'post',
            body: JSON.stringify({trainId: this.props.match.params.id}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => this.setState({trainName: data[0].TrainName}))
            .catch(() => {
                console.log('error')
            })

        fetch('http://localhost:3050/GetGroupDetails', {
            method: 'post',
            body: JSON.stringify({trainId: this.props.match.params.id}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.setState({group: data[0].id, groupMembers: data[0].groupmembers}))
        .catch(() => {
            console.log('error')
        })

        fetch('http://localhost:3050/getMessage', {
            method: 'post',
            body: JSON.stringify({trainId: this.props.match.params.id}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.setState({messages1: data}))
        .catch(() => {
            console.log('error')
        })

        let scope = this
        this.state.socket.on('send message', function (data) {
                let message = scope.state.messages1;
                message.push(data);
                scope.setState({messages1: message})
            })
    }
    handleMessage = (e) => {
        this.setState({message: e.target.value})
    }
    Keypress = (e) => {
        if (e.which === 13) {
            this.sendMessage();
        }
    }
    sendMessage = (e) => {
        if (this.state.message) {
            let {messages} = this.state
            let message = {
                Messages: this.state.message,
                senderId: this.state.signupId
            }
            this.setState({
                messages: [ ...messages, message ],
                message: ""
            })
            console.log("1111", message)
        }

        this.state.socket.emit('insert to messsage', {
                message: this.state.message,
                senderid: this.state.signupId,
                trainId: this.props.match.params.id,
                groupId: this.state.group
            })

    }

    render() {
        function tConvert(time) {
            // Check correct time format and split into components
            time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
            if (time.length > 1) { // If time format correct
                time = time.slice(1); // Remove full string match value
                time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
                time[0] = +time[0] % 12 || 12; // Adjust hours
            }
            time.splice(3, 1);
            return time.join(''); // return adjusted time or original string
        }
        console.log("signupidd", this.state.signupId)
        return (
            <div className="msg-container">
                <div className="left">
                    <div className="Profile">
                        <div>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt='img'
                                width="50px"
                                height="50px"/>
                        </div>
                        <div>
                            {this.state.signupId}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-nav">
                        <div className="body-navpro">
                            <div><img
                                className="profile_image"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVEK1DTTv7HBw_sJvthaMxKSTxcPZ8Js0Wi5vovrH-q1W2KSGW"
                                alt="img"
                                width="70px"
                                height="60px"/>
                            </div>
                            <div className="groupName">
                                <div>{this.state.trainName}</div>
                                <div>{this.state.groupMembers}</div>
                            </div>
                        </div>
                    </div>
                    <div className="message-body">
                        <div
                            style={{
                            height: "90%",
                            overflow: 'auto',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>

                            {this.state.messages1.map((msg) => 
                            <div className={`message${msg.sender === this.state.signupId ? '': '1'}`}>
                                    <span className="tail-container"></span>
                                    <div className="sender">
                                        {msg.sender}
                                    </div>
                                    <div>{msg.message}
                                    </div>
                                    <div className="time">{moment(msg.createdAt).format(" DD MMM YYYY ")} {tConvert(moment(msg.createdAt).format("HH:mm"))}</div>
                                </div>)}

                        </div>
                        <div className="chat-box">
                            <input
                                type="text"
                                id="search-tag"
                                placeholder="Type your message here"
                                name='message'
                                autoCapitalize="none"
                                onChange={e => this.handleMessage(e)}
                                onKeyPress={e => this.Keypress(e)}/>
                            <img
                                src="https://pngimage.net/wp-content/uploads/2018/06/send-message-icon-png-7.png"
                                onClick={e => this.sendMessage(e)}
                                alt='sendMessage'/>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}

export default chatter
