import React, { Component } from 'react'
import './Header.css'
// import jsPDF from 'jspdf'
// import Main from '../../Components/Main'
class Header extends Component {

    // pdfGenerator=(e)=>{
    //     var doc= new jsPDF('p','pt');
    //     var source ='hi';

    //     doc.fromHTML(source,20,20);
    //     doc.save("invoice.pdf");
    // }

    render() {
        return (
            <div>
                 <div className="Header" onClick={this.pdfGenerator}>
                    <div className="logo">
                        <img src="https://mpng.pngfly.com/20180624/got/kisspng-shopify-logo-business-e-commerce-5b2f1a19756bd0.493640451529813529481.jpg" alt ="logo" height="70px" width="120px"/>
                    </div>
                    <div className="btn_div">
                        <button className="sell_btn">Sell on the Go and in person</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
