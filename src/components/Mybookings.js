import React, { Component } from 'react'
import './Book.css'


class Mybookings extends Component {
    render() {
        return (
            <div>
                <div >
                    <a className="back" href="/Train">Back</a>
                </div>
                <div>
                    Your Booking is Empty
                </div>
            </div>
        )
    }
}

export default Mybookings
