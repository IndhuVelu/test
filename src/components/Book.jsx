import React, { Component } from 'react'
import './Book.css'
import Details from '../component/Details/Details'

var count = 0;
 class Book extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            total:[]
        }
    }
    createOne=()=>{
        this.setState({
            total:this.state.total.concat([{id:count++,name:'',age:'',gender:'',berth:''}])
        })
    }
    DetailsChange = (id,e) => {
        var totaltemp = this.state.total;
        var temp = this.state.total.find(x=>x.id==id)
        totaltemp.splice(this.state.total.findIndex(x=>x.id==id),1)

        temp[e.target.name]=e.target.value
        totaltemp.push(temp)
        totaltemp.sort(function(a, b){
            return a.id-b.id
        })
        this.setState({
            total:totaltemp
        })
    }
    submit = ()=>{
        console.log(this.state.total)
        console.log(count)
    }
    render() {
       
        return (
            <div>
                <div >
                    <a className="back" href="/Train">Back</a>
                </div>
                <div>
                    <h4>Traveller Details </h4>
                    
                    {/* {this.state.count} */}
                   {this.state.total.map(e=>
                        <Details 
                            value={e}
                            DetailsChange={(a,e)=>this.DetailsChange(a,e)} />
                   )}
                    <button onClick={this.createOne}>Add</button>
                    <button onClick={this.submit}>Submit</button>
                   <div> Total Fair is :{count * 125}</div>
                </div>
            </div>
        )
    }
}

export default Book
