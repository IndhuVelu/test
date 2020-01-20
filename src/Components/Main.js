import React, { Component } from 'react'
import Header1 from '../Pages/Header/Header'
import { Link } from 'react-router-dom';


 class Main extends Component {
     constructor(props) {
         super(props)
     
         this.state = ({
              company_name:'',
              company_mail:'',
              company_address:'',
              company_city:'',
              company_zip:'',
              company_country:'',
              company_state:'',
              img:'',
              filei:'',
              customer_name:'',
              customer_mail:'',
              customer_invoice:'',
              customer_address:'',
              customer_city:'',
              customer_zip:'',
              customer_country:'',
              customer_state:'',
              amount:'0',
              item:'',
              description:'',
              quantity:'',
              price:'',
                tax:'0',
                total:'0'
         })
     }
     handleCompanyNameChange=(event)=>{
        this.setState({
            company_name:event.target.value
        })
     }
     handleCompanyMailChange=(event)=>{
        this.setState({
            company_mail:event.target.value
        })
     }
     handleCompanyAddressChange=(event)=>{
        this.setState({
            company_address:event.target.value
        })
     }
     handleCompanyCityChange=(event)=>{
        this.setState({
            company_city:event.target.value
        })
     }
     handleCompanyZipChange=(event)=>{
        this.setState({
            company_zip:event.target.value
        })
     }
     handleCompanyCountryChange=(event)=>{
        this.setState({
            company_country:event.target.value
        })
     }
     handleCompanyStateChange=(event)=>{
        this.setState({
            company_state:event.target.value
        })
     }
// customer
     handleCustomerNameChange=(event)=>{
        this.setState({
            customer_name:event.target.value
        })
     }
     handleCustomerMailChange=(event)=>{
        this.setState({
            customer_mail:event.target.value
        })
     }
     handleCustomerInvoiceChange=(event)=>{
        this.setState({
            customer_invoice:event.target.value
        })
     }
     handleCustomerAddressChange=(event)=>{
        this.setState({
            customer_address:event.target.value
        })
     }

     handleCustomerDateChange=(event)=>{
        this.setState({
            customer_date:event.target.value
        })
     }
     handleCustomerCityChange=(event)=>{
        this.setState({
            customer_city:event.target.value
        })
     }
     handleCustomerZipChange=(event)=>{
        this.setState({
            customer_zip:event.target.value
        })
     }
     handleCustomerCountryChange=(event)=>{
        this.setState({
            customer_country:event.target.value
        })
     }
     handleCustomerStateChange=(event)=>{
        this.setState({
            customer_state:event.target.value
        })
     }
     //third form
     handleItemChange=(event)=>{
        this.setState({
            item:event.target.value
        })
     }
     handleDescriptionChange=(event)=>{
        this.setState({
            description:event.target.value
        })
     }
     handleQuantityChange=(event)=>{
        this.setState({
            quantity:event.target.value
        })
        setTimeout(this.addamount,100);
     }
     handlePriceChange=(event)=>{
        this.setState({
            price:event.target.value,
        })
        setTimeout(this.addamount,100);
    }

     addamount=()=>{
        var price=this.state.price;
        var quantity=this.state.quantity;
        var am=price*quantity;
        this.setState({
            amount:am

        })
        setTimeout(this.addtax,100); 
        
     }
     addtax=()=>{
         var taxamount=(this.state.amount)*0.13;
         this.setState({
            tax:taxamount 
         }) 
         setTimeout(this.addtotal,100);
     }
     addtotal=()=>{
        var totalamount=(this.state.amount)+(this.state.tax);
        this.setState({
           total:totalamount 
        }) 
    }

     store=()=>{
        
       
          let company_name = this.state.company_name;
           let company_mail =this.state.company_mail;
           let company_address = this.state.company_address;
           let company_city = this.state.company_city;
           let company_zip = this.state.company_zip;
           let company_country = this.state.company_country;
           let company_state = this.state.company_state;

           let customer_name = this.state.customer_name;
           let customer_mail =this.state.customer_mail;
           let customer_invoice =this.state.customer_invoice;
           let customer_address = this.state.customer_address;
           let customer_date = this.state.customer_date;
           let customer_city = this.state.customer_city;
           let customer_zip = this.state.customer_zip;
           let customer_country = this.state.customer_country;
           let customer_state = this.state.customer_state;

           let item = this.state.item;
           let description=this.state.description;
           let quantity=this.state.quantity;
           let price=this.state.price;
          let tasks;
          if(company_name === ''||company_mail ==='' || company_address ==='' || company_state ===''||
           customer_name ===''||customer_mail ===''||customer_invoice ===''||
           item ===''||quantity ===''||price ==='' ){
                alert('please enter  all the values');
                return ""
          }
          else{
                if (localStorage.getItem("Details") == null) {
                    tasks = [];
                } else {
                    tasks = JSON.parse(localStorage.getItem("Details"));
                }
                tasks.push({ company_name: company_name, company_mail: company_mail,company_address:company_address,company_city:company_city,company_zip:company_zip,company_country:company_country,company_state:company_state,
                    customer_name:customer_name,customer_mail:customer_mail,customer_invoice :customer_invoice , customer_address: customer_address,customer_date:customer_date, customer_city:customer_city,customer_zip:customer_zip,customer_country:customer_country,customer_state:customer_state,
                    item:item, description:description,quantity:quantity,price:price});
                  localStorage.setItem("Details", JSON.stringify(tasks));
                  alert("Submitted Successfully!");
         }
          

      }
      abc(){
          this.store()
          var array = {
            company_name:this.state.company_name,
            company_mail:this.state.company_mail,
            company_address:this.state.company_address,
            company_city:this.state.company_city,
            company_zip:this.state.company_zip,
            company_country:this.state.company_country,
            company_state:this.state.company_state,
            filename:this.state.img,
            customer_name:this.state.customer_name,
            customer_mail:this.state.customer_mail,
            customer_invoice:this.state.customer_invoice,
            customer_date:this.state.customer_date,
            customer_address:this.state.customer_address,
            customer_city:this.state.customer_city,
            customer_zip:this.state.customer_zip,
            customer_country:this.state.customer_country,
            customer_state:this.state.customer_state,
            amount:this.state.amount,
            item:this.state.item,
            description:this.state.description,
            quantity:this.state.quantity,
            price:this.state.quantity,
              tax:this.state.tax,
              total:this.state.total
       }
          this.props.name(array);
        //   this.props.history.push('/home');
      }
      
     FileHandle=(event)=>{
       var file=event.target.files[0]
       this.setState({
        filei:event.target.value
        })
       var reader= new FileReader();
       reader.onload=()=>{
           this.setState({
            img:reader.result
           })
          
           
       }
       reader.readAsDataURL(file)  
       
     }
    render() {
        return (  
            <div >
               <Header1/>
                <div className="main">
                    <div className="leftdiv">
                        <p className="para1">FREE TOOLS</p>
                        <h1  className="head1">Try our free invoice generator</h1>
                        <p className="para2">Fill out the invoice template below to get started</p>
                         <a href=" #btn_form" className="sell_btn">Create invoices  </a>
                    </div>
                    <div className="rightdiv">
                        <img  alt ="log0" src="https://cdn.shopify.com/growth-tools-assets/home/tools-hero-small-a6423211f306f8389d78b31067a486321acab30ecc6ccb4e149daa574f956cd6.jpg" width="510px" height="400px"/>
                    </div>
                </div>
                <div className="submain1">
                    <div id="head2"><center><h1>Fast and easy invoicing</h1 ></center></div>
                    <div id="para3">Shopify’s online invoice generator makes your life easier when it comes to billing and collecting money.</div>
                    {/* <div id="para4">Simply fill in the required information and create an invoice on the spot. You can save, print or email it directly to your clients. The Shopify invoice maker uses a professional layout that includes all of the necessary details for clean, consistent, and accurate billing practices. See a sample invoice <a href="">here</a>.</div> */}
                </div>
                <div className="form_main" id="btn_form">
                    <div className="form_header">
                       <h3 className="form_header_heading">Enter your company information <hr/> </h3>
                        {/* <div> <span class="step-counter"> Step 1 of 3</span> </div> */}
                    </div>
                    <div className="form_section">
                        <div className="form_left">
                            <div>
                                <input id="company_name"type="text" placeholder="Company Name" value={this.state.company_name} onChange={this.handleCompanyNameChange}/>  
                                <input id="mail"type="email" placeholder="Email Address" value={this.state.company_mail}  onChange={this.handleCompanyMailChange}/>
                            </div>
                            <div>
                                <input id="address" type="text" placeholder=" Address"  value={this.state.company_address}  onChange={this.handleCompanyAddressChange}/>   
                             </div>
                             <div>
                                <input id="city"type="text" placeholder="City" value={this.state.company_city}   onChange={this.handleCompanyCityChange}/>
                                <input id="zip"type="number" pattern="[0-9]{6}" placeholder="Zip/Pincode" value={this.state.company_zip}  onChange={this.handleCompanyZipChange} /> 
                            </div>
                            <div>
                                <select id="country" value={this.state.company_country}  onChange={this.handleCompanyCountryChange}>
                                
                                        <option value="India">India</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United States">United States</option>
                                        <option value="United KingDom">United KingDom</option>
                                </select>
                                <select id="state" value={this.state.company_state}  onChange={this.handleCompanyStateChange}>
                                <option >State</option>
                                        <option value="TamilNadu">TamilNadu</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Andra">Andra</option>
                                </select>
                            </div>
                        </div>
                        <div className="form_right">
                            <div>
                                <img alt = "log2" id="pic_img" src="pic_img.png" width="100px" height="100px"/>
                            </div>
                            <div>Add your logo by browsing from your device.</div>
                            <div id="file_border"> <input id="file" type="file" value={this.state.filei} onChange={this.FileHandle} /> </div>
                        </div>
                    </div>
                    <div className="form_header">
                       <h3 className="form_header_heading">Enter customer and invoice information <hr/> </h3>
                        {/* <div> <span class="step-counter"> Step 1 of 3</span> </div> */}
                    </div>
                    <div className="form_section">
                        <div className="form_left1">
                            <div>
                                <input id="customer_name"type="text" placeholder="Your Customer's Name" value={this.state.customer_name} onChange={this.handleCustomerNameChange} />
                                <input id="customer_mail"type="email" placeholder="Your Customer's Email Address"  value={this.state.customer_mail}  onChange={this.handleCustomerMailChange} /> 
                                <input id="customer_invoice"type="number" placeholder="Invoice Number" value={this.state.customer_invoice}  onChange={this.handleCustomerInvoiceChange} />
                            </div>
                            <div>
                                <input id="customer_address" type="text" placeholder="Your Customer's Address" value={this.state.customer_address}  onChange={this.handleCustomerAddressChange}/> 
                                <input id="customer_date" type="date" min = "2020-01-06" value={this.state.customer_date}  onChange={this.handleCustomerDateChange}/>
                             </div>
                             <div>
                                <input id="customer_city"type="text" placeholder="City" value={this.state.customer_city}   onChange={this.handleCustomerCityChange} />
                                <input id="customer_zip"type="number" pattern="[0-9]{6}" placeholder="Zip/Pincode" value={this.state.customer_zip}  onChange={this.handleCustomerZipChange}/>
                            </div>
                            <div>
                                <select id="customer_country" value={this.state.customer_country}  onChange={this.handleCustomerCountryChange}>
                                     <option value="India">India</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United States">United States</option>
                                        <option value="United KingDom">United KingDom</option>
                                </select>
                                <select id="customer_state" value={this.state.customer_state}  onChange={this.handleCustomerStateChange}>
                                        <option value="TamilNadu">TamilNadu</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Andra">Andra</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                    <div className="form_header">
                       <h3 className="form_header_heading">Enter the items you wish to bill <hr/> </h3>
                        {/* <div> <span class="step-counter"> Step 1 of 3</span> </div> */}
                    </div>
                    <div className="form_section">
                        <div className="form_left1">
                            <div>
                                <input id="item"type="text" placeholder="Item" value={this.state.item} onChange={this.handleItemChange}/>
                                <input id="Description"type="text" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                                <input id="quantity"type="number" placeholder="Quantity" value={this.state.quantity} onChange={this.handleQuantityChange}/> 
                                <input id="price"type="number" placeholder="Price" value={this.state.price} onChange={this.handlePriceChange} /> &nbsp; &nbsp; &nbsp;
                                <label>Amount</label> &nbsp; &nbsp;
                                <label>{this.state.amount}</label>
                                {/* <div className="plus">
                                    <img alt="log3" src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/plus_circle-512.png" width="25px" height="25px"/>
                                    <a  id="addlink" href="">Add a line item</a>
                                </div> */}
                            </div>
                           
                        </div>
                        <hr/>
                    </div>
                    <div className="form_section">
                        <div className="last_form_left">
                            <div>
                                <input id="memo"type="text"></input> 
                                
                            </div>           
                        </div>
                        <div className="last_form_right">
                            <div className="tot">
                            <div>
                               <h3> SUBTOTAL</h3>
                               <h3>TAX</h3>
                            </div>
                            <div>
                               <p> {this.state.amount}</p>
                               <p>{this.state.tax}</p>
                            </div>
                            </div>
                            <div className="Blue">
                                <center> <h3> TOTAL</h3>
                                <span>{this.state.total}</span></center>
                            </div>
                        
                            <Link to="/home"> <button id="submit"   onClick={this.abc.bind(this)}>add</button></Link>
                            {/* <button onClick={this.store}></button> */}
                        </div>
                        
                       
                    </div>

                    </div>
            
            </div>
        )
    }
}

export default Main;
