import React, {Component} from 'react'
import '../Book/Book.css'
import Details from '../PassengerDetails/Details'
import SeatPicker from 'react-seat-picker'
import io from 'socket.io-client'
var count = 0;
class Book extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: [],
            loading: false,
            seats: [],
            mail: [],
            seatid: [],
            authdata: [],
            trainId: this.props.location.state.id,
            socket: io.connect('http://localhost:3050/' + this.props.location.state.id),
            messages: [],
            signupId: '',
            rows: [
              [{id: 1, number: 1,  isReserved: false}, {id: 2, number: 2,  isReserved: false}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', }, {id: 4, number: '4', orientation: 'west', isReserved: false}, null, {id: 5, number: 5, isReserved: false}, {id: 6, number: 6, isReserved: false}],
              [{id: 7, number: 1, isReserved: true, }, {id: 8, number: 2, isReserved: true}, null, {id: 9, number: '3', isReserved: true, orientation: 'east'}, {id: 10, number: '4', orientation: 'west', isReserved: false}, null, {id: 11, number: 5, isReserved: false}, {id: 12, number: 6, isReserved: false}],
              [{id: 13, number: 1, isReserved: false}, {id: 14, number: 2, isReserved: false}, null, {id: 15, number: 3, isReserved: true, orientation: 'east'}, {id: 16, number: '4', orientation: 'west'}, null, {id: 17, number: 5}, {id: 18, number: 6}],
              [{id: 19, number: 1, isReserved: false }, {id: 20, number: 2, isReserved: false}, null, {id: 21, number: 3, orientation: 'east', isReserved: false}, {id: 22, number: '4', orientation: 'west', isReserved: false}, null, {id: 23, number: 5, isReserved: false}, {id: 24, number: 6, isReserved: false}],
              [{id: 25, number: 1, isReserved: true}, {id: 26, number: 2, orientation: 'east', isReserved: false}, null, {id: 27, number: '3', isReserved: true}, {id: 28, number: '4', orientation: 'west', isReserved: false}, null,{id: 29, number: 5,  isReserved: false}, {id: 30, number: 6, isReserved: true}]
            ],
            email: [],
            invites: []
        }
    }

    componentDidMount = async() => {
        if (localStorage.getItem('token')) {
            await fetch('http://localhost:3050/trainUser', {
                method: 'post',
                body: JSON.stringify({
                    token: JSON
                        .parse(localStorage.getItem('token'))
                        .token
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
        let scope = this
        this.state.socket.on('booking message', function (data) {
                let message = scope.state.messages;
                message.push(data);

                scope.setState({
                    messages: message
                }, () => {

                    scope.state.messages.forEach((element1) => {
                            if ((scope.props.location.state.id === element1.trainid)) {
                                var row = scope.state.rows;
                                row.forEach((element) => {
                                    element.forEach((i) => {
                                        if (i !== null) {
                                            if (i.id === element1.seatId) {
                                                console.log("can't select")
                                                i.isReserved = !i.isReserved;
                                            }
                                        }
                                    })
                                })

                            }
                            scope.setState({rows: row})
                        })

                })
            })
        fetch('http://localhost:3050/signupDetails', {
            method: "POST",
            body: JSON.stringify({}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.setState({email: data});
                console.log("mailss", data);
            })
        fetch('http://localhost:3050/inviteMailDetails', {
            method: "POST",
            body: JSON.stringify({}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.setState({invites: data});

            })

    }
    sendMail = () => {
        this
            .state
            .invites
            .forEach((element2) => {
                if (this.props.location.state.id === element2.trainId) {
                    this.state.email.forEach((ele) => {
                            var nameArr = element2.signupName.split(',');
                            nameArr.forEach((i) => {
                                if (i === ele.signupName) {
                                    console.log(ele.mailId)
                                    fetch('http://localhost:3050/inviteMail', {
                                        method: "POST",
                                        body: JSON.stringify({email: ele.mailId, trainId: element2.trainId}),
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    }).then(res => res.json())
                                }
                            })

                        })

                }
            })
      
    }

    addSeatCallback = ({ row, number, id }, addCb) => {
        this.setState({
            loading: true
        }, async() => {
            await
            console.log(this.props.location.state)
            console.log(`Added seat ${number}, row ${row}, id ${id}`)
            const newTooltip = `tooltip for id-${id} added by you`
            addCb(row, number, id, newTooltip)
            this.setState({loading: false})
            this.setState({seatid: id})

            this.state.socket.emit('prevBook', {
                    seatId: this.state.seatid,
                    signupId: this.state.authdata.user.name,
                    trainId: this.props.location.state.id
                })

            fetch('http://localhost:3050/reservedAdd', {
                method: "POST",
                // headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                  seat: id, 
                  trainid: this.props.location.state.id, 
                  signup_id: this.state.authdata.user.name, 
                  status: 1
                }),
                  headers: {
                      'Content-Type': 'application/json'
                  }
                })
                .then(res => res.json())
                .then(data => {
                    this.setState({seats: data});
                })
        })
    }

    removeSeatCallback = ({ row, number, id }, removeCb) => {
        this.setState({
            loading: true
        }, async() => {
            await
            console.log(`Removed seat ${number}, row ${row}, id ${id}`)
            // A value of null will reset the tooltip to the original while '' will hide the
            // tooltip
            const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
            removeCb(row, number, newTooltip)
            this.setState({loading: false})
        })
    }
    createOne = () => {
        console.log((this.state.total.length - 1 < 0))
        if (this.state.total.length - 1 < 0) {
            this.setState({
                total: this.state.total.concat([{
                            id: count++,
                            name: '',
                            age: '',
                            gender: ''
                        }
                    ])
            })
        } else if ((this.state.total[this.state.total.length - 1].name === '') || (this.state.total[this.state.total.length - 1].age === '') || (this.state.total[this.state.total.length - 1].gender === '')) {
            alert("please fill the details");
        } else {
            if ((this.state.total[this.state.total.length - 1].age) <= 0 || (this.state.total[this.state.total.length - 1].age) > 100) {
                alert("invalid age")
            } else {
                this.setState({
                    total: this.state.total.concat([{
                                id: count++,
                                name: '',
                                age: '',
                                gender: ''
                            }
                        ])
                })
            }
        }
    }

    DetailsChange = (id, e) => {
        var totaltemp = this.state.total;
        var temp = this.state.total.find(x => x.id === id)
        totaltemp.splice(this.state.total.findIndex(x => x.id === id), 1)

        temp[e.target.name] = e.target.value
        totaltemp.push(temp)
        totaltemp.sort(function (a, b) {
            return a.id - b.id
        })
        this.setState({total: totaltemp})
    }
    send = () => {
        console.log(this.state.total)
        console.log(this.state.total[0].name)
        fetch('http://localhost:3050/reservedEmail', {
            method: "POST",
            body: JSON.stringify({

                trainid: this.props.location.state.id,
                email: "indhu31599@gmail.com",
                cost: count * 125,
                seatid: this.state.seatid,
                name: this.state.total[0].name,
                age: this.state.total[0].age,
                gender: this.state.total[0].gender
            }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({mail: data});
            })

    }
    render() {
        var rows = this.state.rows;
        if (this.state.rows === undefined) {
          rows=[
            [{id: 1, number: 1, }, {id: 2, number: 2, }, null, {id: 3, number: '3', isReserved: true, orientation: 'east', }, {id: 4, number: '4', orientation: 'west'}, null, {id: 5, number: 5}, {id: 6, number: 6}],
            [{id: 7, number: 1, isReserved: true, }, {id: 8, number: 2, isReserved: true}, null, {id: 9, number: '3', isReserved: true, orientation: 'east'}, {id: 10, number: '4', orientation: 'west'}, null, {id: 11, number: 5}, {id: 12, number: 6}],
            [{id: 13, number: 1}, {id: 14, number: 2}, null, {id: 15, number: 3, isReserved: true, orientation: 'east'}, {id: 16, number: '4', orientation: 'west'}, null, {id: 17, number: 5}, {id: 18, number: 6}],
            [{id: 19, number: 1, }, {id: 20, number: 2}, null, {id: 21, number: 3, orientation: 'east'}, {id: 22, number: '4', orientation: 'west'}, null, {id: 23, number: 5}, {id: 24, number: 6}],
            [{id: 25, number: 1, isReserved: true}, {id: 26, number: 2, orientation: 'east'}, null, {id: 27, number: '3', isReserved: true}, {id: 28, number: '4', orientation: 'west'}, null,{id: 29, number: 5, }, {id: 30, number: 6, isReserved: true}]
          ]
        }

        const {loading} = this.state
        return (
            <div>
                <div>
                    <a className="back" href="/train">Back</a>
                </div>
                <div className="header">
                    <label>
                        Traveller Details
                    </label>
                    <br/> {this.state.total.map(e => <Details value={e} DetailsChange={(a, e) => this.DetailsChange(a, e)}/>) }
                    <button className="addbtn" onClick={this.createOne}>Add</button>
                </div>

                <div className="selectseat">
                    <label>select your Seats here</label>
                </div>
                <div className="seatpicker">
                    <SeatPicker
                        addSeatCallback={this.addSeatCallback}
                        removeSeatCallback={this.removeSeatCallback}
                        rows={rows}
                        maxReservableSeats={count}
                        alpha
                        visible
                        selectedByDefault
                        loading={loading}
                        tooltipProps={{
                        multiline: true
                    }}/>
                </div>
                <div className="selectseat">
                    <label>
                        Total Fair is :{count * 125}
                    </label>
                </div>
                <div className="send">
                    <button className="sendemail" onClick={this.send}>Send Email</button>
                </div>
                <div className="send">
                    <button className="sendemail" onClick={this.sendMail}>
                        Invitation to Group Chat</button>
                </div>

            </div>
        )
    }
}

export default Book
