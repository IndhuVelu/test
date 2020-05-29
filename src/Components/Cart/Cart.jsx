import React, { Component } from 'react'
import phone1 from '../../Assets/Images/brands1.jpg'
 class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <div className="board-card">
                <div class="card">
                <img className="mobile-img" src={phone1} alt="Denim Jeans" />
                <h5 className="card-title"> 5% OFF </h5>
                <p class="price">$10000</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <p style={{display:"flex"}}><button onClick={e => this.handleBook(e)}>Add to Cart</button>
                <button onClick={e => this.handleBook(e)}>Remove</button></p>
                </div>
        </div>
            </div>
        )
    }
}

export default Cart
