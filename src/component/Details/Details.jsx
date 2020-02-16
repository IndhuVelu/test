import React, { Component } from 'react'
import './Details.css'
class Details extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const id = this.props.value.id;
        return (
            <div className="Details">
                {this.props.count}
                <div>
                <select className="gender" name="gender" value={this.props.value.gender} onChange={(e)=>this.props.DetailsChange(id,e)}>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                </select>
                </div>
               <div> <input type="text" name="name"  value={this.props.value.name} placeholder="Enter Name" onChange={(e)=>this.props.DetailsChange(id,e)}/> </div>
                <div> <input type="number" name="age"  value={this.props.value.age} placeholder="Age" onChange={(e)=>this.props.DetailsChange(id,e)}/> </div>
                <div><select name="berth" className="berthpreference"  value={this.props.value.berth} onChange={(e)=>this.props.DetailsChange(id,e)}>
                    <option value="">No preference</option>
                    <option value="Lower Berth">Lower Berth</option>
                    <option value="Upper Berth">Upper Berth</option>
                    <option value="Middle Berth">Middle Berth</option>
                </select>
                </div>
            </div>
        )
    }
}

export default Details

