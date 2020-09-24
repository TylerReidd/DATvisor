// import React from 'react';

// const AddTrip = (props) => {
//     return ( 
//         <>
//         <h1>Add A Trip</h1>

//     <form id = 'new-form' action="/my-trips" method="POST">
//         <label>Name of Trip:
//         <input type="text"/>
//         </label>
//         <br></br>
//         <label>Location:
//         <input type="text"/>
//         </label>
//         <br></br>
//         <label>Departure:
//         <input type="date"/>
//         </label>
//         <br></br>
//         <input type="submit"/>
//     </form>
//         <a href="/my-trips">Cancel</a>

//         </>
//      );
// }
 
// export default AddTrip;

import React, { Component } from 'react'
import './AddTrip.css';

class AddTrip extends Component {
    state = { 
        invalidForm: true,
        formData: {
            state: {
            nameOfTrip: [],
            location: [],
            departs: [],
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTrip(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
     }

     formRef = React.createRef()

    render() { 
        return ( 
            <>
                <h1>Add A Trip</h1>
                <div className="AddTrip" id="addTip">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <label>Name Of Trip:</label>
                            <input name="nameOfTrip" id="nameOfTrip" type="text" className="active" value={this.state.formData.nameOfTrip} onChange={this.handleChange} />
                            <label>Location:</label>
                            <input name="location" id="location" type="text" className="active" value={this.state.formData.location} onChange={this.handleChange} />
                            <label>Departs:</label>
                            <input name="departs" id="departs" type="date" className="active" value={this.state.formData.departs} onChange={this.handleChange} />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-danger"
                                    >
                            Create Trip
                        </button>                           
                    </form>
                </div>
            </>
         );
    }
}
 
export default AddTrip;