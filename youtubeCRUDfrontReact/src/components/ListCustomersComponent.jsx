import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class ListCustomersComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            customers: []
        }

        this.addCustomer = this.addCustomer.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        })
    }

    addCustomer(){
        this.props.history.push('/add-customers');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Customers List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCustomer}> Add Customer </button>
                </div>
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Password</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.customers.map(
                                    customer =>
                                    <tr key = {customer.username}>
                                        <td> {customer.password} </td>
                                        <td> {customer.cname} </td>
                                        <td> {customer.email} </td>
                                        <td> {customer.contactNo} </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListCustomersComponent;