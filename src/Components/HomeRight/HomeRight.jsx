import React, {Component} from 'react'
import '../HomeRight/HomeRight.css'
import { withRouter } from "react-router-dom";
import pic1 from '../../Assets/Images/pic1.jpg'
import pic2 from '../../Assets/Images/pic2.jpg'
import pic5 from '../../Assets/Images/pic3.jpg'
import pic6 from '../../Assets/Images/pic4.jpg'
import phone1 from '../../Assets/Images/brands1.jpg'
import phone2 from '../../Assets/Images/brands2.jpg'
import phone3 from '../../Assets/Images/brands3.jpg'
class HomeRight extends Component {
    constructor(props) {
        super(props)

        this.state = {
            makeup:[{id:1,image:phone1,name:"Makeup Kit",rate:"$10000"},{id:2,image:phone2,name:"Blusish Kit",rate:"$8000"},
            {id:3,image:phone3,name:" Special Makeup Brush",rate:"$9000"},]
        }
    }
    handleBook = (e) => {
        this.props.history.push('/cart', {id: this.props.id})
    }
    render() {
        return (
        <div className="board">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="item active">
                    <img src={pic1} alt="Los Angeles"/>
                </div>

                <div className="item">
                    <img src={pic2} alt="Chicago"/>
                </div>

                <div className="item">
                    <img src={pic5} alt="New york"/>
                </div>
                <div className="item">
                    <img src={pic6} alt="New york"/>
                </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <div><i className="fa fa-user">&nbsp; Featured Brands</i> <br/></div>
        <div className="board-card">
        {
            this.state.makeup.map(element => (
                <div class="card" style={{height:"400px"}}>
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

export default withRouter(HomeRight)