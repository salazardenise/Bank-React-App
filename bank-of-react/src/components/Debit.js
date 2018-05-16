import React, { Component } from 'react';

class Debit extends Component {
    render() {
        return (
        <div>
          <h2>Description: {this.props.description}</h2>
          <h3>Amount: ${this.props.amount}</h3>
          <h3>Date: {this.props.date}</h3>
          <br></br>
        </div>
        )
    }
}

export default Debit;