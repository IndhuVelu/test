import React, {Component} from 'react'
import '../Main/main.css'
import Header from '../Header/Header.jsx'
import TrainBook from '../TrainBooking/TrainBook'
class main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <TrainBook/>
            </div>
        )
    }
}

export default main
