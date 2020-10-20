import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: '',
            cname: '',
            email: '',
            contactNo: ''
        }

        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeCNameHandler = this.changeCNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }
    
    changeUsernameHandler = (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    changeCNameHandler = (event) => {
        this.setState({cname: event.target.value});
    }

    changeContactNoHandler = (event) => {
        this.setState({contactNo: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    saveCustomer = (e) => {
        e.preventDefault();
        let customer = {username: this.state.username, password: this.state.password, cname: this.state.cname, email: this.state.email, contactNo: this.state.contactNo};
        console.log('customer => ' + JSON.stringify(customer));

        CustomerService.createCustomers(customer).then(res => {
            this.props.history.push('/customers');
        });
    }

    cancel(){
        this.props.history.push('/customers');
    }
    
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Add Customer</h2>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Userame: </label>
                                    <input placeholder = "Username" name="Username" className="form-control"
                                    value={this.state.username} onChange={this.changeUsernameHandler} />
                                </div>
                                <div className = "form-group">
                                    <label> Password: </label>
                                    <input placeholder = "Password" name="Password" className="form-control"
                                    value={this.state.password} onChange={this.changePasswordHandler} />
                                </div>
                                <div className = "form-group">
                                    <label> Name: </label>
                                    <input placeholder = "Name" name="cname" className="form-control"
                                    value={this.state.cname} onChange={this.changeCNameHandler} />
                                </div>
                                <div className = "form-group">
                                    <label> Email: </label>
                                    <input placeholder = "Email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.changeEmailHandler} />
                                </div>
                                <div className = "form-group">
                                    <label> Phone Number: </label>
                                    <input placeholder = "0000000000" name="contactNo" className="form-control"
                                    value={this.state.contactNo} onChange={this.changeContactNoHandler} />
                                </div>
                                <button className="btn btn-success" onClick={this.saveCustomer}> Save </button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel </button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCustomerComponent;