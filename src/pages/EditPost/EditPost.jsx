import React, { Component } from 'react';
import './EditPost.css'
import { Link } from 'react-router-dom';

class EditPost extends Component {
    state = {
        invalidForm: false, 
        formData: this.props.location.state.postArrival,
    };
    

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateToDo(this.state.formData)
    }
    
    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };




    render() {
        return (
            <>
            <h1>Hell yeah</h1>
            <div className="EditToDo">
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                        <label  className="active" htmlFor="toDo">ToDo</label>
                        <input type="text" id='toDo' name="toDo"  className="active" value={this.state.formData.toDo} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="input-field col s12">
                            <label className="active" htmlFor="time">Time</label>
                            <input name="time" id="type" type="text" className="active" value={this.state.formData.name} onChange={this.handleChange}/>
                        </div>
                    </div> */}

                    <button
                        type="submit"
                        className="btn btn-success"
                        disasbled={this.state.invalidForm}>
                            Update To-Do
                        </button>
                        <Link
                            className="btn btn-danger"
                            to={{
                                pathname:"/post"
                            }}>
                               Cancel          
                            </Link>
                    </form>
                    
                </div>
                </>
            )
        }
    }
                            
export default EditPost