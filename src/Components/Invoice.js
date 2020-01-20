import React, { Component } from 'react'
import Header1 from '../Pages/Header/Header'
import '../Components/Invoice.css'
import Main from '../Components/Main'
class Invoice extends Component {
    aaaa(){
        console.log(this.props.name);
        return 
        
    }
 
   
    render() {
       
        var t=this.props.name.total;
        return (
            <div className="full">
               <div id="head">
                <div id="logo">
                    <h1 className="in">INVOICE</h1>
                </div>
                <div id="space">

                </div>
                <div id="l">
                    <img src={this.props.name.filename} alt="logo" width="100" height="100"/>
                    </div>
               </div>
               
                <div className="shop">
                <p>150 Elgin St, Ottawa, </p>
                <p>ON K2P 1L4, </p>
                <p>Canada</p>
                </div>

                <div className="two">
                    <div className="company">
                    <h1 onClick={this.aaaa.bind(this)}>Company Details</h1>
                        <div className="companyDetails">
                           {this.props.name.company_name} <br/> 
                            {this.props.name.company_mail} <br/>
                           {this.props.name.company_address} <br/> 
                            {this.props.name.company_city}  &nbsp;
                           {this.props.name.company_zip} <br/> 
                           {this.props.name.company_state} <br/> 
                            {this.props.name.company_country} <br/> 
                        </div>
                    </div>
                    <div className="customer">
                    <h1 onClick={this.aaaa.bind(this)}>Customer Details</h1>
                        <div className="companyDetails">
                            {this.props.name.customer_name} <br/>
                            {this.props.name.customer_mail} <br/>
                            {this.props.name.customer_address} <br/>
                            {this.props.name.customer_city}  &nbsp;
                            {this.props.name.customer_zip} <br/>
                            {this.props.name.customer_state} <br/>
                            {this.props.name.company_country} <br/>
                        </div>
                    </div>
                    <div className="customer">
                    <h1 onClick={this.aaaa.bind(this)}>Invoice Details</h1>
                        <div className="companyDetails">
                            <p>Invoice #  &nbsp; &nbsp; &nbsp;: {this.props.name.customer_invoice} <br/></p>
                            <p>Invoice Date : {this.props.name.customer_date} <br/></p>
                        
                        </div>
                    </div>
                </div>

                 <div className="itemDetails">
                 <table  id="customers"width="400">
                    <tr width='100'>
                    <th>Quantity</th>
                    <th>Items</th>
                    <th>price</th>
                    <th>Total</th>
                    </tr>
                    <tr width='100'>
                  
                    <td width='400'> {this.props.name.quantity} </td>
                    <td width='400' height='50'> {this.props.name.item} </td>
                    <td width='400' height='50'> {this.props.name.price} </td>
                    <td width='400' height='50'> {this.props.name.total} </td>
                    </tr>
                    {/* <tr>
                    <td width='400'> 3 </td>
                    <td width='400' height='50'> Ball </td>
                    <td width='400' height='50'> 5 </td>
                    <td width='400' height='50'> 73.45</td>

                    </tr> */}
                    
                    </table>
                    </div>
                    <div  className="tax">
                            <div>
                                Tax &nbsp; &nbsp; &nbsp;: {Math.round(this.props.name.tax)} <br/>
                                <h3 > Total&nbsp; &nbsp; &nbsp;:{Math.round(Number(t)+73.45)}</h3> 
                            </div>
                            
                            
                            
                    
                    </div>
               
                
            </div>
        )
    }
}

export default Invoice
