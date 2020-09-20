import React, { Component } from 'react'
import './AddPre.css';

class AddPre extends Component {
    state = { 
        invalidForm: true,
        formData: {
            toDo: ['']
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddPre(this.state.formData)
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
                <h1>Tasks to complete prior to Trip</h1>
                <div className="AddPre" id="addPre">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <label htmlFor="toDo">Task(s)</label>
                            <input name="toDo" id="toDo" type="text" className="active" value={this.state.formData.toDo} onChange={this.handleChange} />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-danger"
                                    >
                            Add Pre-Arrival Itinerary
                        </button>                           
                    </form>
                </div>
            </>
         );
    }
}
 
export default AddPre;