import React, { Component } from 'react'
import '../components/main.css'
import Header from '../components/Header.js'
import Album from '../components/Album.js'
 class main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Album/>
                {/* <div className="divide">
                <div className="album">
                    <h2> Album </h2>
                    <div className="inside_album">
                    <img alt="log3" src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/plus_circle-512.png" width="75px" height="75px"/>
                    </div>
                </div>
                <div className="queue">
                    right
                </div>
                </div> */}
            </div>
        )
    }
}

export default main
