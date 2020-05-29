import React, {Component} from 'react'
import './Mobile.css'
import pic1 from '../../../Assets/Images/pic1.jpg'
import pic2 from '../../../Assets/Images/pic2.jpg'
import pic5 from '../../../Assets/Images/pic3.jpg'
import pic6 from '../../../Assets/Images/pic4.jpg'
import phone1 from '../../../Assets/Images/phone1.jpg'
import phone2 from '../../../Assets/Images/phone2.jpg'
import phone3 from '../../../Assets/Images/phone3.jpg'
import phone4 from '../../../Assets/Images/phone4.jpg'
import { withRouter } from "react-router-dom";
class Mobile extends Component {
    constructor(props) {
        super(props)

        this.state = {
         mobile:[{id:1,image:phone1,name:"Oppo",rate:"$10000"},{id:2,image:phone2,name:"Samsung",rate:"$8000"},
         {id:3,image:phone3,name:"Lenovo",rate:"$9000"},
         {id:4,image:phone4,name:"MI",rate:"$10000"}]
        }
    }
    handleBook = (e) => {
        this.props.history.push('/cart', {id: this.props.id})
    }
    render() {
        return (
            <div className="mobile">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">

                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="item active">
                            <img src={pic1} alt="Los Angeles"/>
                        </div>

                        <div class="item">
                            <img src={pic2} alt="Chicago"/>
                        </div>

                        <div class="item">
                            <img src={pic5} alt="New york"/>
                        </div>
                        <div class="item">
                            <img src={pic6} alt="New york"/>
                        </div>
                    </div>

                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div className="board-heading"><i className="fa fa-user">&nbsp; Featured Mobile Brands</i> <br/></div>
                <div className="board-card">
                {
                    this.state.mobile.map(element => (
                        <div class="card" style={{width:"267px",height:"420px"}}>
                        <img className="mobile-img" src={element.image} alt="Denim Jeans" />
                        <h5 className="card-title">{element.name} </h5>
                        <p class="price">{element.rate}</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <p><button onClick={e => this.handleBook(e)}>Add to Cart</button></p>
                        </div>
                    ))
                }
             
                </div>
            </div>
        )
    }
}

export default withRouter( Mobile)

