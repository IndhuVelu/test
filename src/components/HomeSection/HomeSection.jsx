import React, {Component} from 'react'
import '../HomeSection/HomeSection.css'
class HomeSection extends Component {
    render() {
        return (
            <div className="section-body">
                <div className="section-left">
                    <div className="section-content">
                     <h1> Trello lets you work more collaboratively and get more done. </h1>
                   </div>
                </div>
                <div className="section-right">
                    <img
                        src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
                        width="582"
                        alt="trello"/>
                </div>
            </div>
        )
    }
}

export default HomeSection
